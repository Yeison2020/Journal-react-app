import { db } from "../firebase/firebaseConfig";
import types from "../types/types";

export const startNotes = () => {
  return async (dispatch, getState) => {
    const stateUID_USER = getState().auth.uid;
    console.log(stateUID_USER);
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    // Here the path has to macth with firebase abd data structure of notes with newNote
    const doc = await db
      .collection(`${stateUID_USER}/journal/notes`)
      .add(newNote);
    console.log(doc);
    dispatch(activeNotes(doc.id, newNote));
  };
};

export const activeNotes = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note,
    },
  };
};

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};
