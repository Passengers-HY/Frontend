import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../_actions/user_action";
import { Link } from "react-router-dom";
import womanIMG from "../../images/woman_gray_svg.svg";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from '@material-ui/core/FormControl';
import FormLabel from "@material-ui/core/FormLabel";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import Alert from "@material-ui/lab/Alert";
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

function RegisterForm(props) {
  const dispatch = useDispatch();

  const [userName, setName] = useState("");
  const [userBirth, setBirth] = useState(null);
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [userHeight, setHeight] = useState("");
  const [userWeight, setWeight] = useState("");
  const [firCycleStart, setfirCycleStart] = useState(null);
  const [firCycleEnd, setfirCycleEnd] = useState(null);
  const [meanPeriod, setmeanPeriod] = useState("");
  const [meanCycle, setmeanCycle] = useState("");
  const [userAlcohol, setuserAlcohol] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onBirthHandler = (date) => {
    setBirth(date);
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onPasswordConfirmHandler = (event) => {
    setpasswordConfirm(event.currentTarget.value);
  };
  const onHeightHandler = (event) => {
    setHeight(event.currentTarget.value);
  };
  const onWeightHandler = (event) => {
    setWeight(event.currentTarget.value);
  };
  const onfirCycleStartHandler = (date) => {
    setfirCycleStart(date);
  };
  const onfirCycleEndHandler = (date) => {
    setfirCycleEnd(date);
  };
  const onmeanPeriodHandler = (event) => {
    setmeanPeriod(event.currentTarget.value);
  };
  const onmeanCycleHandler = (event) => {
    setmeanCycle(event.currentTarget.value);
  };
  const onUserAlcoholHandler = (event) => {
    setuserAlcohol(event.currentTarget.value);
  };
  const checkPassword = (password) => {
    if (userPassword !== password) {
      return true;
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (userPassword !== passwordConfirm) {
      console.log("비밀번호가 같지 않습니다");
      return document.getElementById("wrongPW").style.display = "block";

      //alert("비밀번호가 같지 않습니다!");
    }

    if (firCycleStart === null && firCycleEnd != null) {
      console.log("시작일이 입력되지 않았는데 종료일 입력됨");
      return document.getElementById("onlyEnd").style.display = "block";

      //alert("시작일을 입력해야 종료일을 입력할 수 있습니다.");
    }

    if (firCycleStart > firCycleEnd){
      console.log('시작일이 종료일보다 나중');
      return document.getElementById("biggerEnd").style.display = "block";

    } 
    var user_Birth;
    var user_Height;
    var user_Weight;
    var firCycle_Start;
    var firCycle_End;
    var mean_Period;
    var mean_Cycle;
    var user_Alcohol;

    if (userBirth === "") {
      user_Birth = null;
    } else {
      user_Birth = userBirth;
    }
    if (userHeight === "") {
      user_Height = null;
    } else {
      user_Height = userHeight;
    }

    if (userWeight === "") {
      user_Weight = null;
    } else {
      user_Weight = userWeight;
    }
    if (firCycleStart === "") {
      firCycle_Start = null;
    } else {
      firCycle_Start = firCycleStart;
    }
    if (firCycleEnd === "") {
      firCycle_End = null;
    } else {
      firCycle_End = firCycleEnd;
    }
    if (meanPeriod === "") {
      mean_Period = null;
    } else {
      mean_Period = meanPeriod;
    }
    if (meanCycle === "") {
      mean_Cycle = null;
    } else {
      mean_Cycle = meanCycle;
    }
    if (userAlcohol === "") {
      user_Alcohol = null;
    } else {
      user_Alcohol = userAlcohol;
    }

    let body = {
      userName: userName,
      userBirth: user_Birth,
      userEmail: userEmail,
      userPassword: userPassword,
      userHeight: user_Height,
      userWeight: user_Weight,
      firCycleStart: firCycle_Start,
      firCycleEnd: firCycle_End,
      meanPeriod: mean_Period,
      meanCycle: mean_Cycle,
      userAlcohol: user_Alcohol,
    };

    dispatch(registerUser(body)).then((response) => {
      console.log("백에서 받아온 거 출력해서 확인 : ", response.payload);
      if (response.payload.completed) {
        console.log("회원가입 성공 후 로그인 페이지로 로드");
        document.getElementById("success").style.display = "block";
        // alert("보름달의 회원이 되신 것을 축하드립니다! 로그인 화면으로 이동합니다!");
      } else if (response.payload === "이미 가입된 이메일입니다") {
        console.log("이미 가입된 이메일입니다");
        document.getElementById("exEmail").style.display = "block";
        //alert("이미 가입된 이메일입니다. 다른 이메일을 사용해주세요.");
      } else {
        console.log("에러 발생 (회원가입 -> 로그인)");
        document.getElementById("error").style.display = "block";
        //alert("회원가입에 실패하였습니다!");
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
    <div
      className="page"
      style={{
        //  display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    > 
    <Collapse in={open} id="wrongPW" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50'}}>
        <Alert
        severity="error"
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("wrongPW").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          비밀번호가 같지 않습니다. 확인 후 다시 시도해주세요.
        </Alert>
      </Collapse>
      <Collapse in={open} id="onlyEnd" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50'}}>
        <Alert
        severity="error"
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("onlyEnd").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          생리 시작일을 입력해야 종료일을 입력할 수 있습니다.
        </Alert>
      </Collapse>
      <Collapse in={open} id="biggerEnd" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50'}}>
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
          생리 시작일은 종료일보다 앞서야 합니다.
        </Alert>
      </Collapse>
      <Collapse in={open} id="success" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50'}}>
        <Alert
          style={{margin:'5px'}}
          action={
            <Button
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                props.history.push("/login");

              }}
            >
              확인
            </Button>
          }
        >
          보름달의 회원이 되신 것을 축하드립니다! 로그인 화면으로 이동합니다!
        </Alert>
      </Collapse>
      <Collapse in={open} id="exEmail" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50'}}>
        <Alert
        severity="error"
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("exEmail").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          이미 가입된 이메일입니다. 다른 이메일을 입력해주세요.
        </Alert>
      </Collapse>
      <Collapse in={open} id="exEmail" style={{ position:'fixed', width:'100%', display:'none', zIndex:'50'}}>
        <Alert
        severity="error"
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("exEmail").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          에러가 발생했습니다. 잠시 후 다시 시도해주세요.
        </Alert>
      </Collapse>
      <img
        src={womanIMG}
        style={{
          position: "static",
          marginTop: "2rem",
          width: "69.1px",
          height: "76.5px",
        }}
      />
      <form
        style={{
          position: "static",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={onSubmitHandler}
      >
        <ThemeProvider theme={theme}>
          <TextField
            required
            color="primary"
            label="이름"
            value={userName}
            onChange={onNameHandler}
            style={{ width: "80%", fontFamily: "IBMPlexSansKR-Regular" }}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              color="primary"
              label="생년월일"
              format="yyyy-MM-dd"
              value={userBirth}
              onChange={onBirthHandler}
              maxDate={new Date()}
              style={{
                width: "80%",
                marginTop: "1rem",
                fontFamily: "IBMPlexSansKR-Regular",
              }}
            />
          </MuiPickersUtilsProvider>

          <TextField
            required
            color="primary"
            label="이메일"
            type="email"
            value={userEmail}
            onChange={onEmailHandler}
            style={{
              width: "80%",
              marginTop: "1rem",
              fontFamily: "IBMPlexSansKR-Regular",
            }}
          />
          <TextField
            required
            color="primary"
            label="비밀번호"
            type="password"
            value={userPassword}
            onChange={onPasswordHandler}
            autoComplete="current-password"
            style={{
              width: "80%",
              marginTop: "1rem",
              fontFamily: "IBMPlexSansKR-Regular",
            }}
          />
          <TextField
            required
            color="primary"
            label="비밀번호 확인"
            type="password"
            error={checkPassword(passwordConfirm)}
            helperText={
              checkPassword(passwordConfirm)
                ? "입력한 비밀번호와 일치하지 않습니다."
                : null
            }
            value={passwordConfirm}
            onChange={onPasswordConfirmHandler}
            autoComplete="current-password"
            style={{
              width: "80%",
              marginTop: "1rem",
              fontFamily: "IBMPlexSansKR-Regular",
            }}
          />

          <TextField
            color="primary"
            label="키"
            placeholder="cm"
            type="number"
            value={userHeight}
            InputProps={{ inputProps: { min: 0 } }}
            onChange={onHeightHandler}
            style={{
              width: "80%",
              marginTop: "1rem",
              fontFamily: "IBMPlexSansKR-Regular",
            }}
          />
          <TextField
            color="primary"
            label="몸무게"
            placeholder="kg"
            type="number"
            value={userWeight}
            InputProps={{ inputProps: { min: 0 } }}
            onChange={onWeightHandler}
            style={{
              width: "80%",
              marginTop: "1rem",
              fontFamily: "IBMPlexSansKR-Regular",
            }}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              color="primary"
              label="최근 생리 시작 날짜"
              format="yyyy-MM-dd"
              value={firCycleStart}
              onChange={onfirCycleStartHandler}
              maxDate={new Date()}
              style={{
                width: "80%",
                marginTop: "1rem",
                fontFamily: "IBMPlexSansKR-Regular",
              }}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              color="primary"
              label="최근 생리 끝 날짜"
              format="yyyy-MM-dd"
              value={firCycleEnd}
              onChange={onfirCycleEndHandler}
              minDate={firCycleStart}
              maxDate={new Date()}
              style={{
                width: "80%",
                marginTop: "1rem",
                fontFamily: "IBMPlexSansKR-Regular",
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            color="primary"
            label="평균 생리 기간"
            type="number"
            value={meanPeriod}
            InputProps={{ inputProps: { min: 0 } }}
            onChange={onmeanPeriodHandler}
            style={{
              width: "80%",
              marginTop: "1rem",
              fontFamily: "IBMPlexSansKR-Regular",
            }}
          />
          <TextField
            id="standard-number"
            color="primary"
            label="평균 주기"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={meanCycle}
            onChange={onmeanCycleHandler}
            style={{
              width: "80%",
              marginTop: "1rem",
              fontFamily: "IBMPlexSansKR-Regular",
            }}
          />
        </ThemeProvider>

        <div className="Body" style={{ marginTop: "1rem" }}>
          <ThemeProvider theme={theme}>
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              color="primary"
              style={{ fontFamily: "IBMPlexSansKR-Regular" }}
            >
              술을 즐기십니까?
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="1"
                onChange={onUserAlcoholHandler}
                control={<Radio color="primary" />}
                label="네"
                className="Body"
                style={{ fontFamily: "IBMPlexSansKR-Regular" }}
              />
              <FormControlLabel
                value="0"
                onChange={onUserAlcoholHandler}
                control={<Radio color="primary" />}
                label="아니오"
                className="Body"
                style={{ fontFamily: "IBMPlexSansKR-Regular" }}
              />
            </RadioGroup>
            </FormControl>
          </ThemeProvider>
        </div>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{
              marginTop: "1rem",
              width: "80%",
              fontFamily: "IBMPlexSansKR-Regular",
            }}
          >
            회원가입
          </Button>

        </ThemeProvider>
      </form>
      <Link to="/login">
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="secondary"
            style={{
              marginTop: "1rem",
              width: "80%",
              marginBottom: "2rem",
              fontFamily: "IBMPlexSansKR-Regular",
              color: "white",
            }}
          >
            뒤로가기
          </Button>
        </ThemeProvider>
      </Link>
    </div>
  );
}
export default withRouter(RegisterForm);
