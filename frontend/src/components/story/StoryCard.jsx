import React from "react";
import { secondary } from "../../colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function StoryCard({ data }) {
  const location = useLocation();
  console.log(location);
  return (
    <div className="w-full pb-4 bg-[#00000048] font-[magra] rounded-lg">
      <div className="md:flex md:justify-between md:w-full">
        <div
          className={`bg-[${secondary}] px-2 pb-2 rounded-tl-md md:w-fit md:pb-0 md:h-fit`}
        >
          <p className="py-1 text-2xl uppercase font-semibold">{data.title}</p>
          <div className="flex gap-2 md:hidden">
            <div className="rounded-full bg-white w-[35px] h-[35px] mt-1" />
            <div className="flex flex-col text-sm">
              <p>{data.user}</p>
              <div className="flex gap-8">
                <p>{data.date_created ? data.date_created : ""}</p>
                <p>{data.time_created ? data.time_created : ""}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-1 hidden md:flex pt-2 pr-2 ml-1">
          <div className="flex gap-3">
            <div className="flex flex-col items-end">
              <p>{data.user}</p>
              <div className="flex gap-1">
                <p>{data.date_created ? data.date_created : ""}</p>
                <p>{data.time_created ? data.time_created : ""}</p>
              </div>
            </div>
            <div className="rounded-full w-10 h-10 bg-white" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 text-sm p-2">
        {data.tags.map((tag, index) => {
          if (tag !== "") {
            return (
              <button
                key={index}
                className={`capitalize bg-[${secondary}] px-2 py-1 rounded-[4px]`}
              >
                {tag}
              </button>
            );
          }
          return null;
        })}
      </div>

      <p className="px-2">{data.description}</p>
      <div className="px-2 mt-4 flex justify-between items-center">
        <p className="text-sm">{data.time}</p>
        <p
          className={`capitalize bg-[${secondary}] px-3 py-[2px] rounded-[5px]`}
        >
          <Link to={`/home/story/${data._id}`}>read story</Link>
        </p>
        <div className="flex gap-2">
          {location.pathname !== "/home/mystories" && (
            <button className={`bg-[${secondary}] px-2 py-[2px] rounded`}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          )}

          <button className={`bg-[${secondary}] px-2 py-[2px] rounded`}>
            <FontAwesomeIcon icon={faShare} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
