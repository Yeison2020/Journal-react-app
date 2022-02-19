import types from "../types/types";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "enmanue"));
    }, 3500);
  };
};

// I changed my login for the function
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: { uid, displayName },
  };
};
