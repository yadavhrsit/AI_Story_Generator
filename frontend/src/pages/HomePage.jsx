import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import LeaderBoard from "../components/leaderboard/LeaderBoard";

function HomePage() {
  const location = useLocation();
  return (
    <div
      className={`w-full grow gap-3 py-4 px-1 md:px-4 lg:px-12 flex justify-between`}
    >
      {location.pathname === "/home/leaderboard" ||
      location.pathname === "/home/profile" ? null : (
        <LeaderBoard />
      )}
      <Outlet />
    </div>
  );
}

export default HomePage;
