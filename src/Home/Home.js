import React from "react";
import { DashboardContainer } from "./component/DashboardStyle";
import Sidebar from "./component/Sidebar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div>
      <DashboardContainer>
        <Sidebar />
        <Dashboard />
      </DashboardContainer>
    </div>
  );
};

export default Home;
