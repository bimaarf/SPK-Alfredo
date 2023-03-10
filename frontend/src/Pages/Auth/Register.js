import React from "react";
import headerImage from "../../Images/bg.png";
import untanImage from "../../Images/untan.png";
import "../../App.css";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <>
      <div
        className="header-img"
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <div className="lg:container-lg lg:mx-auto flex justify-center items-center mx-2">
          <div className="pt-10">
            <div className="flex justify-center">
              <img src={untanImage} width={200} />
            </div>
            <h1 className="text-center font-bold text-3xl md:text-6xl text-white drop-shadow-lg shadow-black">
              SPK BIDIKMISI UNTAN
            </h1>
            <div className="bg-white rounded-3xl p-10 shadow-md mt-10 space-y-6">
              <h1 className="text-center text-yellow-500 font-bold md:text-4xl text-2xl">
                Register
              </h1>
              <div className="mt-2">
                <label
                  htmlFor="username"
                  className="text-gray-700 font-semibold"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                  placeholder="Masukkan username"
                  required
                />
              </div>
              <div className="mt-2">
                <label htmlFor="email" className="text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                  placeholder="Masukkan alamat email"
                  required
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="password"
                  className="text-gray-700 font-semibold"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                  placeholder="Masukkan password"
                  required
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="password"
                  className="text-gray-700 font-semibold"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                  placeholder="Konfirmasi password"
                  required
                />
              </div>
              <div className="mt-10 text-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 px-28 hover:px-32 hover:rounded-xl py-2 rounded-md text-xl font-semibold text-white duration-300 ease-in-out">
                  Register
                </button>
                <div className="text-sm mt-2 text-gray-500">
                  <span>Sudah punya akun?</span>
                  <Link className="text-orange-500 italic" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
