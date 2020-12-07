import React, { useState, Component } from "react";
import { useDispatch } from "react-redux";
import "./CalendarForm.css";
//import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { withRouter, Link, Route } from "react-router-dom";
import { outputDate, colorDate } from "../../_actions/date_action";
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko";

var Date_send = 0;
let Body;
let isSex;
let isProtection;
let isEgg;
let isControl;
let isBleed;
let dateMood;
let dateCondition1;
let dateCondition2;
let dateCondition3;
let dateMemo;

var now = new Date();
var mm = now.getMonth() + 1;
var yyyy = now.getFullYear();
var calendar = new Date(yyyy, mm, 0);

var d = calendar.getDate();
var m = calendar.getMonth() + 1;
var y = calendar.getFullYear();
if (d < 10) {
  d = "0" + d;
}

if (m < 10) {
  m = "0" + m;
}
calendar = y + "-" + m + "-" + d;

export function callDay(clickedday) {
  return clickedday;
}

function CalendarForm(props) {
  const dispatch = useDispatch();

  const [date, setDate] = useState("");

  const handleSelect = (ranges) => {
    console.log("레인지", ranges.selection.endDate);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  var startDate = new Date(2020, 11, 1);
  var endDate = new Date(2020, 11, 9);

  const onDateHandler = (event) => {
    console.log(event);
    var mm = event.getMonth() + 1;
    var yyyy = event.getFullYear();
    calendar = new Date(yyyy, mm, 0);

    var d = calendar.getDate();
    var m = calendar.getMonth() + 1;
    var y = calendar.getFullYear();
    if (d < 10) {
      d = "0" + d;
    }

    if (m < 10) {
      m = "0" + m;
    }
    calendar = y + "-" + m + "-" + d;

    dispatch(colorDate()).then((response) => {
      console.log(response.payload, "출력");
      if (response.payload[0][0]) {
        console.log(response.payload[0][0].bleedStart);
        console.log(response.payload[1][0].bleedEnd);
      }
    });
  };

  var selectionRange = {
    selection: {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
      color: "#f06161",
    },
    selection1:{
      startDate: new Date(2020,11,10),
      endDate: new Date(2020,11,20),
      key :"selection",
      color: "pink",
    }
  };

  const maxDate = new Date();
  const minDate = new Date(1901, 1);

  const callDay = (ranges) => {
    var clickedday = ranges.selection.endDate;
    console.log(clickedday);
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
          "/calendar_detail/" +
            props.match.params.name +
            "/" +
            clickedday +
            "/" +
            props.match.params.id
        );
      } else {
        console.log("해당 날짜 페이지로 이동 ", clickedday);
        Body = response.payload;
        props.history.push(
          "/calendar_show/" +
            props.match.params.name +
            "/" +
            clickedday +
            "/" +
            props.match.params.id
        );
      }
    });
  };

  return (
    <div style={{ marginTop: "50px", width: "100%", textAlign: "center" }}>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginLeft: "5%",
          marginRight: "5%",
          height: "100%",
        }}
      >
        <DateRange
          value={date}
          ranges={[selectionRange.selection1]}
          locale={ko}
          minDate={minDate}
          onChange={callDay}
          onShownDateChange={onDateHandler}
        />
      </div>
      <div id="errorMSG" style={{ color: "red", display: "none" }}>
        오늘 이후의 날짜는 선택할 수 없습니다.{" "}
      </div>
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
export { dateCondition2 };
export { dateCondition3 };
export { dateMemo };
export { Body };
export { calendar };
