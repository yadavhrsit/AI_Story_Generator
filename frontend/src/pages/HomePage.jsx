import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyStoriesPage from './MyStoriesPage';
import StoriesPage from './StoriesPage';
import LeaderBoard from '../components/leaderboard/LeaderBoard';

function HomePage() {
  return (
    <div className={`w-full grow gap-3 py-4 px-4 md:px-12 flex justify-between`}>
      <LeaderBoard/>
      <Routes>
        <Route path="stories" element={<StoriesPage />} />
        <Route path="mystories" element={<MyStoriesPage />} />
      </Routes>
    </div>
  );
}

export default HomePage;
