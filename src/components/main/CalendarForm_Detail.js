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
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import SaveIcon from "@material-ui/icons/Save";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Alert from "@material-ui/lab/Alert";
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
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

  const Start = date;
  const End = date;

  const onStartHandler = (event) => {
    setCycleStart(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };
  const onEndHandler = (event) => {
    setCycleEnd(event.currentTarget.value);
    console.log(event.currentTarget.value);
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
    if (cycleStart === "" && cycleEnd==="" && isControl==="" &&isSex===""&&isProtection===""&&dateMood===""&&dateCondition===""&&dateMemo===""){
      document.getElementById("none").style.display = "block";
    }
    if (cycleStart === "") {
      cycle_Start = null;
    } else {
      cycle_Start = Start;
    }
    if (cycleEnd === "") {
      cycle_End = null;
    } else {
      cycle_End = End;
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

    dispatch(inputDate(body)).then((response) => {
      console.log("백에서 받아온 거 출력해서 확인 : ", response.payload);

      if (response.payload.completed === true) {
        console.log(date, "의 상세 정보가 입력되었습니다.");
        document.getElementById("success").style.display = "block";
        //alert("상세 정보가 입력되었습니다.");      
      } else if (response.payload === "최근 생리 종료일을 먼저 입력해야 합니다.") {
        console.log('최근 종료일 먼저 입력 필요', response.payload);
        document.getElementById("needEnd").style.display = "block";
        //alert("최근 생리 종료일을 먼저 입력해야 합니다.");
        return;
      } else {
        console.log('에러 발생');
        document.getElementById("error").style.display = "block";
        //alert("에러 발생");
        return;
      }
    });
  };
  const [open, setOpen] = React.useState(true);

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
    <div style={{position:'relative', paddingBottom:'1px'}}>
      <Collapse in={open} id="none" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50', top:'0'}}>
        <Alert
        severity="error"
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("none").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          해당 날짜에 아무것도 입력하지 않으셨습니다. 입력 후 저장해주세요.
        </Alert>
      </Collapse>
      <Collapse in={open} id="success" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50', top:'0'}}>
        <Alert
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("success").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          선택한 날짜의 정보가 입력되었습니다.
        </Alert>
      </Collapse>
      <Collapse in={open} id="needEnd" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50', top:'0'}}>
        <Alert
        severity="error"
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("needEnd").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          최근 생리 주기의 종료일을 먼저 입력해야합니다.
        </Alert>
      </Collapse>
      <Collapse in={open} id="error" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50', top:'0'}}>
        <Alert
        severity="error"
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("error").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          에러가 발생했습니다. 잠시 후 다시 시도해주세요.
        </Alert>
      </Collapse>
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
        <form
          style={{ fontSize: "17px", lineHeight: "2" }}
          onSubmit={onSubmitHandler}
        >
          <ThemeProvider theme={theme}>
            <div>
              <FormControl component="fieldset">
                <FormLabel
                  component="legend"
                  style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                >
                  생리 여부
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="cycle"
                  name="cycle"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="1"
                    onChange={onStartHandler}
                    control={<Radio color="primary" />}
                    label="생리 시작"
                    style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                  />
                  <FormControlLabel
                    value="2"
                    onChange={onEndHandler}
                    control={<Radio color="primary" />}
                    label="생리 끝"
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
                  피임약 복용 여부
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="control"
                  name="control"
                  defaultValue="top"
                  onChange={onControlHandler}
                >
                  <FormControlLabel
                    value="1"
                    name="isControl"
                    control={<Radio color="primary" />}
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
                  defaultValue="top"
                  onChange={onSexHandler}
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
                        onClick={contraDisplay}
                      />
                    }
                    label="사랑한 날"
                    style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                  />
                </RadioGroup>
              </FormControl>

              <div
                id="contraception"
                style={{ marginLeft: "20px", display: "none" }}
              >
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
                    defaultValue="top"
                    onChange={onProtectionHandler}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio size="small" color="primary" />}
                      label="피임 했음"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio size="small" color="primary" />}
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
                  <RadioGroup
                    row
                    aria-label="condition"
                    name="condition"
                    defaultValue="top"
                    onChange={onConditionHandler}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio size="small" color="primary" />}
                      label="허리 통증"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio size="small" color="primary" />}
                      label="속쓰림"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio size="small" color="primary" />}
                      label="극심한 고통"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio size="small" color="primary" />}
                      label="생리 불순"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio size="small" color="primary" />}
                      label="가슴과 배 부음"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="6"
                      control={<Radio size="small" color="primary" />}
                      label="아랫배가 찌릿함"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio size="small" color="primary" />}
                      label="발열"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="8"
                      control={<Radio size="small" color="primary" />}
                      label="두통"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="9"
                      control={<Radio size="small" color="primary" />}
                      label="복통"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="10"
                      control={<Radio size="small" color="primary" />}
                      label="경련"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="11"
                      control={<Radio size="small" color="primary" />}
                      label="심리적 증상"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                    <FormControlLabel
                      value="12"
                      control={<Radio size="small" color="primary" />}
                      label="설사"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    />
                  </RadioGroup>
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
                <div id="mood" style={{ marginLeft: "20px", display: "none" }}>
                  <RadioGroup
                    row
                    aria-label="mood"
                    name="mood"
                    defaultValue="top"
                    onChange={onMoodHandler}
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
              label="메모"
              value={dateMemo}
              onChange={onMemoHandler}
              placeholder="오늘의 메모를 입력하세요"
              style={{ width: "100%", marginTop: "1rem", marginBottom: "2rem" }}
              multiline
            />
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
                style={{
                  marginTop: "1rem",
                  width: "40%",
                  fontFamily: "IBMPlexSansKR-Regular",
                }}
              >
                저장
              </Button>
            </div>
          </ThemeProvider>
        </form>
      </div></div>
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
*/
