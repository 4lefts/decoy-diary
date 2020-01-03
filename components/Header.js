export default ({ user, onSignOut }) => {
  const UserControls = () => {
    return (
      <div>
        {user && <span>Signed in as {user.displayName}</span>}
        <button onClick={onSignOut}>Sign Out</button>
        <style jsx>
          {`
            div.loader {
              width: 100%;
              height: 23px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            button {
              margin-left: 20px;
              padding: 5px 10px;
              width: 100px;
              border: none;
              font-size: 1em;
              font-weight: 700;
              color: dodgerblue;
              background: white;
              cursor: pointer;
              border-radius: 2px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);
              transition: background 0.3s ease;
            }
            .loading-btn {
              background: dodgerblue;
            }
            button:hover {
              color: white;
              background: dodgerblue;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <>
      {user && (
        <header>
          <h1>Decoy Diary</h1>
          {UserControls()}
        </header>
      )}
      <style jsx>
        {`
          header {
            grid-area: header;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .logo-container {
            margin-right: 10px;
          }
        `}
      </style>
    </>
  );
};
