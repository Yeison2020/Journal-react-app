import types from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
// Note aadding the dispatch make our app to be asyn and wait for certains actions
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    // Import to have my loading here: before my dispatch
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .then((e) => {
        console.log(e);
      });
  };
};

// Register functions

export const startRegisterWithNameEmailPassowrd = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        // I needed to add async here to wait for display name promise
        await user.updateProfile({
          displayName: name,
        });
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
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

export const startLoading = () => {
  return {
    type: types.uiStartLoading,
    payload: {
      uiStartLoading: types.uiStartLoading,
    },
  };
};

export const finishLoading = () => {
  return {
    type: types.uiFinisheLoading,
    payload: {
      uiFinisheLoading: types.uiFinisheLoading,
    },
  };
};
