import React from "react";
import { primary, secondary } from "../colors";
import { Link } from "react-router-dom";
import StoryCard from "../components/story/StoryCard";
import LeaderBoard from "../components/leaderboard/LeaderBoard";
function StoriesPage() {
  return (
    <div className="w-full min-h-full max-w-[2440px]">
      <div className="flex w-full gap-10 justify-between">
        <div className={`grow w-full p-2 rounded-lg bg-[${primary}] lg:py-4 lg:px-8 lg:rounded-2xl`}>
          <div className="w-full flex justify-between items-center">
            <p className="text-[26px] sm:text-3xl">Stories</p>
            <div className="flex gap-2 sm:gap-6 md:gap-24 sm:text-lg md:text-2xl md:tracking-wider">
              <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
                <Link to={"/home/mystories"}>My Stories</Link>
              </p>
              <button className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
                Add
              </button>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap justify-between py-8">
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
          </div>
        </div>
        <LeaderBoard/>
      </div>
    </div>
  );
}

export default StoriesPage;
