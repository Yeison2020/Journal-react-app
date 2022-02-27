// Notes reducer puer functions
import { type } from "@testing-library/user-event/dist/type";
import types from "../types/types";

const initialState = {
  notes: [],
  active: null,
};
export const notesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
