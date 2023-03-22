import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import data from "./Data/Data";
import Table from "./Data/DataTable";
import "../../App.css";
import axios from "axios";
import { TableMahasiswa } from "./Components/TableMahasiswa";
import { ModalTambahMhs } from "./Modal/ModalTambahMhs";
export const Mahasiswa = () => {
  const clickhandler = (name) => console.log("delete", name);
  const navRedirect = useNavigate();
  const [getKriteria, setKriteria] = useState("");
  const [getSubKriteria, setSubKriteria] = useState("");
  const [getMahasiswa, setMahasiswa] = useState("");
  const [getMhsKriteria, setMhsKriteria] = useState("");
  const getAllData = async () => {
    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios.get("api/data-dashboard/view").then((res) => {
        setKriteria(res.data[0]);
        setSubKriteria(res.data[1]);
      });
      axios.get("api/mahasiswa/view").then((res) => {
        setMahasiswa(res.data[0]);
        setMhsKriteria(res.data[1]);
      });
    });
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <Header />
      <div className="lg:container lg:mx-auto pb-10 md:pt-10">
        <div className="md:flex md:columns-2 md:gap-10">
          <SidebarDecisionMaker />
          <ModalTambahMhs getAllData={getAllData} />
          <div className="bg-white rounded-xl w-4/4 p-3 md:p-10 overflow-x-scroll">
            <div className="flex justify-between items-baseline">
              <h1 className="text-gray-700 font-semibold text-xl md:text-2xl">
                Data Mahasiswa
              </h1>
              <label
                htmlFor="my-modal"
                className="mb-4 cursor-pointer float-right text-sm px-4 py-1 md:text-md md:px-8 md:py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 ease-in-out rounded text-white">
                Tambah Mahasiswa
              </label>
            </div>
            <div className="w-full ">
              <TableMahasiswa
                getKriteria={getKriteria}
                getSubKriteria={getSubKriteria}
                getMahasiswa={getMahasiswa}
                getMhsKriteria={getMhsKriteria}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
