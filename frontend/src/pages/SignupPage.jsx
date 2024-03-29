import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import ScaleLoader from "react-spinners/ClipLoader";

import { primary, secondary } from "../colors";
import img from "../assets/bg.png";
import api from "../assets/api";

function SignupPage() {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${api}/auth/signup`, newUser);
    },
    onMutate: () => {
      Swal.fire({
        title: "Signing Up!",
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    },
    onSuccess: async () => {
      Swal.fire({
        title: "Success!",
        text: "User Registered !",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        confirmButtonColor: primary,
      }).then(() => navigate("/login"));
    },
    onError: async (error) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
      });
    },
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar); // Append the avatar file to the form data
      formData.append("fullname", data.fullname);
      formData.append("email", data.email);
      formData.append("password", data.password);

      mutation.mutate(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-full flex flex-col min-h-screen pb-2">
      <div className={`w-full rounded-b-xl bg-[${primary}]`}>
        <p className="capitalize text-[44px] py-1 px-4">story.ai</p>
      </div>
      <div
        className={`w-full grow rounded-xl mt-4 font-[magra] text-lg sm:text-xl px-2 py-2`}
      >
        <div className={`w-full h-full sm:flex rounded-xl bg-[${primary}] p-4`}>
          <div className="sm:w-1/2 sm:p-6 flex flex-col lg:justify-around">
            <p>
              "Welcome to Story.ai, where creativity knows no bounds. Dive into
              a world of storytelling magic, craft unique tales from prompts,
              and connect with fellow wordsmiths. Sign up now to unleash your
              imagination, share your narratives, and embark on a journey of
              endless literary adventures."
            </p>
            <img src={img} className="w-[400px] hidden lg:block" alt="book" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="font-medium w-full sm:w-1/2 lg:w-1/4 lg:ml-[10%] sm:p-6 relative md:px-2"
          >
            <div className="mt-2 w-full">
              <label className="block">Full Name</label>
              <input
                type="text"
                name="fullname"
                height={"60px"}
                className="px-2 py-2 mt-1 w-full rounded-lg bg-white text-black"
                {...register("fullname", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.fullname?.type === "required" && (
                <p className="errorMsg text-red-500 text-sm mt-1">
                  Full Name is required.
                </p>
              )}
              {errors.fullname?.type === "minLength" && (
                <p className="errorMsg text-red-500 text-sm mt-1">
                  Full Name should be at-least 6 characters.
                </p>
              )}
            </div>
            <div className="mt-2 w-full">
              <label className="block">Email</label>
              <input
                type="email"
                name="email"
                height={"60px"}
                className="px-2 py-2 mt-1 w-full rounded-lg bg-white text-black"
                {...register("email", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length >= 5,
                    matchPattern: (value) =>
                      /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(value),
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <p className="errorMsg text-red-500 text-sm mt-1">
                  Email is required.
                </p>
              )}
              {errors.email?.type === "checkLength" && (
                <p className="errorMsg text-red-500 text-sm mt-1">
                  Email should be at-least 5 characters.
                </p>
              )}
              {errors.email?.type === "matchPattern" && (
                <p className="errorMsg text-red-500 text-sm mt-1">
                  Invalid Email format. Please check and try again
                </p>
              )}
            </div>
            <div className="mt-2 w-full relative">
              <label className="block">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                height={"60px"}
                className="px-2 py-2 mt-1 w-full rounded-lg bg-white text-black"
                {...register("password", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length >= 6,
                    matchPattern: (value) =>
                      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                        value
                      ),
                  },
                })}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className={`mx-1 cursor-pointer absolute text-[#4f709c] right-2 bottom-3`}
                onClick={togglePasswordVisibility}
              />
              {errors.password?.type === "required" && (
                <p className="errorMsg text-red-500 text-sm mt-1">
                  Password is required.
                </p>
              )}
              {errors.password?.type === "checkLength" && (
                <p className="errorMsg text-red-500 text-sm mt-1">
                  Password should be at-least 6 characters.
                </p>
              )}
              {errors.password?.type === "matchPattern" && (
                <p className="errorMsg text-red-500 text-sm mt-1">
                  Password should contain at least one uppercase letter,
                  lowercase letter, digit, and special symbol.
                </p>
              )}
            </div>
            <div className="mt-2 w-full">
              <label className="block">Avatar</label>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                className="px-2 py-2 mt-1 w-full rounded-lg bg-white text-black"
                onChange={handleAvatarChange}
              />
            </div>
            <button
              type="submit"
              className={`bg-[${secondary}] mt-8 px-4 py-2 rounded-lg`}
            >
              {mutation.isPending ? <ScaleLoader color="#ffffff" /> : "Signup"}
            </button>

            <p className="mt-3 h-fit w-fit">
              Already Registered ?<br />
              <a href="/login" className="underline underline-offset-4">
                Login
              </a>
            </p>
            <img
              src={img}
              className="w-[140px] absolute bottom-1 right-0 lg:hidden"
              alt="book"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
