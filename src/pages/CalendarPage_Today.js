import React from "react";
import MainForm from "../components/main/MainForm";
import scheduleIMG from "../images/schedule_navy_svg.svg";
import CalendarForm_Today from '../components/main/CalendarForm_Today.js';
import UnderbarForm_Calendar from "../components/main/UnderbarForm_Calendar";

const CalendarPage_Today = () => {
  return (
    <div className="Body">
      <MainForm />
      <CalendarForm_Today/>
          <UnderbarForm_Calendar />

    </div>
  );
};

export default CalendarPage_Today;
