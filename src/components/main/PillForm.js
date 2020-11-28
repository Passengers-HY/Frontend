import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { inputPill } from "../../_actions/pill_action";
import { outputPill } from "../../_actions/pill_action";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
var date;
var isControl;

function PillForm(props) {
  const dispatch = useDispatch();

  const [controlStart, setControlStart] = useState(null);
  const [controlEnd, setControlEnd] = useState(null);
  const [controlTime, setControlTime] = useState("");

  var control_Start;
  var control_End;
  var control_Time;

  const onStartHandler = (date) => {
    setControlStart(date);
  };
  const onEndHandler = (date) => {
    setControlEnd(date);
  };
  const onTimeHandler = (event) => {
    setControlTime(event.currentTarget.value);
  };

  const onClickHandler = (event) => {
    props.history.push("/health_medi/" + props.match.params.name);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(controlStart);
    console.log(controlEnd);
    console.log(controlTime);

    if (controlStart === null) {
      return document.getElementById("needStart").style.display = "block";
    }

    if (controlTime === "") {
      return document.getElementById("needTime").style.display = "block";
    }
    if (controlStart > controlEnd){
      console.log('시작일이 종료일보다 나중');
      return document.getElementById("biggerEnd").style.display = "block";
    } 

    if (controlEnd === null) {
      control_End = null;
    } else {
      control_End = controlEnd;
    }

    let body = {
      controlStart: controlStart,
      controlEnd: control_End,
      controlTime: controlTime,
    };

    dispatch(inputPill(body)).then((response) => {
      console.log("백에서 받아온 거 출력해서 확인 : ", response.payload);
      if (response.payload.completed === true) {
        console.log("피임 정보 입력 완료");
        document.getElementById("success").style.display = "block";
        //alert("피임약 설정이 완료되었습니다.");
      } else {
        console.log("에러 발생");
        document.getElementById("error").style.display = "block";
      }
    });
  };
  const [open, setOpen] = React.useState(true);

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; // Jan is 0
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  date = today;

  const onLoadHandler = (event) => {
    let body = {
      date: date,
    };
    dispatch(outputPill(body)).then((response) => {
      console.log("백에서 get으로 받은거 출력", response.payload);
      if (response.payload === "오늘 피임약 복용 완료") {
        isControl =
          props.match.params.name + "님은 오늘 피임약을 복용하셨습니다.";
      } else if (response.payload === "오늘 피임약 복용 전") {
        isControl =
          props.match.params.name + "님은 오늘 피임약을 복용하지 않으셨습니다.";
      } else if (response.payload === "입력된 피임약 정보 없음") {
        isControl =
          props.match.params.name + "님은  현재 피임약 복용중이 아닙니다.";
      }
    });
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
    <div>
      <Collapse
        in={open}
        id="needStart"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="error"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("needStart").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          피임약 복용 시작 날짜는 필수 입력값입니다.
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="needTime"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="error"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("needTime").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          피임약 복용 알림 시간은 필수 입력값입니다.
        </Alert>
      </Collapse>
      <Collapse in={open} id="biggerEnd" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50', top:'0'}}>
        <Alert
        severity="error"
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("biggerEnd").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          복용 시작일은 종료일보다 앞서야 합니다.
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="success"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          style={{ margin: "5px" }}
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
          피임약 정보 입력을 완료했습니다.
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="error"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="error"
          style={{ margin: "5px" }}
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
        {onLoadHandler()}
        <div
          style={{
            position: "relative",
            zIndex: "2",
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "60%",
            height: "50px",
            // textAlign:'center',
            lineHeight: "50px",
          }}
        >
          <span
            style={{
              borderTopLeftRadius: "23px",
              borderBottomLeftRadius: "23px",
              display: "block",
              float: "left",
              width: "50%",
              textAlign: "center",
              border: "solid 1px #707070",
              backgroundColor: "#28293c",
              color: "#ffffff",
              fontSize: "17px",
              boxSizing: "border-box",
            }}
          >
            약
          </span>
          <span
            onClick={onClickHandler}
            style={{
              borderTopRightRadius: "23px",
              borderBottomRightRadius: "23px",
              display: "block",
              float: "right",
              width: "50%",
              textAlign: "center",
              border: "solid 1px #707070",
              fontSize: "17px",
              backgroundColor: "#ffffff",
              boxSizing: "border-box",
            }}
          >
            자가 진단
          </span>
        </div>
        <div
          style={{
            padding: "20px",
            paddingTop: "40px",
            position: "relative",
            top: "-29px",
            zIndex: "1",
            borderRadius: "30px",
            boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
            backgroudnColor: "#f9f7f7",
            backgroundColor: "#eeeeee",
            marginBottom: "100px",
            fontSize: "17px",
            lineHeight: "2",
          }}
        >
          <div>
            💊 피임약 복용 여부
            <div style={{ marginLeft: "10px" }}>{isControl} </div>
          </div>
          <div>
            💊 피임약 설정
            <form onSubmit={onSubmitHandler} style={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    required
                    color="primary"
                    label="피임약 복용 시작 날짜"
                    format="yyyy-MM-dd"
                    value={controlStart}
                    minDate={new Date()}
                    onChange={onStartHandler}
                    style={{
                      width: "100%",
                      fontFamily: "IBMPlexSansKR-Regular",
                    }}
                  />
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    color="primary"
                    label="피임약 복용 끝 날짜"
                    format="yyyy-MM-dd"
                    value={controlEnd}
                    onChange={onEndHandler}
                    minDate={controlStart}
                    style={{
                      width: "100%",
                      fontFamily: "IBMPlexSansKR-Regular",
                      marginTop: "10px",
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  required
                  id="time"
                  label="복용 알람 시간"
                  type="time"
                  color="primary"
                  value={controlTime}
                  onChange={onTimeHandler}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{
                    width: "100%",
                    fontFamily: "IBMPlexSansKR-Regular",
                    marginTop: "10px",
                  }}
                />
              </ThemeProvider>
              <div style={{ textAlign: "center" }}>
                <ThemeProvider theme={theme}>
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
                </ThemeProvider>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(PillForm);
export { date };
