import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../firebase/firebaseConfig";
import { calcCurrentMonday } from "../functions/mondayFunctions";
import { makeBlankWeek } from "../functions/makeBlankWeek";
import withContainer from "../components/Container";
import MondayNav from "../components/MondayNav";
import Day from "../components/day/Day";
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";

const Diary = () => {
  const router = useRouter();
  const currentMonday = router.query.monday || calcCurrentMonday();
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [weekData, setWeekData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const weeksRef = db.collection("weeks");

  useEffect(() => {
    function updateData(newData) {
      setWeekData(newData);
    }
    function updateDataLoadingState(bool) {
      setIsLoadingData(bool);
    }
    function updateErrorMessage(code) {
      const msg = `Sorry, there was an error: ${code}.`;
      setErrorMessage(msg);
    }
    updateDataLoadingState(true);
    // firestore listener returns an unsubscribe function
    let unsubscribe = weeksRef.doc(currentMonday).onSnapshot(
      snapshot => {
        const data = snapshot.data() || makeBlankWeek();
        updateData(data);
        updateDataLoadingState(false);
      },
      err => {
        updateErrorMessage(err.code);
        updateDataLoadingState(false);
      }
    );
    return unsubscribe;
  }, [currentMonday]);

  // receives new data to update from individual edits on day components
  const sendEdits = newData => {
    // copy old data
    const dataToUpdate = JSON.parse(JSON.stringify(weekData));

    // check if we're updating a the diary (i.e. a day of the week)
    // or the whole week status
    if (newData.hasOwnProperty("day")) {
      // get array index of current day
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      const dayIndex = days.indexOf(newData.day);
      // replace old data at index with new
      dataToUpdate.diary[dayIndex] = newData;
    } else {
      // this is a status update
      dataToUpdate.status = newData;
    }
    setWeekData(dataToUpdate);
    weeksRef
      .doc(currentMonday)
      .set(dataToUpdate)
      .then(() => console.log("data updated!"))
      .catch(err => updateErrorMessage(err.code));
  };

  //-------------
  return (
    <>
      <div>
        {!isLoadingData ? (
          weekData && (
            <>
              <MondayNav
                currentMonday={currentMonday}
                status={weekData.status}
                submitNewData={sendEdits}
              />
              {weekData.diary.map(day => (
                <Day key={day.day} dayData={day} submitNewData={sendEdits} />
              ))}
            </>
          )
        ) : (
          <div className="loading">
            <Loader size={"300"} color={"slateblue"} />
          </div>
        )}
        {errorMessage && (
          <ErrorBox
            message={errorMessage}
            handleDismiss={() => setErrorMessage(null)}
          />
        )}
      </div>
      <style jsx>{`
        div.loading {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default withContainer(Diary);
