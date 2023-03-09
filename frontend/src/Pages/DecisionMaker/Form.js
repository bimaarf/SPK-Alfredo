import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import "../../App.css";
export const Form = () => {
  const navRedirect = useNavigate();
  return (
    <>
      <Header />
      <div className="md:container md:mx-auto pb-10 md:pt-10">
        <div className="md:flex md:columns-2 md:gap-10">
          <SidebarDecisionMaker />
          <div className="bg-white rounded-xl w-full p-3 md:p-10 ">
            <div className="flex justify-between items-baseline">
              <h1 className="text-gray-700 font-semibold text-xl md:text-2xl">
                Form Mahasiswa
              </h1>
              <button
                onClick={() => navRedirect("/decision-maker/mahasiswa")}
                className="mb-4 float-right text-sm px-4 py-1 md:text-md md:px-8 md:py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 ease-in-out rounded text-white"
              >
                Kembali
              </button>
            </div>
            {/* Form */}
            <div className="space-y-4">
              <div className="mt-2">
                <label
                  htmlFor="nama_mahasiswa"
                  className="text-gray-700 font-semibold"
                >
                  Nama Mahasiswa
                </label>
                <input
                  id="nama_mahasiswa"
                  type="email"
                  name="nama_mahasiswa"
                  className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                  placeholder="Nama mahasiswa"
                  required
                />
              </div>
              {/* row 1 */}
              {/* jenis Kelamin */}
              <div className="md:w-1/2">
                <label
                  htmlFor="nama_mahasiswa"
                  className="text-gray-700 font-semibold"
                >
                  Jenis Kelamin
                </label>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center">
                    <input
                      id="laki-laki"
                      type="radio"
                      value="Laki-Laki"
                      name="jenis_kelamin"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="laki-laki"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Laki-Laki
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="perempuan"
                      type="radio"
                      value="Perempuan"
                      name="jenis_kelamin"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="perempuan"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Perempuan
                    </label>
                  </div>
                </div>
              </div>
              {/* jenis Kelamin */}
              <div className="md:w-1/2 mt-4 md:mt-0">
                <label
                  htmlFor="tempat_lahir"
                  className="text-gray-700 font-semibold"
                >
                  Tempat Lahir Tanggal Lahir
                </label>
                <div className="flex columns-2 gap-2">
                  <input
                    id="tempat_lahir"
                    type="text"
                    name="tempat_lahir"
                    className=" xappearance-none w-1/2 rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                    placeholder="Tempat Lahir"
                    required
                  />
                  <input
                    id="nama_mahasiswa"
                    type="date"
                    name="nama_mahasiswa"
                    className=" xappearance-none w-1/2 rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                    placeholder="Masukkan nama mahasiswa"
                    required
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="no_telp"
                  className="text-gray-700 font-semibold"
                >
                  No. Handphone
                </label>
                <input
                  id="no_telp"
                  type="number"
                  name="no_telp"
                  className=" xappearance-none w-full rounded py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                  placeholder="e.g. 628XXXX"
                  required
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="nilai_raport"
                  className="text-gray-700 font-semibold"
                >
                  Nilai Raport
                </label>
                <input
                  id="nilai_raport"
                  type="number"
                  name="nilai_raport"
                  className=" xappearance-none w-full rounded py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                  placeholder="e.g. 89.39"
                  required
                />
              </div>
              <div className="float-right">
                <button className="px-20 py-2 hover:px-24 bg-yellow-500 hover:bg-yellow-600 duration-300 ease-in-out rounded text-white">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
