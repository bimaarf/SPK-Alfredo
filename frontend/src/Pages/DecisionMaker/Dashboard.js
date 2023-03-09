import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import { ModalKriteria } from "./Modal/ModalKriteria";
import { ModalSubKriteria } from "./Modal/ModalSubKriteria";
export const Dashboard = () => {
  const [getData, setData] = useState(13);
  const data = [
    ["Task", "Hours per Day"],
    ["Total Penerimaan Bidikmisi UNTAN", getData],
    ["Total Non Bidikmisi UNTAN", 3],
  ];
  const options = {
    title: "Total Mahasiswa Untan",
  };
  useEffect(() => {
    getDashboard();
  }, []);
  const [getKriteria, setKriteria] = useState("");
  const [getSubKriteria, setSubKriteria] = useState("");
  const getDashboard = async () => {
    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios.get("api/data-dashboard/view").then((res) => {
        setKriteria(res.data[0]);
        setSubKriteria(res.data[1]);
      });
    });
  };

  return (
    <>
      <Header />
      {getKriteria && (
        <ModalKriteria getKriteria={getKriteria} getDashboard={getDashboard} />
      )}
      <ModalSubKriteria
        getKriteria={getKriteria}
        getSubKriteria={getSubKriteria}
        getDashboard={getDashboard}
      />
      <div className="md:container md:mx-auto pb-10 md:pt-10">
        <div className="md:flex md:columns-2 md:gap-10">
          <SidebarDecisionMaker />
          <div className="bg-white rounded-xl w-full p-3 md:p-10 ">
            <h1 className="md:text-2xl text-xl font-bold text-gray-600">
              SELAMAT DATANG,{" "}
            </h1>
            <h1 className="text-xl font-bold text-gray-600">
              Admin Universitas Tanjungpura
            </h1>
            <div className="md:flex justify-center items-center gap-10 mt-4">
              <div className="md:w-1/3">
                <div className="bg-cyan-600 p-5 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2 hover:bg-cyan-700 hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer">
                  <div className="flex justify-start items-center gap-2">
                    <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                    <h1 className="text-white text-md">Data Mahasiswa</h1>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="md:grid md:grid-cols-2 grid-cols-2 gap-4">
                  <label
                    htmlFor="form-kriteria"
                    className={`${
                      getKriteria
                        ? "bg-cyan-600 hover:bg-cyan-700"
                        : "bg-red-600 hover:bg-red-700"
                    } p-5 mt-2 md:mt-0 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2  hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer`}
                  >
                    <div className="flex justify-start items-center gap-2">
                      <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                      <h1 className="text-white text-md">Data Kriteria</h1>
                    </div>
                  </label>
                  <label
                    htmlFor="form-sub-kriteria"
                    className="bg-cyan-600 p-5 mt-2 md:mt-0 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2 hover:bg-cyan-700 hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer"
                  >
                    <div className="flex justify-start items-center gap-2">
                      <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                      <h1 className="text-white text-md">Data Sub Kriteria</h1>
                    </div>
                  </label>
                  <div className="bg-cyan-600 p-5 mt-2 md:mt-0 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2 hover:bg-cyan-700 hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer">
                    <div className="flex justify-start items-center gap-2">
                      <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                      <h1 className="text-white text-md">
                        Data Olah Penilaian
                      </h1>
                    </div>
                  </div>
                  <div className="bg-cyan-600 p-5 mt-2 md:mt-0 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2 hover:bg-cyan-700 hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer">
                    <div className="flex justify-start items-center gap-2">
                      <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                      <h1 className="text-white text-md">Cetak Laporan</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
