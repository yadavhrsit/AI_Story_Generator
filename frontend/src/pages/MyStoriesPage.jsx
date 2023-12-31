import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

import { primary, secondary } from "../colors";
import api from "../assets/api";
import StoryCard from "../components/story/StoryCard";

function MyStoriesPage() {
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  const getStories = async () => {
    const result = await axios.get(`${api}/story/userstories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  };

  const { data, isSuccess, isLoading, error, failureReason } = useQuery({
    queryKey: ["mystories"],
    queryFn: getStories,
    staleTime: Infinity,
    retry: false,
  });

  if (isLoading) {
    Swal.fire({
      title: "Loading Stories!",
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  if (error) {
    if (failureReason.response.status === 401) {
      Swal.fire({
        title: "Error loading Stories!",
        text: failureReason.response.data.error,
        footer: "Redirecting to login...",
        showConfirmButton: false,
        icon: "error",
        timer: 4000,
      });
      Swal.close();
      navigate("/login");
    } else {
      Swal.fire({
        title: "Error loading Stories!",
        text: "Server error",
        footer: "Try after sometime",
        showConfirmButton: false,
        icon: "error",
        timer: 4000,
      });
      Swal.close();
      navigate("/login");
    }
  }

  if (isSuccess) {
    Swal.close();
  }

  return (
    <div
      className={`w-full md:max-h-[calc(100vh-115px)] md:overflow-y-auto p-0 rounded-lg bg-[${primary}] lg:py-4 lg:px-8 lg:rounded-2xl`}
    >
      <div
        className={`w-full sticky top-[60px] rounded-md bg-[${primary}] p-2 sm:static flex justify-between items-center`}
      >
        <p className="text-[26px] sm:text-4xl">My Stories</p>
        <div className="flex gap-2 sm:gap-6 md:gap-12 sm:text-lg md:text-2xl md:tracking-wider font-[magra] uppercase font-semibold">
          <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
            <Link to={"/home/stories"}>Stories</Link>
          </p>
          <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
            <Link to={"/home/generate"}>Generate</Link>
          </p>
        </div>
      </div>

      <div className="flex gap-2 w-full flex-col md:flex-row">
        {data && data.length === 0 ? (
          <p className="text-4xl m-auto my-20 text-center">
            You have'nt posted any Stories yet.{" "}
          </p>
        ) : null}
        {data && data.length !== 0 && (
          <>
            <div className="inline-flex gap-3 flex-wrap justify-between py-8 md:flex-1">
              {isSuccess &&
                data?.map((storyData, index) => {
                  if (index % 2 === 0) {
                    return <StoryCard key={index} data={storyData}></StoryCard>;
                  }
                  return null;
                })}
            </div>

            <div className="inline-flex gap-3 flex-wrap justify-between py-8 md:flex-1">
              {isSuccess &&
                data?.map((storyData, index) => {
                  if (index % 2 !== 0) {
                    return <StoryCard key={index} data={storyData}></StoryCard>;
                  }
                  return null;
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MyStoriesPage;
