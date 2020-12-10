import React from "react";
import MainForm from "../components/main/MainForm";
import CalendarForm_Show from '../components/main/CalendarForm_Show.js';
import UnderbarForm_Calendar from "../components/main/UnderbarForm_Calendar";

const CalendarPage_Show = () => {
  return (
    <div className="Body">
      <MainForm />
      <CalendarForm_Show/>
      <UnderbarForm_Calendar />

    </div>
  );
};

export default CalendarPage_Show;
