import React from "react";
import NoteAppBar from "./NoteAppBar";

const NotesScreen = () => {
  return (
    <div className="notes__main-content">
      <NoteAppBar />
      <div className="note__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="note__title-input"
          autoComplete="off"
        ></input>

        <textarea
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
