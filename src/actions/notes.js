import { db } from "../firebase/firebaseConfig";

export const startNotes = () => {
  return (dispatch, getState) => {
    const state = getState().auth.uid;
    console.log(state);
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    // Here the path has to macth with firebase abd data structure of notes with newNote
    const doc = db.collection(`${state}/journal/notes`).add(newNote);
  };
};
