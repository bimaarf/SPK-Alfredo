import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import { FormEditSubKriteria } from "./Modal/FormEditSubKriteria";
import { ModalDeleteSubKriteria } from "./Modal/ModalDeleteSubKriteria";

export const SubKriteria = () => {
  useEffect(() => {
    getData();
  }, []);
  const [getKriteria, setKriteria] = useState("");
  const [getSubKriteria, setSubKriteria] = useState("");
  const getData = async () => {
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
      <div className="md:container md:mx-auto pb-10 md:pt-10">
        <div className="md:flex md:columns-2 md:gap-10">
          <SidebarDecisionMaker />
          <div className="bg-white rounded-xl w-full p-3 md:p-10">
            {getKriteria &&
              getKriteria.map((item, key) => (
                <div key={key}>
                  <h1 className="font-semibold md:text-md text-gray-800 my-4">
                    {item.kode_kriteria} ({item.nama_kriteria})
                  </h1>
                  <div className="overflow-x-auto w-full md:text-md text-sm">
                    <div>
                      <div className="border flex border-gray-200 p-3 gap-2">
                        <div className="text-start border-r w-3/6">
                          Nama Sub Kriteria
                        </div>
                        <div className="text-start border-r w-1/6">Nilai</div>
                        <div className="text-start w-1/6">Aksi</div>
                      </div>
                    </div>
                    {getSubKriteria &&
                      getSubKriteria.map(
                        (subKriteria, index) =>
                          subKriteria.kriteria_id === item.id && (
                            <div key={index} className="border flex border-gray-200 p-3 gap-2">
                              <div className="w-text-start  border-r w-3/6">
                                {subKriteria.nama_sub_kriteria}
                              </div>
                              <div className="text-start  border-r w-1/6">
                                {subKriteria.nilai}
                              </div>
                              <div className="w-1/6">
                                <div className="flex justify-end items-center gap-2">
                                  <label
                                    htmlFor={`form-edit-subkriteria${subKriteria.id}`}
                                    className="fa fa-pencil cursor-pointer md:py-1.5 md:px-2 py-1 px-1 text-xs  md:text-smbg-opacity-90 text-white rounded-md bg-sky-500 hover:bg-sky-600 duration-300 ease-in-out"></label>
                                  <label
                                    htmlFor={`form-delete-subkriteria${subKriteria.id}`}
                                    className="fa fa-trash md:py-1.5 md:px-2 py-1 px-1 text-xs md:text-sm bg-opacity-90 text-white rounded-md bg-red-600 hover:bg-red-700 duration-300 ease-in-out cursor-pointer"></label>
                                </div>
                              </div>
                              <FormEditSubKriteria
                                getData={getData}
                                subKriteria={subKriteria}
                              />
                              <ModalDeleteSubKriteria
                                getData={getData}
                                subKriteria={subKriteria}
                              />
                            </div>
                          )
                      )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
