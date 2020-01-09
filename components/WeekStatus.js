import { useState, useEffect } from "react";

const WeekStatus = ({ status, submitNewData }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusUpdate = () => {
    if (currentStatus === "normal") {
      setCurrentStatus("holiday");
    } else {
      setCurrentStatus("normal");
    }
  };

  useEffect(() => {
    // i.e. if the status has changed but not been commited to the db, then
    if (currentStatus != status) submitNewData(currentStatus);
  });

  return (
    <div>
      <span>{currentStatus} Week</span>
      <button onClick={handleStatusUpdate}>Change</button>
      <style jsx>{`
        div {
          padding-right: 1em;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        span {
          text-transform: capitalize;
          margin-right: 1em;
        }
        button {
          padding: 5px 10px;
          width: 100px;
          height: 35px;
          text-decoration: none;
          text-align: center;
          font-size: 1.6rem;
          font-weight: 700;
          text-transform: capitalize;
          color: rgba(0, 0, 0, 0.875);
          background: white;
          cursor: pointer;
          border: none;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          transition: background 0.3s ease;
        }
        button:hover {
          background: dodgerblue;
          color: white;
        }
        @media print {
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WeekStatus;
