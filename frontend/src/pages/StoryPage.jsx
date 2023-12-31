import React from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

import { primary, secondary } from "../colors";
import api from "../assets/api";

function StoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  const getStory = async () => {
    const result = await axios.get(`${api}/story/view/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  };

  const { data, isSuccess, isLoading, error, failureReason } = useQuery({
    queryKey: [`story${id}`],
    queryFn: getStory,
    staleTime: Infinity,
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
        title: "Error loading Story!",
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
        title: "Error loading Story!",
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
      className={`w-full md:max-h-[calc(100vh-115px)] md:overflow-y-auto p-0 rounded-lg bg-[${primary}] lg:py-0 lg:px-8 lg:rounded-2xl`}
    >
      <div
        className={`w-full sticky top-[60px] rounded-md bg-[${primary}] p-2 lg:mt-4 sm:static flex justify-between items-center`}
      >
        <p className="text-[26px] sm:text-4xl">Stories</p>
        <div className="flex gap-2 sm:gap-6 md:gap-12 sm:text-lg md:text-2xl md:tracking-wider font-[magra] uppercase font-semibold">
          <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
            <Link to={"/home/mystories"}>My Stories</Link>
          </p>
          <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
            <Link to={"/home/generate"}>Generate</Link>
          </p>
        </div>
      </div>
      <div className="py-8 w-9/10 ">
        {isSuccess && (
          <>
            <div
              className={`font-sans text-4xl text-center sticky top-0 rounded-b-lg bg-[${secondary}]`}
            >
              <p className={`py-4`}>{data.title}</p>
              <div className={`bg-[${primary}] p-2 mt-2`} />
            </div>
            <p className=" font-sans text-2xl mt-4">{data.content}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default StoryPage;
