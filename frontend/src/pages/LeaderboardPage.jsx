import React from "react";
import { primary } from "../colors";
import LeaderBoard from "../components/leaderboard/LeaderBoard";

function LeaderBoardPage() {
  return (
    <div
      className={`w-full md:max-h-[calc(100vh-115px)] md:overflow-y-auto p-0 rounded-lg bg-[${primary}] lg:py-4 lg:px-8 lg:rounded-2xl`}
    >
      <LeaderBoard />
    </div>
  );
}

export default LeaderBoardPage;
