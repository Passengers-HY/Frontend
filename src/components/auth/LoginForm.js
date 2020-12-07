import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../_actions/user_action";
import { Link } from "react-router-dom";
import "../common/Button.css";
import "../common/Input.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


function LoginForm(props) {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const dispatch = useDispatch();
  const onEmailHandler = (event) => {
    setuserEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setuserPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Email", userEmail);
    console.log("Password", userPassword);

    let body = {
      userEmail: userEmail,
      userPassword: userPassword,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload === "잘못된 비밀번호입니다") {
        document.getElementById("wrongPW").style.display = "block";
        console.log("잘못된 비밀번호입니다");
        //alert("잘못된 비밀번호입니다. 확인하고 다시 시도해주세요.");
      } else if (response.payload === "잘못된 이메일입니다") {
        console.log("잘못된 이메일입니다wrongID.");
        document.getElementById("wrongID").style.display = "block";
        //alert("잘못된 이메일입니다. 확인하고 다시 시도해주세요.");
      } else if (response.payload != "") {
        console.log("로그인 성공 후 메인 페이지 로드");
        props.history.push("/main/" + response.payload.name + "/" + response.payload.id);
      } else {
        console.log("로그인 실패");
        document.getElementById("error").style.display = "block";
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
    <div
      className="page"
      style={{
        // display: "flex",
        //justifyContent: "center",
        //alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Collapse in={open} id="wrongID" style={{display:'none'}}>
        <Alert
        severity="error"  
          style={{margin:'5px'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("wrongID").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          존재하지 않는 이메일입니다. 이메일 확인 후 다시 시도해주세요.
        </Alert>
      </Collapse>

      <Collapse in={open} id="wrongPW" style={{display:'none'}}>
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
          잘못된 비밀번호입니다. 비밀번호 확인 후 다시 시도해주세요.
        </Alert>
      </Collapse>

      <Collapse in={open} id="error" style={{display:'none'}}>
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
      <div
        style={{
          position: "absolute",
          top: "30%",
          bottom: "0",
          right: "0",
          left: "0",
        }}
      >
        <form
          style={{
            overflow: "hidden",

            display: "flex",
            verticalAlign: "middle",
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
              label="이메일"
              type="email"
              value={userEmail}
              onChange={onEmailHandler}
              style={{ width: "80%", fontFamily: "IBMPlexSansKR-Regular" }}
            />
            <TextField
              required
              color="primary"
              label="비밀번호"
              type="password"
              value={userPassword}
              onChange={onPasswordHandler}
              style={{
                width: "80%",
                fontFamily: "IBMPlexSansKR-Regular",
                marginTop: "1rem",
              }}
            />
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
              로그인
            </Button>
          </ThemeProvider>
        </form>
        <Link to="/register">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="secondary"
              style={{
                marginTop: "1rem",
                width: "80%",
                fontFamily: "IBMPlexSansKR-Regular",
                color: "white",
              }}
            >
              회원가입
            </Button>
          </ThemeProvider>
        </Link>
        <div style={{textAlign:"right", marginRight:'10%', marginTop:'1rem', color:'gray'}}>
          <span>계정을 잊어버리셨나요?</span>
        </div>
      </div>
    </div>
  );
}
export default withRouter(LoginForm);
