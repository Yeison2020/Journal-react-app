import React from "react";
import { useDispatch } from "react-redux";
import JournalEntries from "./JournalEntries ";
import { startLogout } from "../../actions/auth";
import { useNavigate } from "react-router";

const Sidebar = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
    console.log("Click");
  };
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Yeison Casado</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="fa fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
