import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { inputDate } from "../../_actions/date_action";
import "./CalendarForm.css";
import "../common/Button.css";
import circleIMG from "../../images/circle_svg.svg";

//import callDay from "./CalendarForm";
//import clickedday from './CalendarForm';

function CalendarForm_Detail(props) {
  const dispatch = useDispatch();
  const rawDate = new Date(props.match.params.date);
  const showDate = rawDate.getDate();
  const date = props.match.params.date;

  const [cycleStart, setCycleStart] = useState("");
  const [cycleEnd, setCycleEnd] = useState("");
  const [isProtection, setProtection] = useState("");
  const [isSex, setSex] = useState("");
  const [isControl, setControl] = useState("");
  const [dateMood, setMood] = useState("");
  const [dateCondition, setCondition] = useState("");
  const [dateMemo, setMemo] = useState("");

  const onStartHandler = (event) => {
    setCycleStart(event.currentTarget.value);
  };
  const onEndHandler = (event) => {
    setCycleEnd(event.currentTarget.value);
  };
  const onControlHandler = (event) => {
    setControl(event.currentTarget.value);
  };
  const onSexHandler = (event) => {
    setSex(event.currentTarget.value);
  };
  const onProtectionHandler = (event) => {
    setProtection(event.currentTarget.value);
  };
  const onMoodHandler = (event) => {
    setMood(event.currentTarget.value);
  };
  const onConditionHandler = (event) => {
    setCondition(event.currentTarget.value);
  };
  const onMemoHandler = (event) => {
    setMemo(event.currentTarget.value);
  };

  const moodDisplay = () => {
    if (document.getElementById("mood").style.display === "none") {
      document.getElementById("mood").style.display = "block";
    } else {
      document.getElementById("mood").style.display = "none";
    }
  };

  const condiDisplay = () => {
    if (document.getElementById("condition").style.display === "none") {
      document.getElementById("condition").style.display = "block";
    } else {
      document.getElementById("condition").style.display = "none";
    }
  };

  const contraDisplay = () => {
    if (document.getElementById("clickcontra").value === "1") {
      document.getElementById("contraception").style.display = "block";
    } else {
      document.getElementById("contraception").style.display = "none";
    }
  };

  const onClickHandler = (event) => {
    //event.preventDefault();
    console.log("캘린더 페이지로 이동 ", props.match.params.date);
    props.history.push("/calendar/" + props.match.params.name);
  };

  const id = props.match.params.id;
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("하이하이");
    console.log("생리시작", cycleStart);
    console.log("생리끝", cycleEnd);
    console.log("약 복용", isControl);
    console.log("관계 여부", isSex);
    console.log("피임 여부", isProtection);
    console.log("기분", dateMood);
    console.log("몸상태", dateCondition);
    console.log("메모", dateMemo);
    console.log("끝");
    console.log(date);
    //입력 안했을 때는 null값 기본으로 주기 위한 작업
    var cycle_Start;
    var cycle_End;
    var is_Control;
    var is_Sex;
    var is_Protection;
    var date_Mood;
    var date_Condition;
    var date_Memo;

    if (cycleStart === "") {
      cycle_Start = null;
    } else {
      cycle_Start = cycleStart;
    }
    if (cycleEnd === "") {
      cycle_End = null;
    } else {
      cycle_End = cycleStart;
      cycle_End = cycleEnd;
    }
    if (isControl === "") {
      //is_Control = null;
    } else {
      is_Control = isControl;
    }
    if (isSex === "") {
      is_Sex = null;
    } else {
      is_Sex = isSex;
    }
    if (isProtection === "") {
      is_Protection = null;
    } else {
      is_Protection = isProtection;
    }
    if (dateMood === "") {
      date_Mood = null;
    } else {
      date_Mood = dateMood;
    }
    if (dateCondition === "") {
      date_Condition = null;
    } else {
      date_Condition = dateCondition;
    }
    if (dateMemo === "") {
      date_Memo = null;
    } else {
      date_Memo = dateMemo;
    }

    let body = {
      date: date,
      cycleStart: cycle_Start,
      cycleEnd: cycle_End,
      isControl: is_Control,
      isSex: is_Sex,
      isProtection: is_Protection,
      dateMood: date_Mood,
      dateCondition: date_Condition,
      dateMemo: date_Memo,
    };

    console.log(body);

    dispatch(inputDate(body)).then((response) => {
      console.log("백에서 받아온 거 출력해서 확인 : ", response.payload);

      if (response.payload.completed === true) {
        console.log(date, "의 상세 정보가 입력되었습니다.");
        alert(date + "의 상세 정보가 입력되었습니다.");
      }
    });
  };

var checked = 'checked';

  return (
    <div  style={{position:'relative', paddingBottom:'1px', margin: "auto", width: "80%" }}>
      <div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src={circleIMG}
          onClick={onClickHandler}
          style={{
            verticalAlign: "middle",
            position: "relative",
            zIndex: "2",
            display: "block",
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "60px",
            height: "60px",
            padding: "0",
          }}
        />
        <span
          onClick={onClickHandler}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate( -50%, -50% )",
            fontSize: "30px",
            zIndex: "3",
            color: "white",
          }}
        >
          {showDate}
        </span>
      </div>
      <div
        style={{
          padding: "20px",
          paddingTop: "40px",
          position: "relative",
          top: "-40px",
          zIndex: "1",
          borderRadius: "30px",
          boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
          backgroudnColor: "#f9f7f7",
          backgroundColor: "#eeeeee",
          marginBottom: "100px",
        }}
      >
        <form
          style={{ fontSize: "17px", lineHeight: "2" }}
          onSubmit={onSubmitHandler}
        >
          <span>생리</span>
          <div style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="Cycle"
              value={props.match.params.date}
              onChange={onStartHandler}
            />
            생리 시작
            <br />
            <input
              type="radio"
              name="Cycle"
              value={props.match.params.date}
              onChange={onEndHandler}
            />
            생리 끝<br />
          </div>
          <span>약 복용 여부</span>
          <div style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="isControl"
              value="1"
              onChange={onControlHandler}
            />
            피임약 복용
            <br />
          </div>
          <span>관계 여부</span>
          <div style={{ marginLeft: "10px" }}>
            <input
              id="clickcontra"
              type="radio"
              name="isSex"
              value="1"
              onChange={onSexHandler}
              onClick={contraDisplay}
            />
            사랑한 날
            <br />
            <div
              id="contraception"
              style={{ marginLeft: "10px", display: "none" }}
            >
              <input
                type="radio"
                name="isProtection"
                value="1"
                onChange={onProtectionHandler}
              />
              피임했음 <br />
              <input
                type="radio"
                name="isProtection"
                value="0"
                onChange={onProtectionHandler}
              />
              피임안했음 <br />
            </div>
          </div>
          <span onClick={condiDisplay}>몸 상태 ▽</span>
          <br />
          <div id="condition" style={{ display: "none", marginLeft: "10px" }}>
            <input
              type="radio"
              name="condition"
              value="0"
              onChange={onConditionHandler}
            />
            발열
            <br />
            <input
              type="radio"
              name="condition"
              value="1"
              onChange={onConditionHandler}
            />
            생리통
            <br />
            <input
              type="radio"
              name="condition"
              value="2"
              onChange={onConditionHandler}
            />
            유방압통
            <br />
            <input
              type="radio"
              name="condition"
              value="3"
              onChange={onConditionHandler}
            />
            두통
            <br />
            <input
              type="radio"
              name="condition"
              value="4"
              onChange={onConditionHandler}
            />
            여드름
            <br />
            <input
              type="radio"
              name="condition"
              value="5"
              onChange={onConditionHandler}
            />
            요통
            <br />
            <input
              type="radio"
              name="condition"
              value="6"
              onChange={onConditionHandler}
            />
            구역질
            <br />
            <input
              type="radio"
              name="condition"
              value="7"
              onChange={onConditionHandler}
            />
            피로감
            <br />
            <input
              type="radio"
              name="condition"
              value="8"
              onChange={onConditionHandler}
            />
            부종
            <br />
            <input
              type="radio"
              name="condition"
              value="9"
              onChange={onConditionHandler}
            />
            회음부 통증
            <br />
            <input
              type="radio"
              name="condition"
              value="10"
              onChange={onConditionHandler}
            />
            복통
            <br />
            <input
              type="radio"
              name="condition"
              value="11"
              onChange={onConditionHandler}
            />
            변비
            <br />
            <input
              type="radio"
              name="condition"
              value="12"
              onChange={onConditionHandler}
            />
            설사
            <br />
            <input
              type="radio"
              name="condition"
              value="13"
              onChange={onConditionHandler}
            />
            복부 팽만감
            <br />
            <input
              type="radio"
              name="condition"
              value="14"
              onChange={onConditionHandler}
            />
            식욕
            <br />
            <input
              type="radio"
              name="condition"
              value="15"
              onChange={onConditionHandler}
            />
            불면증
            <br />
          </div>
          <span onClick={moodDisplay}>기분 ▽</span>
          <br />
          <div id="mood" style={{ display: "none", marginLeft: "10px" }}>
            <input
              type="radio"
              name="mood"
              value="0"
              onChange={onMoodHandler}
            />
            매우 나쁨
            <br />
            <input
              type="radio"
              name="mood"
              value="1"
              onChange={onMoodHandler}
            />
            나쁨
            <br />
            <input
              type="radio"
              name="mood"
              value="2"
              onChange={onMoodHandler}
            />
            보통
            <br />
            <input
              type="radio"
              name="mood"
              value="3"
              onChange={onMoodHandler}
            />
            좋음
            <br />
            <input
              type="radio"
              name="mood"
              value="4"
              onChange={onMoodHandler}
            />
            매우 좋음
            <br />
            <input
              type="radio"
              name="mood"
              value="5"
              onChange={onMoodHandler}
            />
            지침
            <br />
            <input
              type="radio"
              name="mood"
              value="6"
              onChange={onMoodHandler}
            />
            슬픔
            <br />
            <input
              type="radio"
              name="mood"
              value="7"
              onChange={onMoodHandler}
            />
            놀람
            <br />
            <input
              type="radio"
              name="mood"
              value="8"
              onChange={onMoodHandler}
            />
            설렘
            <br />
            <input
              type="radio"
              name="mood"
              value="9"
              onChange={onMoodHandler}
            />
            신남
            <br />
            <input
              type="radio"
              name="mood"
              value="10"
              onChange={onMoodHandler}
            />
            변덕스러움
            <br />
            <input
              type="radio"
              name="mood"
              value="11"
              onChange={onMoodHandler}
            />
            짜증남
            <br />
            <input
              type="radio"
              name="mood"
              value="12"
              onChange={onMoodHandler}
            />
            우울함
            <br />
            <input
              type="radio"
              name="mood"
              value="13"
              onChange={onMoodHandler}
            />
            무기력함
            <br />
          </div>
          <span>메모</span>
          <br />
          <textarea
            style={{ width: "100%", height: "90px" }}
            onChange={onMemoHandler}
          />
          <div style={{ textAlign: "center" }}>
            <button
              className="Button_navy_small"
              type="submit"
              style={{ marginRight: "10px", width: "40%" }}
            >
              저장
            </button>
            <button
              className="Button_gray_small"
              type="reset"
              style={{ width: "40%" }}
            >
              초기화
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(CalendarForm_Detail);
