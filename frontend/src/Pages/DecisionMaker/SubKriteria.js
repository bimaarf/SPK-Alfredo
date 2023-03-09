import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import { FormEditSubKriteria } from "./Modal/FormEditSubKriteria";

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
                  <h1 className="font-semibold md:text-xl text-gray-800 mt-4">
                    {item.kode_kriteria} ({item.nama_kriteria})
                  </h1>
                  <div className="overflow-x-auto w-full">
                    <table className="table w-full mt-4 text-start">
                      {/* head */}
                      <thead>
                        <tr>
                          <th className="text-start">No.</th>
                          <th className="text-start">Nama Sub Kriteria</th>
                          <th className="text-start">Nilai</th>
                          <th className="text-start">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="text-start">
                        {getSubKriteria &&
                          getSubKriteria.map(
                            (subKriteria, index) =>
                              subKriteria.kriteria_id === item.id && (
                                <>
                                  <FormEditSubKriteria
                                    getData={getData}
                                    subKriteria={subKriteria}
                                  />
                                  <tr key={index}>
                                    <td>1.</td>
                                    <td className="w-96">{subKriteria.nama_sub_kriteria}</td>
                                    <td>{subKriteria.nilai}</td>
                                    <td>
                                      <div className="flex justify-start items-center gap-2">
                                        <label
                                          htmlFor={`form-edit-subkriteria${subKriteria.id}`}
                                          className="fa fa-pencil cursor-pointer py-1.5 px-2 bg-opacity-90 text-white rounded-md bg-sky-500 hover:bg-sky-600  text-sm duration-300 ease-in-out"
                                        ></label>
                                        <button className="fa fa-trash py-1.5 px-2 bg-opacity-90 text-white rounded-md bg-red-600 hover:bg-red-700 text-sm duration-300 ease-in-out"></button>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              )
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
