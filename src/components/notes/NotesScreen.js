import React from "react";
import NoteAppBar from "./NoteAppBar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";

const NotesScreen = () => {
  // Adding this two : allow me to rename my variable from the Object
  const { active: note } = useSelector((state) => state.notes);
  console.log(note);
  const [formValues, handleInputChange, reset] = useForm(note);
  console.log(formValues);
  const { title, body } = formValues;
  console.log(title);

  return (
    <div className="notes__main-content">
      <NoteAppBar />
      <div className="note__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="note__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        ></input>

        <textarea
          value={body}
          onChange={handleInputChange}
          placeholder="What happend today"
          className="notes__text-area"
        ></textarea>
        <div className="note__image">
          <img src="https://s3.us-east-1.amazonaws.com/maxonsites/images/maxon/_800x418_crop_center-center_82_none/Universe_5_Hero.jpg?mtime=1630681085"></img>
        </div>
      </div>
    </div>
  );
};

export default NotesScreen;
