import types from "../types/types";

export const loadingReducer = (state = {}, action) => {
  switch (action.type) {
    case types.uiStartLoading:
      return {
        loadingbtn: action.payload.uiStartLoading,
      };
    case types.uiFinisheLoading:
      return {
        loadingbtn: action.payload.uiFinisheLoading,
      };
    default:
      return state;
  }
};
