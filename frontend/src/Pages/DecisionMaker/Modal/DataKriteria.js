import React, { useState } from "react";
import { FormEditKriteria } from "./FormEditKriteria";

export const DataKriteria = ({ getKriteria, getDashboard }) => {
  const [isActive, setIsActive] = useState("Data");
  const [dataSelector, setDataSelector] = useState();
  return (
    <>
      {isActive === "Data" ? (
        <>
          {getKriteria.map((item, key) => (
            <button
              key={key}
              onClick={() => {
                setIsActive("Edit");
                setDataSelector(item);
              }}
              className="w-full hover:ml-2 hover:-mr-2 duration-300 transition-all ease-in-out bg-white mt-4 px-4 h-20 rounded-lg flex justify-between items-center"
            >
              <div className="text-left font-semibold">
                <h1 className="text-gray-600 font-semibold text-md md:text-xl">
                  {item.nama_kriteria}
                </h1>
                <span className="text-xs md:text-sm text-cyan-600 mr-1">
                  Kode Kriteria :
                </span>
                <span className="text-xs md:text-sm text-orange-500 mr-1">
                  {item.kode_kriteria}
                </span>
                <span className="text-xs md:text-sm text-cyan-600 mx-1">
                  Bobot :
                </span>
                <span className="text-xs md:text-sm text-orange-500 mr-1">
                  {item.bobot}
                </span>
              </div>
              <div>
                <span className="text-xs md:text-sm text-orange-500 mr-1">
                  {item.tipe_kriteria}
                </span>
                <i className="fa fa-arrow-right text-sky-500"></i>
              </div>
            </button>
          ))}
        </>
      ) : (
        <FormEditKriteria
          dataSelector={dataSelector}
          getDashboard={getDashboard}
          setIsActive={setIsActive}
        />
      )}
    </>
  );
};
