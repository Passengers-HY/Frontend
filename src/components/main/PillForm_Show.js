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

function PillForm_Show(props) {
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    props.history.push("/health_medi/" + props.match.params.name);
  };
  
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
    <div> {onLoadHandler()}
      <div style={{ margin: "auto", width: "80%" }}>
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
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(PillForm_Show);
export { date };
