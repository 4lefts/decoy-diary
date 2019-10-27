import { useState } from "react";
const WeekStatus = ({ status, submitNewData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStatus, setEditingStatus] = useState(status);
  const handleStatusEdit = event => {
    setEditingStatus(event.target.value);
  };
  const handleStatusUpdate = () => {
    event.preventDefault();
    submitNewData(editingStatus);
    setIsEditing(false);
  };
  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleStatusUpdate}>
          <label>
            Edit status:
            <select value={editingStatus} onChange={handleStatusEdit}>
              <option value="normal">Normal</option>
              <option value="holiday">Holiday</option>
            </select>
          </label>
          <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
          <input type="submit" value="submit" />
        </form>
      ) : (
        <h2 onClick={() => setIsEditing(true)}>Week Status: {status}</h2>
      )}
    </div>
  );
};

export default WeekStatus;
