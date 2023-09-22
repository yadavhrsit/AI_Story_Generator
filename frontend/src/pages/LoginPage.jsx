import React, { useState } from "react";
import { primary, secondary } from "../colors";
import img from "../assets/bg.png";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    // Add your login logic here
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
              "Welcome back to Story.ai! Please enter your credentials to access
              your account and continue your literary adventures."
            </p>
            <img src={img} className="w-[400px] hidden lg:block" alt="book" />
          </div>
          <form
            onSubmit={handleSubmit}
            className={`font-medium w-full sm:w-1/2 lg:w-1/4 lg:ml-[10%] sm:p-6 relative md:px-2 text-[${primary}]`}
          >
            <div className="mt-2 w-full">
              <label className="block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                height={"60px"}
                className="px-2 py-2 mt-1 w-full rounded-lg bg-white"
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
                className="px-2 py-2 mt-1 w-full rounded-lg bg-white "
              />
            </div>
            <button
              type="submit"
              className={`bg-[${secondary}] mt-8 px-4 py-2 rounded-lg`}
            >
              Login
            </button>

            <p className="mt-3 h-fit w-fit">
              Not Registered Yet?<br />
              <a href="/signup">Signup</a>
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
