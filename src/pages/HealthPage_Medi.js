import React from "react";
import MainForm from "../components/main/MainForm";
import pillIMG from '../images/pill_navy_svg.svg';
import MediForm from '../components/main/MediForm.js';
import UnderbarForm_Health from "../components/main/UnderbarForm_Health";

const HealthPage_Medi = () => {
  return (
    <div className="Body">
      <MainForm />
      <MediForm />
      <div>
      <UnderbarForm_Health style={{marginTop:'100px'}}/>
      </div>
    </div>
  );
};

export default HealthPage_Medi;
