import React from "react";
import { useDispatch } from "react-redux";
import MainForm from "../components/main/MainForm";
import circleIMG from "../images/circle_svg.svg";
import { withRouter } from "react-router-dom";
import { todayDate } from "../_actions/date_action";
import UnderbarForm from "../components/main/UnderbarForm";

var Today_send = 0;
let Body;

const MainPage = (props) => {
  console.log(props);

  var message = ["오늘은 좋은 일만 가득할 거예요!", "오늘은 행운이 가득할 거예요!", "조금만 더 힘내세요!"];
  var sentence = message[Math.floor(Math.random()*message.length)];
  console.log(sentence);

  const dispatch = useDispatch();
  const onClickHandler = (event) => {
    //event.preventDefault();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    Today_send = today;
    
    dispatch(todayDate()).then((response) => {
      console.log(response.payload);
      if (response.payload === "입력된 정보가 없습니다.") {
        console.log(response.payload, "새로운 정보를 입력하세요");
        props.history.push(
          "/calendar_detail/" + props.match.params.name + "/" + today+ "/" + props.match.params.id
        );
      } else {
        console.log("오늘 페이지로 이동 ", today);
        Body = response.payload;
        props.history.push(
          "/calendar_today/" + props.match.params.name + "/" + today + "/" + props.match.params.id
        );
      }
    });
  };

  return (
    <div className="Body">
      <MainForm />
      <div style={{ position: "relative" }}>
        <img
          onClick={onClickHandler}
          src={circleIMG}
          style={{
            verticalAlign: "middle",
            position: "relative",
            zIndex: "2",
            display: "block",
            margin: "auto",
            marginTop: "100px",
            width: "254px",
            height: "254px",
          }}
        />
        <span
          className="Body_bold"
          onClick={onClickHandler}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate( -50%, -50% )",
            fontSize: "45px",
            zIndex: "3",
            color: "white",
            textAlign: "center",
          }}
        >
          생리
          <br />
          7일차
        </span>
      </div>
      <div style={{padding:'10%', marginTop:'20px', textAlign:'center'}}>
      <span>(o゜▽゜)o☆ {props.match.params.name}님, {sentence}<br/>
      {props.match.params.name}님의 NUGU 스피커 ID는 {props.match.params.id}입니다.</span>
      </div><UnderbarForm/>
    </div>
    
  );
};
export default withRouter(MainPage);
export { Today_send };
export { Body };
