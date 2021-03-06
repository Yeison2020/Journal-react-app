import { db } from "../firebase/firebaseConfig";
import types from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from "sweetalert2";
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

export const startLaodingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    // Here I can remove an element base on any changes
    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

    // Here is not the right way to do it.
    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire("Saved", note.title, "success");
  };
};

export const refreshNote = (id, note) => {
  return {
    type: types.notesUpdated,
    payload: {
      id,
      note: {
        id,
        ...note,
      },
    },
  };
};
