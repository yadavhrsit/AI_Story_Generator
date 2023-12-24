import React from 'react';
import LeaderBoard from '../components/leaderboard/LeaderBoard';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div className={`w-full grow gap-3 py-4 px-1 md:px-4 lg:px-12 flex justify-between`}>
      <LeaderBoard/>
      <Outlet/>
    </div>
  );
}

export default HomePage;
