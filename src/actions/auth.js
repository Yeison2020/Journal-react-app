import types from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
// Note aadding the dispatch make our app to be asyn and wait for certains actions
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(email, password));
    }, 3500);
  };
};

// Register functions

export const startRegisterWithNameEmailPassowrd = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ newUser }) => {
        dispatch(login(newUser.uid, newUser.displayName));
      });
  };
};

// This the code encharge of auth using Google and return a promise

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

// I changed my login for the function
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: { uid, displayName },
  };
};
