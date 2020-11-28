import React, { useState, Component } from "react";
import { useDispatch } from "react-redux";
import "./CalendarForm.css";
//import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import { withRouter, Link, Route } from "react-router-dom";
import { outputDate } from "../../_actions/date_action";

var Date_send = 0;
let Body;
let isSex;
let isProtection;
let isEgg;
let isControl;
let isBleed;
let dateMood;
let dateCondition1;
let dateMemo;
let msg;
export function callDay(clickedday) {
  return clickedday;
}

function CalendarForm(props) {
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
/*
  const onDateHandler = (event) => {
    setDate(event.currentTarget.value);
  };
*/
  const maxDate = new Date();
  const minDate = new Date(1901, 1);

  const callDay = (clickedday) => {
    var Day = clickedday;
    var dd = clickedday.getDate();
    var mm = clickedday.getMonth() + 1;
    var yyyy = clickedday.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    clickedday = yyyy + "-" + mm + "-" + dd;
    Date_send = clickedday;
    /*
    var today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    today = yyyy + "-" + mm + "-" + dd;
    */
    var today = new Date();

    if (Day > today) {
      console.log("오늘 이후의 날짜에는 정보를 입력할 수 없습니다.");
      document.getElementById("errorMSG").style.display = "block";
      return;
    }

    dispatch(outputDate()).then((response) => {
      if (response.payload == "입력된 정보가 없습니다.") {
        console.log(response.payload, "캘린더 입력 페이지로 이동", clickedday);
        props.history.push(
          "/calendar_detail/" + props.match.params.name + "/" + clickedday
        );
      } else {
        console.log("해당 날짜 페이지로 이동 ", clickedday);
        Body = response.payload;
        props.history.push(
          "/calendar_show/" + props.match.params.name + "/" + clickedday
        );
      }
    });
  };

  return (
    <div style={{ marginTop: "50px", width:'100%', textAlign:'center'}}>
      <div
        style={{
          position: "relative",
          textAlign:'center',
          marginLeft:'5%',
          marginRight:'5%',
          height:'100%'
        }}
      >
        <Calendar
          onClickDay={callDay}
          value={date}
          calendarType="US"
          minDate={minDate} />
      
      </div>
      <div id="errorMSG" style={{color:'red', display:"none"}}>오늘 이후의 날짜는 선택할 수 없습니다. </div>
    </div>
  );
}

export default withRouter(CalendarForm);
export { Date_send };
export { isSex };
export { isProtection };
export { isEgg };
export { isControl };
export { isBleed };
export { dateMood };
export { dateCondition1 };
export { dateMemo };
export { Body };
