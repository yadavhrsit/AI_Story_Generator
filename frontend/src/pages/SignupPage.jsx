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
    <div className="w-full lg:flex lg:flex-col">
      <div className={`bg-[${primary}] w-full px-6 py-2 rounded-b-3xl`}>
        <p className="text-[44px] h-fit capitalize">Story.ai</p>
      </div>
      <div
        className={`bg-[${primary}] w-full flex flex-col sm:flex-row gap-4 md:gap-10 mt-4 p-4 lg:p-10 font-[magra] text-xl md:text-2xl`}
      >
        <div className="w-full order-2 md:order-1 ">
          <form
            onSubmit={handleSubmit}
            className="font-medium w-full relative md:px-2"
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

            <p className="mt-3 h-fit">
              Already Registered ?<br />
              Login
            </p>
            <img
              src={img}
              className="w-[140px] absolute bottom-1 right-0 lg:hidden"
              alt="book"
            />
          </form>
        </div>

        <div className="w-full lg:h-full flex flex-col order-1 md:px-2">
          <p className="min-h-[60%]">
            "Welcome to Story.ai, where creativity knows no bounds. Dive into a
            world of storytelling magic, craft unique tales from prompts, and
            connect with fellow wordsmiths. Sign up now to unleash your
            imagination, share your narratives, and embark on a journey of
            endless literary adventures."
          </p>
          <div className="hidden 2xl:flex-grow">
            <img src={img} className="h-full w-[450px] ml-auto" alt="book" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
