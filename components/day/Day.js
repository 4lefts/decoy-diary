import { useState, useEffect } from "react";
import marked from "marked";
import DayHeader from "./DayHeader";
import DayEditForm from "./DayEditForm";

const Day = ({ dayData, submitNewData }) => {
  const { day, content, status } = dayData;
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState(dayData);
  const [contentHtml, setContentHtml] = useState(marked(content));

  useEffect(() => {
    setContentHtml(content ? marked(content) : "<p>Nothing yet...</p>");
  });

  const setEdit = state => {
    // reset to original data props
    setEditingData({
      day,
      content,
      status
    });
    setIsEditing(state);
  };

  const handleContentEdit = payload => {
    const newData = {
      day: editingData.day,
      content: payload,
      status: editingData.status
    };
    setEditingData(newData);
  };

  const handleStatusEdit = payload => {
    const newData = {
      day: editingData.day,
      content: editingData.content,
      status: payload
    };
    setEditingData(newData);
  };

  const handleDataSubmission = payload => {
    submitNewData(payload);
    setEdit(false);
  };

  return (
    <>
      <div className="day-container">
        <DayHeader
          day={day}
          isEditing={isEditing}
          handleClick={() => setEdit(!isEditing)}
        />
        {isEditing ? (
          <DayEditForm
            sendData={handleDataSubmission}
            editingData={editingData}
            handleStatusEdit={handleStatusEdit}
            handleContentEdit={handleContentEdit}
          />
        ) : (
          <>
            {status === "non-pupil day" && (
              <p className="special">Non-pupil day</p>
            )}
            {status === "holiday" && <p className="special">Holiday</p>}
            {status === "normal" && (
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            )}
          </>
        )}
      </div>
      <style jsx>
        {`
          div.day-container {
            background: white;
            padding: 10px;
            border-radius: 2px;
            margin-bottom: 1em;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
          }
          p.special {
            font-size: 1.6em;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default Day;
