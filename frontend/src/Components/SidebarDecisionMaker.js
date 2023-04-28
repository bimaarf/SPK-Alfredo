import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const SidebarDecisionMaker = () => {
  const location = useLocation();
  const navRedirect = useNavigate();
  return (
    <>
      <div className="bg-white w-2/4 h-2/4 rounded-xl hidden md:block md:pb-10">
        <div className="bg-white rounded-3xl p-10" style={{ height: "80vh" }}>
          <div className="flex justify-start items-center gap-3 border-b pb-4">
            <i className="fa fa-user-circle text-5xl text-yellow-500"></i>
            <h1 className="text-gray-700 font-normal text-2xl">
              Decision Maker
            </h1>
          </div>
          <div
            onClick={() => navRedirect("/decision-maker/dashboard")}
            className={`${
              location.pathname === "/decision-maker/dashboard"
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-500 text-gray-700 hover:text-white"
            } flex gap-3 p-3 cursor-pointer text-xl  duration-200 ease-in-out rounded-xl mt-4 justify-start items-center`}>
            <i className="fa fa-user"></i>
            <h1 className="font-normal">Dashboard</h1>
          </div>
          <div
            onClick={() => navRedirect("/decision-maker/sub-kriteria")}
            className={`${
              location.pathname === "/decision-maker/sub-kriteria"
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-500 text-gray-700 hover:text-white"
            } flex gap-3 p-3 cursor-pointer text-xl  duration-200 ease-in-out rounded-xl mt-4 justify-start items-center`}>
            <i className="fa fa-file-text"></i>
            <h1 className="font-normal">Sub Kriteria</h1>
          </div>
          <div
            onClick={() => navRedirect("/decision-maker/mahasiswa")}
            className={`${
              location.pathname.split("/")[2] === "mahasiswa"
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-500 text-gray-700 hover:text-white"
            } flex gap-3 p-3 cursor-pointer text-xl  duration-200 ease-in-out rounded-xl mt-4 justify-start items-center`}>
            <i className="fa fa-users -ml-1"></i>
            <h1 className="font-normal ">Mahasiswa</h1>
          </div>
          <div
            onClick={() => navRedirect("/decision-maker/spk")}
            className={`${
              location.pathname.split("/")[2] === "spk"
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-500 text-gray-700 hover:text-white"
            } flex gap-3 p-3 cursor-pointer text-xl  duration-200 ease-in-out rounded-xl mt-4 justify-start items-center`}>
            <i className="fa fa-paste -ml-1"></i>
            <h1 className="font-normal">SPK</h1>
          </div>

          <div className="flex gap-3 p-3 cursor-pointer text-xl mt-40 bg-red-500 hover:bg-red-600 text-white hover:text-white duration-200 ease-in-out rounded-xl justify-start items-center">
            <i className="fa fa-power-off"></i>
            <h1 className="font-normal -ml-1">Logout</h1>
          </div>
        </div>
      </div>
    </>
  );
};
