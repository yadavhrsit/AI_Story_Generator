import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyStoriesPage from './MyStoriesPage';
import StoriesPage from './StoriesPage';
import { primary } from '../colors';

function HomePage() {
  return (
    <div className={`w-full min-h-full py-4 px-12 flex justify-center`}>
      <Routes>
        <Route path="stories" element={<StoriesPage />} />
        <Route path="mystories" element={<MyStoriesPage />} />
      </Routes>
    </div>
  );
}

export default HomePage;
