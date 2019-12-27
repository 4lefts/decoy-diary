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
      <span onClick={handleStatusUpdate}>{currentStatus} Week</span>
      <style jsx>{`
        span {
          font-weight: 600;
          margin-left: 20px;
          text-transform: capitalize;
          background: #dad6f3;
          padding: 5px 10px;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        span:hover {
          background: slateblue;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default WeekStatus;
