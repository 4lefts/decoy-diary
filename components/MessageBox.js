const MessageBox = ({ message, handleDismiss }) => {
  return (
    <>
      <div>
        <p>{message}</p>
        <button onClick={() => handleDismiss()}>Dismiss</button>
      </div>
      <style jsx>
        {`
          div {
            position: fixed;
            left: 0;
            bottom: 0;
            margin: 30px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 10px 2em;
            background-color: #222;
            border-radius: 2px;
            color: white;
          }
          button {
            margin-left: 20px;
            padding: 5px 10px;
            width: 100px;
            height: 35px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            font-size: 1em;
            font-weight: 700;
            color: white;
            background: rgba(0, 0, 0, 0);
            cursor: pointer;
            border-radius: 2px;
            transition: background 0.3s ease;
          }
          button:hover {
            color: white;
            background: dodgerblue;
          }
        `}
      </style>
    </>
  );
};

export default MessageBox;
