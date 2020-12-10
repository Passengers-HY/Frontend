import React from "react";
import MainForm from "../components/main/MainForm";
import CalendarForm_Detail from '../components/main/CalendarForm_Detail.js';
import "./Page.css";
import UnderbarForm_Calendar from "../components/main/UnderbarForm_Calendar";

const CalendarPage_Detail = () => {
  return (
    <div className="Body">
      <MainForm/>
      <CalendarForm_Detail/>
      
      <UnderbarForm_Calendar />

    </div>
  );
};

export default CalendarPage_Detail;
