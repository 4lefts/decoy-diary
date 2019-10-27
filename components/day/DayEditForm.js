const DayEditForm = ({
  sendData,
  editingData,
  handleStatusEdit,
  handleContentEdit
}) => {
  const handleSubmit = event => {
    event.preventDefault();
    sendData(editingData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="status-select">
          Status:
          <select
            value={editingData.status}
            onChange={event => handleStatusEdit(event.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="non-pupil day">Non-pupil day</option>
            <option value="holiday">Holiday</option>
          </select>
        </label>
        <label className="content-edit">
          Content:
          <textarea
            value={editingData.content}
            onChange={event => handleContentEdit(event.target.value)}
          />
        </label>
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 1em;
        }
        .status-select select {
          margin-left: 10px;
          padding: 5px;
          border-radius: 2px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          background: white;
          transition: border-color 0.3s ease;
        }
        .content-edit {
          display: flex;
          flex-direction: column;
        }
        .content-edit textarea {
          height: 80px;
          padding: 10px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 2px;
          font-family: "Open Sans", sans-serif;
          color: rgab(0, 0, 0, 0.875);
          transition: border-color 0.3s ease;
        }
        .status-select select:focus,
        .content-edit textarea:focus {
          border: 2px solid slateblue;
        }
        input.submit-btn {
          padding: 5px 10px;
          width: 100px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          font-size: 1em;
          font-weight: 700;
          background: white;
          color: slateblue;
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        input.submit-btn:hover,
        input.submit-btn:focus {
          color: white;
          background: slateblue;
          border-color: slateblue;
        }
      `}</style>
    </>
  );
};

export default DayEditForm;
