import React, { useState } from "react";
export const DataSubKriteria = ({
  getKriteria,
  getSubKriteria,
  getDashboard,
}) => {
  const [isActive, setIsActive] = useState("Data");
  const [dataSelector, setDataSelector] = useState();
  const subKriteriaFilter = [];

  getSubKriteria.map(
    (element) =>
      element.kriteria_id === dataSelector &&
      subKriteriaFilter.push({
        kriteria_id: element.kriteria_id,
        nama_sub_kriteria: element.nama_sub_kriteria,
        nilai: element.nilai,
      })
  );
  return (
    <>
      {isActive === "Data" ? (
        <>
          {getKriteria.map((item, key) => (
            <button
              key={key}
              onClick={() => {
                setIsActive("Edit");
                setDataSelector(item.id);
              }}
              className="w-full hover:ml-2 hover:-mr-2 duration-300 transition-all ease-in-out bg-white mt-4 px-4 h-20 rounded-lg flex justify-between items-center"
            >
              <div className="text-left font-semibold">
                <h1 className="text-gray-600 font-semibold text-md md:text-xl">
                  {item.kode_kriteria} ({item.nama_kriteria})
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
        <>
          {subKriteriaFilter.length === 0 && <>
          <p className="text-center mt-3 bg-gray-200 p-4 text-gray-500">Anda belum menambahkan sub kriteria</p>
           </>}
          {subKriteriaFilter.map((item, key) => (
            <button
              key={key}
              onClick={() => {
                setIsActive("Edit");
                // setDataSelector(item.id);
              }}
              className="w-full hover:ml-2 hover:-mr-2 duration-300 transition-all ease-in-out bg-white mt-4 px-4 h-20 rounded-lg flex justify-between items-center"
            >
              <div className="text-left font-semibold">
                <h1 className="text-gray-600 font-semibold text-md md:text-xl">
                  {item.nama_sub_kriteria}
                </h1>
                <span className="text-xs md:text-sm text-cyan-600 mr-1">
                  Kode Kriteria :
                </span>
                <span className="text-xs md:text-sm text-orange-500 mr-1"></span>
                <span className="text-xs md:text-sm text-cyan-600 mx-1">
                  Bobot :
                </span>
                <span className="text-xs md:text-sm text-orange-500 mr-1"></span>
              </div>
              <div>
                <span className="text-xs md:text-sm text-orange-500 mr-1"></span>
                <i className="fa fa-arrow-right text-sky-500"></i>
              </div>
            </button>
          ))}
        </>
      )}
    </>
  );
};
