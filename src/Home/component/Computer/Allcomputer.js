import React from "react";
import ComputerDashboard from "../../MainComponent/Computer/ComputerDashboard";
import { DashboardContainer } from "../DashboardStyle";
import Sidebar from "../Sidebar";

const Allcomputer = () => {
  return (
    <div>
      <DashboardContainer>
        <Sidebar />
        <ComputerDashboard />
      </DashboardContainer>
    </div>
  );
};

export default Allcomputer;
