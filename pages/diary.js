import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../firebase/firebaseConfig";
import { calcCurrentMonday } from "../functions/mondayFunctions";
import { makeBlankWeek } from "../functions/makeBlankWeek";
import withContainer from "../components/Container";
import MondayNav from "../components/MondayNav";
import Day from "../components/day/Day";
import Loader from "../components/Loader";
import MessageBox from "../components/MessageBox";

const Diary = () => {
  const router = useRouter();
  const currentMonday = router.query.monday || calcCurrentMonday();
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [weekData, setWeekData] = useState(null);
  const [message, setMessage] = useState(null);
  const weeksRef = db.collection("weeks");

  function showMessage(msg) {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 2500);
  }

  useEffect(() => {
    function updateData(newData) {
      setWeekData(newData);
    }
    function updateDataLoadingState(bool) {
      setIsLoadingData(bool);
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
        showMessage(`Sorry, there was an error: ${err.code}.`);
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
      .then(() => showMessage("updated!"))
      .catch(err => {
        showMessage(`Sorry, there was an error: ${err.code}.`);
      });
  };

  //-------------
  return (
    <>
      <main>
        {!isLoadingData ? (
          weekData && (
            <>
              <MondayNav
                currentMonday={currentMonday}
                status={weekData.status}
                submitNewData={sendEdits}
              />
              {weekData.diary.map(day => (
                <Day
                  key={day.day}
                  dayData={day}
                  submitNewData={sendEdits}
                  weekStatus={weekData.status}
                />
              ))}
            </>
          )
        ) : (
          <div className="loading">
            <Loader size={"300"} color={"dodgerblue"} />
          </div>
        )}
        {message && (
          <MessageBox
            message={message}
            handleDismiss={() => setMessage(null)}
          />
        )}
      </main>
      <style jsx>{`
        main {
          grid-area: content;
        }
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
