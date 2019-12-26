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
      <span onClick={handleStatusUpdate}>{currentStatus}</span>
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
