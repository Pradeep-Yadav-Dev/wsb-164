import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const navigate = useNavigate();


  let saveForm = (e) => {
    e.preventDefault();

    axios.post(`${import.meta.env.VITE_API_URL}login`, e.target)
      .then((ress) => {
        alert(ress.data.message);

        Cookies.set("token", ress.data.token);

        if (ress.data.status == true) {
          navigate("/dashboard");
        }

        
       

      });
  }











  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className=""
            src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
            alt="logo"
          />

        </a>
        <form onSubmit={saveForm}

          className="w-[500px] bg-white rounded-lg shadow-2xl p-6 space-y-4"
        >
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"


              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Enter Email"
            />

          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"

              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Enter Password"
            />

          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
