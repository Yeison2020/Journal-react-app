import React from "react";
import JournalEntry from "./JournalEntry";
import { useSelector } from "react-redux";

const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  console.log(notes);

  return (
    <div className="journal__entries">
      {notes?.map((note) => {
        return <JournalEntry key={note.id} {...note} />;
      })}
    </div>
  );
};

export default JournalEntries;
