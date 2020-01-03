import Loader from "./Loader";
import Logo from "./Logo";

export default ({ user, isLoadingUser, onSignIn, onSignOut }) => {
  const UserControls = () => {
    return (
      <div>
        {user && <span>Signed in as {user.displayName}</span>}
        <button
          className={isLoadingUser ? "loading-btn" : ""}
          onClick={() => {
            user ? onSignOut() : onSignIn();
          }}
        >
          {isLoadingUser ? (
            <div className="loader">
              <Loader size="18" color="white" />
            </div>
          ) : user ? (
            <span>Sign Out</span>
          ) : (
            <span>Sign In</span>
          )}
        </button>
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
              color: slateblue;
              background: white;
              cursor: pointer;
              border-radius: 2px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);
              transition: background 0.3s ease;
            }
            .loading-btn {
              background: slateblue;
            }
            button:hover {
              color: white;
              background: slateblue;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <>
      <header>
        <div className="title-box">
          {user && (
            <div className="logo-container">
              <Logo size={"48px"} />
            </div>
          )}
          <h1>Decoy Diary</h1>
        </div>
        {UserControls()}
      </header>
      <style jsx>
        {`
          header,
          .title-box {
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
