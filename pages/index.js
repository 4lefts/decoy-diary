import withContainer from "../components/Container";

const Home = () => {
  return (
    <div>
      <p>
        This is the home page. There will be a logo here and stuff. If you're
        seeing this, you're not signed in; signing in automatically redirects
        you to /diary?monday=currentMonday.
      </p>
    </div>
  );
};

export default withContainer(Home);
