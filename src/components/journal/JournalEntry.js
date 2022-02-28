import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNotes } from "../../actions/notes";

const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();
// Here I'm sending the whole body, because I destructured my object
  const handleClickActiveNote = () => {
    dispatch(activeNotes(id, { date, title, body, url }));
  };

  return (
    <div className="journal__entry" onClick={handleClickActiveNote}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",

            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
        <div className="journal__entry-date-box">
          <span>{noteDate.format("dddd")}</span>
          <h4>{noteDate.format("Do")}</h4>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
