import React from "react";
import MainForm from '../components/main/MainForm';
import UnderbarForm_Shopping from "../components/main/UnderbarForm_Shopping";

const ShoppingPage = () => {
  const url='http://www.naver.com';
  return (
    <div className="Body">
      <MainForm />
      <div style={{position:'static', bottom:'56px'}}>
        <iframe title="11st" src='http://m.11st.co.kr/MW/html/main.html#/home' frameBorder='0' style={{ width:'100%', height:'80vh'}} name='site' scrolling='hidden'/>
      </div>
      <UnderbarForm_Shopping/>
    </div>
  );
};

export default ShoppingPage;
