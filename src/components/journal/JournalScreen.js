import React from "react";
import Sidebar from "./Sidebar";
import NothingSelected from "./NothingSelected ";
import NotesScreen from "../notes/NotesScreen";
import { useSelector } from "react-redux";
const JournalScreen = () => {
  const activeNotes = useSelector((state) => state.notes.active);
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>{activeNotes ? <NotesScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
