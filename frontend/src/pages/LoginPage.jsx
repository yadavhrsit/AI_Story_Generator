import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import ScaleLoader from "react-spinners/ClipLoader";

import { primary } from "../colors";
import img from "../assets/bg.png";
import api from "../assets/api";

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${api}/auth/signin`, newUser);
    },
    onMutate: () => {
      Swal.fire({
        title: "Logging in!",
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    },
    onSuccess: async (data) => {
      const token = data.data.token;
      localStorage.setItem("jwtToken", token);
      Swal.fire({
        title: "Success!",
        text: "Login Successful!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        confirmButtonColor: primary,
      }).then(() => navigate("/home"));
    },
    onError: async (error) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
      });
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({ ...data });
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
        <div
          className={`w-full h-full flex flex-col gap-[20px] sm:flex-row rounded-xl bg-[${primary}] p-4`}
        >
          <div className="sm:w-1/2 sm:p-6 flex flex-col lg:justify-around">
            <p>
              "Welcome back to Story.ai! Please enter your credentials to access
              your account and continue your literary adventures."
            </p>
            <img src={img} className="w-[400px] hidden lg:block" alt="book" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`font-medium w-full sm:w-1/2 lg:w-1/4 lg:ml-[10%] sm:p-6 relative md:px-2 text-[${primary}]`}
          >
            <div className="mt-2 w-full">
              <label className="block">Email</label>
              <input
                type="email"
                name="email"
                height={"60px"}
                className={`px-2 py-2 mt-1 w-full rounded-lg bg-white text-black ${
                  errors.email && "border-red-500"
                }`}
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
                  Email should be at least 5 characters.
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
                className={`px-2 py-2 mt-1 w-full rounded-lg bg-white text-black ${
                  errors.password && "border-red-500"
                }`}
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
            </div>
            <button
              type="submit"
              className={`bg-[#4F709C] mt-8 px-4 mx-auto py-2 rounded-lg`}
            >
              {mutation.isPending ? <ScaleLoader color="#ffffff" /> : "Login"}
            </button>

            <p className="mt-3 h-fit w-fit">
              Not Registered Yet?
              <br />
              <a href="/signup" className="underline underline-offset-4">
                Signup
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

export default LoginPage;
