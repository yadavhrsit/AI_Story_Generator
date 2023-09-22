import React, { useState } from "react";
import { primary, secondary } from "../colors";
import img from "../assets/bg.png";
function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="w-full h-full flex flex-col min-h-screen pb-2">
      <div className={`w-full rounded-b-xl bg-[${primary}]`}>
        <p className="capitalize text-[44px] py-1 px-4">story.ai</p>
      </div>
      <div className={`w-full grow rounded-xl mt-4 font-[magra] text-lg sm:text-xl px-2 py-2`}>
        <div className={`w-full h-full sm:flex rounded-xl bg-[${primary}] p-4`}>
          <div className="sm:w-1/2 sm:p-6 h-full flex flex-col lg:justify-around">
            <p>
              "Welcome to Story.ai, where creativity knows no bounds. Dive into a
              world of storytelling magic, craft unique tales from prompts, and
              connect with fellow wordsmiths. Sign up now to unleash your
              imagination, share your narratives, and embark on a journey of
              endless literary adventures."
            </p>
            <img src={img} className="w-[400px] hidden lg:block" alt="book" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="font-medium w-full sm:w-1/2 lg:w-1/4 lg:ml-[10%] sm:p-6 relative md:px-2"
          >
            <div className="mt-2 w-full">
              <label className="block">Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                height={"60px"}
                className="px-2 py-2 mt-1 w-full rounded-lg bg-white text-black"
              />
            </div>
            <div className="mt-2 w-full">
              <label className="block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                height={"60px"}
                className="px-2 py-2 mt-1 w-full rounded-lg bg-white text-black"
              />
            </div>
            <div className="mt-2 w-full">
              <label className="block">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                height={"60px"}
                className="px-2 py-2 mt-1 w-full rounded-lg bg-white text-black"
              />
            </div>
            <button
              type="submit"
              className={`bg-[${secondary}] mt-8 px-4 py-2 rounded-lg`}
            >
              Signup
            </button>

            <p className="mt-3 h-fit w-fit">
              Already Registered ?<br />
              <a href="/login">Login</a>
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
