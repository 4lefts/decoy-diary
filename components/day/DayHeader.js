const DayHeader = ({ day, isEditing, handleClick }) => {
  return (
    <>
      <header>
        <h3>{day}</h3>
        <button onClick={() => handleClick()}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </header>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        h3 {
          margin: 0.6em 0 0.6em 0;
        }
        button {
          margin-left: 20px;
          padding: 5px 10px;
          width: 100px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          font-size: 1em;
          font-weight: 700;
          color: slateblue;
          background: white;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.3s ease;
        }
        button:hover {
          color: white;
          background: slateblue;
        }
      `}</style>
    </>
  );
};

export default DayHeader;
