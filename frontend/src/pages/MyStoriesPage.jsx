import React from "react";
import { primary, secondary } from "../colors";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../assets/api";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import StoryCard from "../components/story/StoryCard";

function MyStoriesPage() {

  const token = localStorage.getItem("jwtToken");

  const getStories = async () => {
    const result = await axios.get(`${api}/story/userstories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  };

  const { data, isFetched, isError, isFetching } = useQuery({
    queryKey: ["mystories"],
    queryFn: getStories,
    staleTime: Infinity,
  });

  return (
    <div
      className={`w-full md:max-h-[calc(100vh-115px)] md:overflow-y-auto p-0 rounded-lg bg-[${primary}] lg:py-4 lg:px-8 lg:rounded-2xl`}
    >
      <div
        className={`w-full sticky top-[60px] rounded-md bg-[${primary}] p-2 sm:static flex justify-between items-center`}
      >
        <p className="text-[26px] sm:text-4xl">My Stories</p>
        <div className="flex gap-2 sm:gap-6 md:gap-12 sm:text-lg md:text-2xl md:tracking-wider font-[magra]">
          <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
            <Link to={"/home/stories"}>Stories</Link>
          </p>
          <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
            <Link to={"/home/generate"}>Generate</Link>
          </p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap justify-between py-8">
        {isFetched &&
          data?.map((storyData, index) => (
            <StoryCard key={index} data={storyData}></StoryCard>
          ))}
      </div>
    </div>
  );
}

export default MyStoriesPage;
