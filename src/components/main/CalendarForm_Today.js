import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./CalendarForm.css";
import "../common/Button.css";
import circleIMG from "../../images/circle_svg.svg";
import { Body } from "../../pages/MainPage";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
var Sex;
var Control;
var Mood;
var Condition;
var Memo;

var Date_send = 0;

function CalendarForm_Today(props) {
  const rawDate = new Date(props.match.params.date);
  const showDate = rawDate.getDate();
  const dispatch = useDispatch();
  Date_send = props.match.params.date;


  const onLoadHandler = (event) => {
    if (Body.isSex) {
      if (Body.isProtection) {
        Sex = "관계를 가졌고, 피임을 했습니다!";
      } else {
        Sex = "관계를 가졌지만, 피임을 하지 않았습니다!";
      }
    } else {
      Sex = "관계를 가지지 않았습니다!";
    }

    if (Body.isControl) {
      Control = "피임약을 복용하셨습니다!";
    } else {
      Control = "피임약을 복용하지 않으셨습니다!";
    }

    if (Body.dateMood === 1)
      Mood =
        props.match.params.name +
        "님, 오늘 엄청 기분 나쁜 일이 있었군요ㅠㅅㅠ 따뜻한 차를 마시며 좋은 음악을 들으면 심신이 안정된답니다!";
    else if (Body.dateMood === 2)
      Mood =
        props.match.params.name +
        "님, 오늘 기분이 나쁘셨군요ㅠㅅㅠ " +
        props.match.params.name +
        "님을 화나게 했던 일은 잊어버리고 좋은 일만 생각해보아요!";
    else if (Body.dateMood === 3)
      Mood =
        props.match.params.name +
        "님, 오늘 기분이 그럭저럭하셨군요! " +
        props.match.params.name +
        "님 일상에 웃을 일만 가득하길 바랄게요!";
    else if (Body.dateMood === 4)
      Mood =
        props.match.params.name +
        "님, 오늘 기분 좋은 일이 있었군요! 내일은 " +
        props.match.params.name +
        "님의 하루가 더 행복한 일들로 가득할거예요!";
    else if (Body.dateMood === 5)
      Mood =
        props.match.params.name +
        "님, 오늘 엄청 기분 좋은 일이 있었군요! " +
        props.match.params.name +
        "님의 매일이 오늘만 같길!";
    else if (Body.dateMood === 6)
      Mood =
        props.match.params.name +
        "님, 오늘 하루 지치는 일이 있었나봐요! 내일은 힘내서 하루를 시작할 수 있도록 보름달도 " +
        props.match.parmas.name +
        "님을 응원할게요~ 화이팅!";
    else if (Body.dateMood === 7)
      Mood =
        props.match.params.name +
        "님, 오늘 슬픈 일이 있었나봐요ㅠㅅㅠ 슬펐던 일은 다 지워버리고, 행복한 상상을 해보는 건 어떨까요?";
    else if (Body.dateMood === 8)
      Mood =
        props.match.params.name +
        "님, 오늘 놀랄 만한 일이 있었나봐요! 놀랐던 마음을 다스리는 데에는 따뜻한 차, 달달한 디저트가 도움이 된답니다!";
    else if (Body.dateMood === 9)
      Mood =
        props.match.params.name +
        "님, 오늘 설레는 일이 있었군요! 생각만 해도 설레이는 생각을 가슴에 품고 잠에 들면 행복한 잠을 잘 수 있을 거예요!";
    else if (Body.dateMood === 10)
      Mood =
        props.match.params.name +
        "님, 오늘 신나는 일이 있었군요! 즐겁게 하루를 마무리하는 것도 좋지만, 상쾌한 아침을 위해 잠깐의 생각 정리를 하는 것도 좋아요!";
    else if (Body.dateMood === 11)
      Mood =
        props.match.params.name +
        "님, 오늘 오늘 하루 기분이 왔다갔다, 변덕스러운 하루를 보내셨군요! 잔잔한 음악을 들으며 잠시 생각하는 시간을 가져보는 건 어떨까요?";
    else if (Body.dateMood === 12)
      Mood =
        props.match.params.name +
        "님, 오늘 짜증나는 일이 있었군요! " +
        props.match.params.name +
        "님을 짜증나게 했던 그 무엇, 이 또한 다 지나가리라~";
    else if (Body.dateMood === 13)
      Mood =
        props.match.params.name +
        "님, 오늘 우울함을 느끼셨군요ㅠㅅㅠ " +
        props.match.params.name +
        "님은 혼자가 아니라는 사실을 절대 잊지 마시고, 좋은 사람, 좋은 음식, 좋은 장소를 생각해봐요!";
    else if (Body.dateMood === 14)
      Mood =
        props.match.params.name +
        "님, 오늘 하루 무기력한 " +
        props.match.params.name +
        "님을 발견하셨군요! 내일은 보다 더 활기찬 하루를 보내보는 건 어떨까요? 화이팅!";
    else
      Mood = props.match.params.name + "님, 오늘의 기분을 입력하지 않으셨어요!";

    if (Body.dateCondition1 === 1) Condition = "허리 통증";
    else if (Body.dateCondition1 === 2)
      Condition="속쓰림"
    else if (Body.dateCondition1 === 3) Condition = "극심한 고통";
    else if (Body.dateCondition1 === 4) Condition = "생리 불순";
    else if (Body.dateCondition1 === 5) Condition = "가슴과 배 부음";
    else if (Body.dateCondition1 === 6) Condition = "아랫배가 찌릿함";
    else if (Body.dateCondition1 === 7) Condition = "발열";
    else if (Body.dateCondition1 === 8) Condition = "두통";
    else if (Body.dateCondition1 === 9)
      Condition = "복통";
    else if (Body.dateCondition1 === 10) Condition = "경련";
    else if (Body.dateCondition1 === 11)
      Condition = "심리적 증상";
    else if (Body.dateCondition1 === 12) Condition = "설사";
    else
      Condition =
        props.match.params.name + "님, 오늘의 증상을 입력하지 않으셨어요!";

    if (Body.dateMemo) Memo = "메모 : " + Body.dateMemo;
    else Memo = props.match.params.name + "님, 메모를 입력하지 않으셨습니다!";
  };


  const onClickHandler = (event) => {
    //event.preventDefault();
    console.log("캘린더 페이지로 이동 ", props.match.params.date);
    props.history.push("/calendar/" + props.match.params.name);
  };

  const onEditHandler = (event) => {
    console.log("날짜 수정 페이지로 이동", props.match.params.date);
    props.history.push("/calendar_detail/"+props.match.params.name+"/"+props.match.params.date);
  };
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#28293c",
      },
      secondary: {
        main: "#c8bbb3",
      },
    },
  });
  return (
    <div style={{ margin: "auto", width: "80%" }}>
      {onLoadHandler()}
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
          lineHeight: "2",
          fontSize: "17px",
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
        <div>
          {Sex}
          <br />
          {Control}
          <br />
          {Mood}
          <br />
          {Condition}
          <br />
          {Memo}
        </div>
        <div style={{textAlign:"center"}}>
          <br/>
          <ThemeProvider theme={theme}>
          <Button
                variant="contained"
                color="primary"
                onClick={onEditHandler}
                size="small"
                startIcon={<EditIcon />}
                style={{
                  marginTop: "1rem",
                  width: "40%",
                  fontFamily: "IBMPlexSansKR-Regular",
                }}
              >수정</Button>
          </ThemeProvider>        </div>
      </div>
    </div>
  );
}

export default withRouter(CalendarForm_Today);
export { Date_send };
