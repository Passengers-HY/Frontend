import React from "react";
import MainForm from "../components/main/MainForm";
import scheduleIMG from "../images/schedule_navy_svg.svg";
import CalendarForm_Edit from '../components/main/CalendarForm_Edit';
import "./Page.css";
import UnderbarForm_Calendar from "../components/main/UnderbarForm_Calendar";


const CalendarPage_Detail = () => {
  return (
    <div className="Body">
      <MainForm/>
      <CalendarForm_Edit/>
      
            <UnderbarForm_Calendar />

    </div>
  );
};

export default CalendarPage_Detail;
