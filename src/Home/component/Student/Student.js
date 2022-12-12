import React from "react";
import Allstudent from "../../MainComponent/Student/Allstudent";
import { DashboardContainer } from "../DashboardStyle";
import Sidebar from "../Sidebar";

const Student = () => {
  return (
    <div>
      <DashboardContainer>
        <Sidebar />
        <Allstudent />
      </DashboardContainer> 
    </div>
  );
};

export default Student;
