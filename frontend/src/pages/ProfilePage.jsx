import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import ScaleLoader from "react-spinners/ClipLoader";

import { primary, secondary } from "../colors";
import api from "../assets/api";

function ProfilePage() {
  const token = localStorage.getItem("jwtToken");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${api}/auth/profile`, newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onMutate: () => {
      Swal.fire({
        title: "Updating...",
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    },
    onSuccess: async () => {
      Swal.fire({
        title: "Success!",
        text: "User Details Updated !",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        confirmButtonColor: primary,
      });
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
  return (
    <div
      className={`w-full md:max-h-[calc(100vh-115px)] md:overflow-y-auto p-0 rounded-lg bg-[${primary}] lg:py-4 lg:px-8 lg:rounded-2xl`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-medium font-[magra] text-lg sm:text-xl h-fit w-4/5 sm:w-1/2 xl:w-1/4 m-auto sm:m-0 p-2 sm:p-6 relative"
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
        <div className="mt-2 w-full">
          <label className="block">Password</label>
          <input
            type="password"
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
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>
        <div className="mt-2 w-full">
          <label className="block">Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            height={"60px"}
            className="px-2 py-2 mt-1 w-full rounded-lg bg-white text-black"
            {...register("repeat_password", {
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
          {errors.repeat_password?.type === "required" && (
            <p className="errorMsg text-red-500 text-sm mt-1">
              Password is required.
            </p>
          )}
          {errors.repeat_password?.type === "checkLength" && (
            <p className="errorMsg text-red-500 text-sm mt-1">
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.repeat_password?.type === "matchPattern" && (
            <p className="errorMsg text-red-500 text-sm mt-1">
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`bg-[${secondary}] mt-8 px-4 py-2 rounded-lg`}
        >
          {mutation.isPending ? <ScaleLoader color="#ffffff" /> : "Update"}
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;
