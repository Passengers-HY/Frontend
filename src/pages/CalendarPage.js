import React from "react";
import MainForm from "../components/main/MainForm";
import scheduleIMG from "../images/schedule_navy_svg.svg";
import CalendarForm from '../components/main/CalendarForm.js';
import UnderbarForm_Calendar from "../components/main/UnderbarForm_Calendar";

const CalendarPage = () => {
  return (
    <div className="Body" >
      <MainForm />
      <CalendarForm style={{textAlign:'center', margin:'auto'}}/>
      <UnderbarForm_Calendar />

    </div>
  );
};

export default CalendarPage;
