import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { inputDate } from "../../_actions/date_action";
import "./CalendarForm.css";
import "../common/Button.css";
import circleIMG from "../../images/circle_svg.svg";
import { FiChevronDown } from "react-icons/fi";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import SaveIcon from "@material-ui/icons/Save";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import { Body } from "./CalendarForm";

//import callDay from "./CalendarForm";
//import clickedday from './CalendarForm';

function CalendarForm_Detail(props) {
  var count = 0;
  console.log(Body);

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
  const [dateCondition, setCondition] = useState([]);
  const [dateMemo, setMemo] = useState("");

  const Start = date;
  const End = date;
  const onEditHandler = (event) => {
    console.log("날짜 수정 페이지로 이동", props.match.params.date);
    props.history.push(
      "/calendar_detail/" +
        props.match.params.name +
        "/" +
        props.match.params.date +
        "/" +
        props.match.params.id
    );
  };

  const onStartHandler = (event) => {};
  const onEndHandler = (event) => {
    setCycleEnd(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  let onControlHandler = false;
  if (Body.isControl === true) {
    onControlHandler = "1";
  }

  let onSexHandler = false;
  if (Body.isSex === true) {
    onSexHandler = "1";
  }

  let onProtectionHandler = "3";
  if (Body.isProtection === true) {
    onProtectionHandler = "1";
  } else if (Body.isProtection ===false){
    onProtectionHandler = "0";
  }

  let onConditionHandler1 = false;
  let onConditionHandler2 = false;
  let onConditionHandler3 = false;
  let onConditionHandler4 = false;
  let onConditionHandler5 = false;
  let onConditionHandler6 = false;
  let onConditionHandler7 = false;
  let onConditionHandler8 = false;
  let onConditionHandler9 = false;
  let onConditionHandler10 = false;
  let onConditionHandler11 = false;
  let onConditionHandler12 = false;
  var cnt = 0;
  while (cnt < 3) {
    for (var i = 0; i < 12; i++) {
      if (Body.dateCondition1 === 1) {
        onConditionHandler1 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 2) {
        onConditionHandler2 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 3) {
        onConditionHandler3 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 4) {
        onConditionHandler4 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 5) {
        onConditionHandler5 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 6) {
        onConditionHandler6 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 7) {
        onConditionHandler7 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 8) {
        onConditionHandler8 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 9) {
        onConditionHandler9 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 10) {
        onConditionHandler10 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 11) {
        onConditionHandler11 = true;
        cnt += 1;
      } else if (Body.dateCondition1 === 12) {
        onConditionHandler12 = true;
        cnt += 1;
      }

      if (Body.dateCondition2 === 1) {
        onConditionHandler1 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 2) {
        onConditionHandler2 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 3) {
        onConditionHandler3 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 4) {
        onConditionHandler4 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 5) {
        onConditionHandler5 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 6) {
        onConditionHandler6 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 7) {
        onConditionHandler7 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 8) {
        onConditionHandler8 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 9) {
        onConditionHandler9 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 10) {
        onConditionHandler10 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 11) {
        onConditionHandler11 = true;
        cnt += 1;
      } else if (Body.dateCondition2 === 12) {
        onConditionHandler12 = true;
        cnt += 1;
      }

      if (Body.dateCondition3 === 1) {
        onConditionHandler1 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 2) {
        onConditionHandler2 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 3) {
        onConditionHandler3 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 4) {
        onConditionHandler4 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 5) {
        onConditionHandler5 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 6) {
        onConditionHandler6 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 7) {
        onConditionHandler7 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 8) {
        onConditionHandler8 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 9) {
        onConditionHandler9 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 10) {
        onConditionHandler10 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 11) {
        onConditionHandler11 = true;
        cnt += 1;
      } else if (Body.dateCondition3 === 12) {
        onConditionHandler12 = true;
        cnt += 1;
      }
    }
  }

  var onMoodHandler=false;
  if(Body.dateMood===1){
    onMoodHandler="1";
  } else if(Body.dateMood===2){
    onMoodHandler="2";
  } else if(Body.dateMood===3){
    onMoodHandler="3";
  } else if(Body.dateMood===4){
    onMoodHandler="4";
  } else if(Body.dateMood=== 5 ){
    onMoodHandler="5";
  } else if(Body.dateMood===6  ){
    onMoodHandler="6";
  } else if(Body.dateMood=== 7 ){
    onMoodHandler="7";
  }  else if(Body.dateMood===8  ){
    onMoodHandler="8";
  }  else if(Body.dateMood=== 9 ){
    onMoodHandler="9";
  }  else if(Body.dateMood=== 10 ){
    onMoodHandler="10";
  }  else if(Body.dateMood===11){
    onMoodHandler="11";
  }  else if(Body.dateMood===12){
    onMoodHandler="12";
  }  else if(Body.dateMood=== 13 ){
    onMoodHandler="13";
  }  else if(Body.dateMood=== 14 ){
    onMoodHandler="14";
  }


  let onMemoHandler = null;
  if (Body.dateMemo != null) {
    onMemoHandler = Body.dateMemo;
  }

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

  const onClickHandler = (event) => {
    //event.preventDefault();
    console.log("캘린더 페이지로 이동 ", props.match.params.date);
    props.history.push(
      "/calendar/" + props.match.params.name + "/" + props.match.params.id
    );
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
    <div style={{ position: "relative", paddingBottom: "1px" }}>
      <div style={{ margin: "auto", width: "80%" }}>
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
          <form style={{ fontSize: "17px", lineHeight: "2" }}>
            <ThemeProvider theme={theme}>
              <div>
                <FormControl component="fieldset">
                  <FormLabel
                    component="legend"
                    style={{
                      fontFamily: "IBMPlexSansKR-Regular",
                      marginTop: "1rem",
                    }}
                  >
                    피임약 복용 여부
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="control"
                    name="control"
                    defaultValue={onControlHandler}
                  >
                    <FormControlLabel
                      value="1"
                      name="isControl"
                      control={
                        <Radio color="primary"  />
                      }
                      label="피임약 복용"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div>
                <FormControl component="fieldset">
                  <FormLabel
                    component="legend"
                    style={{
                      fontFamily: "IBMPlexSansKR-Regular",
                      marginTop: "1rem",
                    }}
                  >
                    관계 여부
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="sex"
                    name="sex"
                    defaultValue={onSexHandler}
                  >
                    <FormControlLabel
                      value="1"
                      name="isSex"
                      control={
                        <Radio
                          color="primary"
                          id="clickcontra"
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                        />
                      }
                      label="사랑한 날"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                  </RadioGroup>
                </FormControl>

                <div id="contraception" style={{ marginLeft: "20px" }}>
                  <FormControl component="fieldset">
                    <FormLabel
                      component="legend"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    >
                      피임 여부
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="protection"
                      name="protiection"
                      defaultValue={onProtectionHandler}
                    >
                      <FormControlLabel
                        value="1"
                        control={
                          <Radio
                            size="small"
                            color="primary"
                          />
                        }
                        label="피임 했음"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="0"
                        control={
                          <Radio
                            size="small"
                            color="primary"
                          />
                        }
                        label="피임 안했음"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div>
                <FormControl component="fieldset">
                  <FormLabel
                    component="legend"
                    onClick={condiDisplay}
                    style={{
                      fontFamily: "IBMPlexSansKR-Regular",
                      marginTop: "1rem",
                    }}
                  >
                    몸 상태 기록
                    <FiChevronDown />
                  </FormLabel>
                  <div
                    id="condition"
                    style={{ marginLeft: "20px", display: "none" }}
                  >
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler1}
                      value={1}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    허리 통증
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler2}
                      value={2}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    속쓰림
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler3}
                      value={3}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    극심한 고통
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler4}
                      value={4}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    생리 불순
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler5}
                      value={5}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    가슴과 배 부음
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler6}
                      value={6}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    아랫배 짜릿
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler7}
                      value={7}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    발열
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler8}
                      value={8}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    두통
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler9}
                      value={9}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    복통
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler10}
                      value={10}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    경련
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler11}
                      value={11}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    심리적 증상
                    <br />
                    <Checkbox
                      name="condiCheck"
                      checked={onConditionHandler12}
                      value={12}
                      color="primary"
                      size="small"
                      style={{ padding: "0", marginRight: "10px" }}
                    />
                    설사
                    <br />
                  </div>
                </FormControl>
              </div>

              <div>
                <FormControl component="fieldset">
                  <FormLabel
                    component="legend"
                    onClick={moodDisplay}
                    style={{
                      fontFamily: "IBMPlexSansKR-Regular",
                      marginTop: "1rem",
                    }}
                  >
                    기분 <FiChevronDown />
                  </FormLabel>
                  <div
                    id="mood"
                    style={{ marginLeft: "20px", display: "none" }}
                  >
                    <RadioGroup
                      row
                      aria-label="mood"
                      name="mood"
                      defaultValue={onMoodHandler}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" color="primary" />}
                        label="매우 나쁨"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio size="small" color="primary" />}
                        label="나쁨"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio size="small" color="primary" />}
                        label="보통"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio size="small" color="primary" />}
                        label="좋음"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="5"
                        control={<Radio size="small" color="primary" />}
                        label="매우 좋음"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="6"
                        control={<Radio size="small" color="primary" />}
                        label="지침"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="7"
                        control={<Radio size="small" color="primary" />}
                        label="슬픔"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="8"
                        control={<Radio size="small" color="primary" />}
                        label="놀람"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="9"
                        control={<Radio size="small" color="primary" />}
                        label="설렘"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="10"
                        control={<Radio size="small" color="primary" />}
                        label="신남"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="11"
                        control={<Radio size="small" color="primary" />}
                        label="변덕스러움"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="12"
                        control={<Radio size="small" color="primary" />}
                        label="짜증남"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="13"
                        control={<Radio size="small" color="primary" />}
                        label="우울함"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="14"
                        control={<Radio size="small" color="primary" />}
                        label="무기력함"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                    </RadioGroup>
                  </div>
                </FormControl>
              </div>

              <TextField
                id="standard-read-only-input"
                label="메모"
                InputProps={{
                  readOnly: true,
                }}
                multiline
                defaultValue={onMemoHandler}
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                }}
              />

              <div style={{ textAlign: "center" }}>
                <br />
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
                  >
                    수정
                  </Button>
                </ThemeProvider>
              </div>
            </ThemeProvider>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CalendarForm_Detail);

/*
<Button
              variant="raised"
              type="reset"
              color="secondary"
              style={{
                marginTop: "1rem",
                width: "40%",
                fontFamily: "IBMPlexSansKR-Regular",
              }}
            >
              초기화
            </Button>




import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import "./CalendarForm.css";
import "../common/Button.css";
import circleIMG from "../../images/circle_svg.svg";
import { Body } from "./CalendarForm";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
//import callDay from "./CalendarForm";
//import clickedday from './CalendarForm';
var Sex;
var Protection;
var Control;
var Mood;


var Memo;
var Date_send = 0;

function CalendarForm_Show(props) {
  let Condition=[];
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

    if (Body.dateCondition1 === 1 || Body.dateCondition2 === 1 || Body.dateCondition3 === 1) Condition.push("허리 통증");
    else if (Body.dateCondition1 === 2 || Body.dateCondition2 === 2|| Body.dateCondition3 === 2) Condition.push('속쓰림');
    else if (Body.dateCondition1 === 3 || Body.dateCondition2 === 3 || Body.dateCondition3 === 3)Condition.push('극심한 고통');
    else if (Body.dateCondition1 === 4 || Body.dateCondition2 === 4|| Body.dateCondition3 === 4) Condition.push('생리 불순');
    else if (Body.dateCondition1 === 5 || Body.dateCondition2 === 5|| Body.dateCondition3 === 5) Condition.push('가슴과 배 부음');
    else if (Body.dateCondition1 === 6 || Body.dateCondition2 === 6|| Body.dateCondition3 === 6) Condition.push('아랫배가 찌릿함');
    else if (Body.dateCondition1 === 7 || Body.dateCondition2 === 7|| Body.dateCondition3 === 7) Condition.push('발열');
    else if (Body.dateCondition1 === 8 || Body.dateCondition2 === 8|| Body.dateCondition3 === 8) Condition.push('두통');
    else if (Body.dateCondition1 === 9 || Body.dateCondition2 === 9|| Body.dateCondition3 === 9) Condition.push('복통');
    else if (Body.dateCondition1 === 10 || Body.dateCondition2 === 10|| Body.dateCondition3 === 10) Condition.push('경련');
    else if (Body.dateCondition1 === 11 || Body.dateCondition2 === 11|| Body.dateCondition3 === 11) Condition.push('심리적 증상');
    else if (Body.dateCondition1 === 12 || Body.dateCondition2 === 12|| Body.dateCondition3 === 12) Condition.push('설사');
    /*
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
    console.log('캘린더 페이지로 이동', props.match.params.date);
    props.history.push("/calendar/" + props.match.params.name +"/" + props.match.params.id);
  };

  const onEditHandler = (event) => {
    console.log("날짜 수정 페이지로 이동", props.match.params.date);
    props.history.push("/calendar_detail/"+props.match.params.name+"/"+props.match.params.date +"/" + props.match.params.id);
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
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CalendarForm_Show);
export { Date_send };
*/
