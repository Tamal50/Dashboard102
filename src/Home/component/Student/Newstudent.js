import React from "react";
import AddStudent from "../../MainComponent/Student/AddStudent";
import { DashboardContainer } from "../DashboardStyle";
import Sidebar from "../Sidebar";

const Newstudent = () => {
  return (
    <div>
      <DashboardContainer>
        <Sidebar />
        <AddStudent />
      </DashboardContainer>
    </div>
  );
};

export default Newstudent;
