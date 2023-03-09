import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import data from "./Data/Data";
import Table from "./Data/DataTable";
import "../../App.css";
export const Mahasiswa = () => {
  const clickhandler = (name) => console.log("delete", name);
  const navRedirect = useNavigate();
  return (
    <>
      <Header />
      <div className="lg:container lg:mx-auto pb-10 md:pt-10">
        <div className="md:flex md:columns-2 md:gap-10">
          <SidebarDecisionMaker />
          <div className="bg-white rounded-xl w-full p-3 md:p-10 ">
            <div className="flex justify-between items-baseline">
              <h1 className="text-gray-700 font-semibold text-xl md:text-2xl">
                Data Mahasiswa
              </h1>
              <button
                onClick={() => navRedirect("/decision-maker/mahasiswa/form")}
                className="mb-4 float-right text-sm px-4 py-1 md:text-md md:px-8 md:py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 ease-in-out rounded text-white"
              >
                Tambah Mahasiswa
              </button>
            </div>
            <div className="container-custome"></div>
            <Table data={data} click={clickhandler} />
          </div>
        </div>
      </div>
    </>
  );
};
