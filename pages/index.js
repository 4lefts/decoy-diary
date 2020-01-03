import withContainer from "../components/Container";
import Loader from "../components/Loader";
import Logo from "../components/Logo";

const Home = ({ isLoadingUser, onSignIn }) => {
  return (
    <main>
      <h1>Welcome</h1>
      <Logo size={"240px"} />
      <button className={isLoadingUser ? "loading-btn" : ""} onClick={onSignIn}>
        {isLoadingUser ? (
          <div className="loader">
            <Loader size="18" color="white" />
          </div>
        ) : (
          <span>Sign In</span>
        )}
      </button>
      <p>Please use your Decoy School staff account.</p>
      <style jsx>
        {`
          main {
            grid-area: content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h1 {
            font-size: 6.4rem;
          }
          p {
            font-size: 1.6rem;
          }
          div.loader {
            width: 100%;
            height: 23px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          button {
            margin: 5rem 0 2rem 0;
            padding: 5px 10px;
            width: 200px;
            height: 38px;
            border: none;
            font-size: 2rem;
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
    </main>
  );
};

export default withContainer(Home);
