import React from "react";
import { withRouter } from "react-router-dom";
import HeaderForm from "./HeaderForm";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../_actions/user_action";
import { FiLogOut } from 'react-icons/fi';

function MainForm(props) {
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload === "로그아웃 되었습니다") {
        console.log("로그아웃 성공");
        props.history.push("/login");
      } else {
        console.log("로그아웃 실패");
      }
    });
  };

  return (
    <div style={{zIndex:'50'}}>
      <span
        style={{
          position: "absolute",
          left: "30px",
          top: "60px",
          fontSize: "20px",
          color: "#707070",
        }}
      >
        {props.match.params.name}님, 안녕하세요!{" "}
      </span>
      <span
        onClick={onClickHandler}
        style={{
          position: "absolute",
          float: "right",
          top: "66px",
          right: "16px",
          fontSize: "12px",
          color: "#707070",
        }}
      >
        <FiLogOut style={{width:'15px', height:'15px  '}}/>
      </span>
      <HeaderForm />
    </div>
  );
}

export default withRouter(MainForm);
