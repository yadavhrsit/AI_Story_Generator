import React,{useState} from "react";
import { primary, secondary } from "../../colors";
import api from "../../assets/api";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function GeneratedStory() {
  const location = useLocation();
  const navigate = useNavigate();
  const [responseData, setresponseData] = useState(location.state && location.state.responseData)
  const [prompt, setprompt] = useState(location.state && location.state.prompt)

  const token = localStorage.getItem("jwtToken");

  const postStoryMutation = useMutation({
    mutationFn: (story) => {
      return axios.post(`${api}/story/add`, story, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },

    onMutate: () => {
      Swal.fire({
        title: "Posting!",
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    },

    onSuccess: async (data) => {
      Swal.fire({
        title: "Success!",
        text: "Posted!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        confirmButtonColor: primary,
      }).then(() =>
        navigate("/home", {
          state: { responseData, prompt },
        })
      );
    },
    onError: async (error) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
      });
    },
  });

  

  const handlePostStory = () =>{
    postStoryMutation.mutate({
      title: responseData.title,
      tags: prompt.tags,
      description: responseData.description,
      content: responseData.content,
    });
  }
  

  return (
    <div
      className={`bg-[${primary}] text-[${primary}] h-fit rounded-2xl px-4 py-6 w-full font-[magra] text-xl font-medium`}
    >
      <p className="text-white">Here's the Story you wished for</p>
      <div className="bg-white p-4 h-full overflow-y-auto rounded-lg mt-4 text-black">
        {responseData.content}        
      </div>
      <div className="w-full flex justify-end gap-4 text-base">
        <button
          className={`bg-[${secondary}] text-white px-4 py-2 mt-8 rounded-lg grow md:grow-0`}
          onClick={() => {navigate("/home/generate")}}
        >
          Wish Another
        </button>
        <button
          className={`bg-[${secondary}] text-white px-2 md:px-6 py-0 mt-8 rounded-lg grow md:grow-0`}
          onClick={() => {handlePostStory()}}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default GeneratedStory;
