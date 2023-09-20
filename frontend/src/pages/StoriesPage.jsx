import React from "react";
import { primary, secondary } from "../colors";
import { Link } from "react-router-dom";
import StoryCard from "../components/story/StoryCard";


function StoriesPage() {
  return (
    <div
      className={`grow w-full md:max-h-[calc(100vh-115px)] md:overflow-y-auto p-2 rounded-lg bg-[${primary}] lg:py-4 lg:px-8 lg:rounded-2xl` }
    >
      <div className="w-full flex justify-between items-center">
        <p className="text-[26px] sm:text-4xl">Stories</p>
        <div className="flex gap-2 sm:gap-6 md:gap-24 sm:text-lg md:text-2xl md:tracking-wider">
          <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
            <Link to={"/home/mystories"}>My Stories</Link>
          </p>
          <button className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
            Add
          </button>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap justify-between py-8 ">
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
      </div>
    </div>
  );
}

export default StoriesPage;
