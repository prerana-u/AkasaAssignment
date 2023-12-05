import React from "react";
import DashboardNavBar from "./DashboardNavBar";
import DashboardSideBar from "./DashboardSideBar";
import DashboardMain from "./DashboardMain";

// import GuideUserProfile from "./GuideUserProfile";

export default function Dashboard() {
  
  return (
    <div className="ml-5">
      
      <DashboardNavBar />
      <DashboardSideBar />
      <DashboardMain />
    </div>
  );
}
