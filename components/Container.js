/*
Layout component handles sign in and out
and the listener for auth updates
unsubscribe from listeners is called on unmount
*/

import React from "react";
import router from "next/router";
import { auth, firebase } from "../firebase/firebaseConfig";
import { calcCurrentMonday } from "../functions/mondayFunctions";
import GlobalStyles from "./GlobalStyles";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBox from "./ErrorBox";

const withContainer = Content => {
  return class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
        unsub: null,
        isLoadingUser: false,
        errorMessage: null
      };
    }

    componentDidMount() {
      // check if this is a school email
      // (i.e. does not start with a number and ends @decoyschool.co.uk)
      function checkEmail(address) {
        return address.match(/^[^0-9]+@decoyschool.co.uk$/);
      }

      const unsubscribe = auth.onAuthStateChanged(usr => {
        // if there's no user (also if user signed out)
        // go to '/'
        if (!usr) {
          this.setState({ user: null });
          router.push("/");
          return;
        }
        // if this is not a staff account
        // sign out and go to '/'
        if (!checkEmail(usr.email)) {
          auth
            .signOut()
            .then(() =>
              this.updateErrorMessage(
                "Please sign in using a Decoy School staff email account."
              )
            )
            .catch(err => this.updateErrorMessage(err.code));
          return;
        }
        // if this is a staff account
        // go to /diary?=monday
        if (checkEmail(usr.email)) {
          this.setState({ user: usr });
          router.push(`/diary?monday=${calcCurrentMonday()}`);
        }
      });
      this.setState({ unsub: unsubscribe });
    }

    componentWillUnmount() {
      if (this.state.unsub) this.state.unsub();
    }

    updateErrorMessage(code) {
      const msg = `Sorry, there was an error: ${code}.`;
      this.setState({ errorMessage: msg });
    }

    handleSignIn = () => {
      this.setState({ isLoadingUser: true });
      const provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then(() => {
          this.setState({ isLoadingUser: false });
        })
        .catch(err => {
          this.updateErrorMessage(err.code);
          this.setState({ isLoadingUser: false });
        });
    };

    handleSignOut = () => {
      this.setState({ isLoadingUser: true });
      auth
        .signOut()
        .then(() => {
          this.setState({ isLoadingUser: false });
        })
        .catch(err => {
          this.updateErrorMessage(err.code);
          this.setState({ isLoadingUser: false });
        });
    };
    render() {
      return (
        <div>
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />

            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Quicksand:400,600&display=swap"
              rel="stylesheet"
            />

            <title>Decoy Diary</title>
          </Head>
          <Header
            user={this.state.user}
            isLoadingUser={this.state.isLoadingUser}
            onSignIn={() => this.handleSignIn()}
            onSignOut={() => this.handleSignOut()}
          />
          <Content
            isLoadingUser={this.state.isLoadingUser}
            currentMonday={calcCurrentMonday()}
            onSignIn={() => this.handleSignIn()}
          />
          <Footer />
          {this.state.errorMessage && (
            <ErrorBox
              message={this.state.errorMessage}
              handleDismiss={() => this.setState({ errorMessage: null })}
            />
          )}
          <GlobalStyles />
          <style jsx>
            {`
              div {
                padding: 0 10px;
                max-width: 1200px;
                margin: 0 auto;
                min-height: 100vh;
              }
              @supports (display: grid) {
                div {
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-template-rows: auto 1fr auto;
                  grid-template-areas:
                    "header"
                    "content"
                    "footer";
                }
              }
            `}
          </style>
        </div>
      );
    }
  };
};

export default withContainer;
