import { useState } from "react";

const WeekStatus = ({ status, submitNewData }) => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [editingStatus, setEditingStatus] = useState(status);

  // const handleStatusEdit = event => {
  //   setEditingStatus(event.target.value);
  // };

  // const handleStatusUpdate = () => {
  //   event.preventDefault();
  //   submitNewData(editingStatus);
  //   setIsEditing(false);
  // };

  // return isEditing ? (
  //   <>
  //     <form onSubmit={handleStatusUpdate}>
  //       <label>
  //         Edit status:
  //         <select value={editingStatus} onChange={handleStatusEdit}>
  //           <option value="normal">Normal</option>
  //           <option value="holiday">Holiday</option>
  //         </select>
  //       </label>
  //       <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
  //       <input type="submit" value="submit" />
  //     </form>
  //     <style jsx>{`
  //       display: inline-block;
  //     `}</style>
  //   </>
  // ) : (
  //   <span onClick={() => setIsEditing(true)}>({status})</span>
  // );
  const [currentStatus, setCurrentStatus] = useState(status);
  const [isEditing, setIsEdting] = useState(false);

  const toggleCurrentStatus = () => {
    setIsEdting(true);
    if (currentStatus === "normal") {
      setCurrentStatus("holiday");
    } else {
      setCurrentStatus("normal");
    }
  };

  const cancelEdit = () => {
    setCurrentStatus(status);
    setIsEdting(false);
  };

  const handleStatusUpdate = () => {
    submitNewData(currentStatus);
    setIsEdting(false);
  };

  return (
    <div>
      <span onClick={toggleCurrentStatus}>{currentStatus}</span>
      {isEditing && (
        <>
          <button onClick={cancelEdit}>Cancel</button>
          <button onClick={handleStatusUpdate}>Submit</button>
        </>
      )}
      <style jsx>{`
        span {
          margin-left: 20px;
          text-transform: capitalize;
          background: #dad6f3;
          padding: 5px 10px;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          cursor: pointer;
        }
        button {
          margin-left: 20px;
          padding: 5px 10px;
          border: none;
          font-size: 1.6rem;
          font-weight: 700;
          color: slateblue;
          background: white;
          cursor: pointer;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          transition: background 0.3s ease;
        }
        button:hover {
          color: white;
          background: slateblue;
        }
      `}</style>
    </div>
  );
};

export default WeekStatus;
