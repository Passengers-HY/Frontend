import React from "react";
import MainForm from "../components/main/MainForm";
import PillForm_Show from '../components/main/PillForm_Show.js';
import UnderbarForm_Health from "../components/main/UnderbarForm_Health";

const HealthPage = () => {
  return (
    <div className="Body">
      <MainForm />
      <PillForm_Show />
      <UnderbarForm_Health/>

    </div>
  );
};

export default HealthPage;
