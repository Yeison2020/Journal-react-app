import React from "react";
import { startSaveNote } from "../../actions/notes";
import { useDispatch, useSelector } from "react-redux";

const NoteAppBar = () => {
  const { active: note } = useSelector((state) => state.notes);
  console.log(note);
  const dispatch = useDispatch();
  const handleSaveNote = () => {
    dispatch(startSaveNote(note));
  };
  return (
    <div className="note__appbar">
      <span>18 Febrerro 2022</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NoteAppBar;
