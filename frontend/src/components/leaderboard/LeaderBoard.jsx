import React from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../assets/api";
import axios from "axios";
import ScaleLoader from "react-spinners/ClipLoader";
import { useNavigate,useLocation } from "react-router-dom";
import LeaderBoardCard from "./LeaderBoardCard";
import { primary } from "../../colors";
function LeaderBoard() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("jwtToken");

  const getLeaderboard = async () => {
    const result = await axios.get(`${api}/story/leaderboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  };

  const { data, isSuccess, isLoading, error, failureReason } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboard,
    staleTime: 60000,
    refetchInterval: 30000,
    retry: false,
  });



  return (
    <div
      className={`${
        location.pathname === "/home/leaderboard" ? "w-full" : "max-w-fit"
      } h-fit gap-2 px-4 py-4 flex-col rounded-lg hidden lg:flex bg-[${primary}] lg:rounded-2xl`}
    >
      <p className="text-4xl w-full text-center uppercase">leaderboards</p>
      <div className="flex flex-col gap-2 pt-8 w-full">
        {isLoading ? (
          <ScaleLoader color="#ffffff" />
        ) : (
          isSuccess &&
          data?.map((storyData, index) => {
            return (
              <LeaderBoardCard
                key={index}
                user={storyData.user}
                date={storyData.date}
                title={storyData.title}
                id={storyData.id}
                numberOfLikes={storyData.numberOfLikes}
              ></LeaderBoardCard>
            );
          })
        )}
      </div>
    </div>
  );
}

export default LeaderBoard;
