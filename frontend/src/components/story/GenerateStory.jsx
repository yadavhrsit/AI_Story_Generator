import React, { useState } from "react";
import { primary, secondary } from "../../colors";
import { Link } from "react-router-dom";
import api from "../../assets/api";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function GenerateStory() {
  const navigate = useNavigate();
  const [ideaInput, setIdeaInput] = useState("");
  const [tags, setTags] = useState(["", "", ""]);

  const handleIdeaInputChange = (e) => {
    setIdeaInput(e.target.value);
  };

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const token = localStorage.getItem("jwtToken");

  const mutation = useMutation({
    mutationFn: (storyPrompt) => {
      return axios.post(`${api}/story/genstory`, storyPrompt, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },

    onMutate: () => {
      Swal.fire({
        title: "Loading!",
        text: "Hold on we are generating your story!",
        showConfirmButton: false,
        didOpen: () => {
        Swal.showLoading();
        }
      });
    },

    onSuccess: async (data) => {
      Swal.fire({
        title: "Success!",
        text: "Generated!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        confirmButtonColor: primary,
      }).then(() =>
        navigate("/home/generated", {
          state: {
            responseData: data.data,
            prompt: { prompt: ideaInput, tags },
          },
        })
      );
    },
    onError: async (error) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message || error.response.data.error,
        icon: "error",
      }).then(() => {
        if (
          error.response.status === 400 ||
          error.response.status === 401 ||
          error.response.status === 402 ||
          error.response.status === 403 ||
          error.response.status === 404
        ) {
          navigate("/login");
        }
      });
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ 'prompt':ideaInput,tags });
  };

  return (
    <>
      <div
        className={`w-full h-fit pb-4 rounded-lg bg-[${primary}] lg:py-4 lg:px-8 lg:rounded-2xl`}
      >
        <div
          className={`w-full rounded-md bg-[${primary}] p-2 sm:static flex justify-between items-center`}
        >
          <p className="text-[26px] sm:text-4xl">Stories</p>
          <div className="flex gap-2 sm:gap-6 md:gap-12 sm:text-lg md:text-2xl md:tracking-wider font-[magra] uppercase font-semibold">
            <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}>
              <Link to={"/home"}>Cancel</Link>
            </p>
          </div>
        </div>
        <div className="w-full px-2 ">
          <textarea
            className="w-full min-h-[250px] h-full mt-2 p-2 rounded-lg text-xl text-black font-[magra]"
            placeholder="Enter your story idea... (Up to 50 words)"
            value={ideaInput}
            onChange={handleIdeaInputChange}
          />
          <p className="text-white mt-4 font-[magra]">
            Add Tags <sup>* Optional</sup>
          </p>
          <div className="flex flex-wrap gap-2 font-[magra]">
            {[0, 1, 2].map((index) => (
              <input
                key={index}
                className="border rounded px-2 py-1 mt-2 text-black font-[magra]"
                placeholder={`Tag ${index + 1}`}
                value={tags[index]}
                onChange={(e) => handleTagChange(index, e.target.value)}
              />
            ))}
          </div>
          <button
            className={`bg-[${secondary}] text-white px-4 py-2 mt-8 rounded-lg font-[magra]`}
            onClick={handleSubmit}
          >
            Wish Story
          </button>
        </div>
      </div>
    </>
  );
}

export default GenerateStory;
