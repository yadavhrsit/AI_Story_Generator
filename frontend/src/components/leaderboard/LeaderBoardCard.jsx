import React from "react";
import { primary, secondary } from "../../colors";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function LeaderBoardCard({ title, date, user, numberOfLikes, id }) {
  const location = useLocation();
  return (
    <Link to={`/home/story/${id}`}>
      <div
        className={`p-2 ${
          location.pathname === "/home/leaderboard" ? "w-1/6" : "w-full"
        } flex gap-2 justify-between font-[magra] bg-[${secondary}] rounded-md`}
      >
        <div className="flex flex-col gap-1 w-full">
          <p className="text-lg h-fit w-fit uppercase">{title}</p>
          <div className="flex gap-2 w-full text-xs">
            <div className="bg-white rounded-full w-[30px] h-[30px]" />
            <div className="flex w-fit max-w-[80%] flex-col">
              <p className="uppercase w-fit text-center">{user}</p>
              <p className="uppercase w-fit text-left">{date}</p>
            </div>
            <button
              className={`capitalize bg-[${primary}] cursor-default mx-1 ml-auto px-2 py-1 rounded-[4px] w-fit`}
            >
              {numberOfLikes}
              <FontAwesomeIcon icon={solidHeart} className="mx-1" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LeaderBoardCard;
