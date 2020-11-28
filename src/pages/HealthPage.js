import React from "react";
import MainForm from "../components/main/MainForm";
import PillForm from '../components/main/PillForm.js';
import UnderbarForm_Health from "../components/main/UnderbarForm_Health";

const HealthPage = () => {
  return (
    <div className="Body">
      <MainForm />
      <PillForm />
      <UnderbarForm_Health/>

    </div>
  );
};

export default HealthPage;
