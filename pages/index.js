import withContainer from "../components/Container";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Logo size={"240px"} />
      <p>Please sign in using your Decoy School staff account.</p>
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h1 {
            font-size: 6.4rem;
          }
          p {
            font-size: 2.4rem;
          }
        `}
      </style>
    </div>
  );
};

export default withContainer(Home);
