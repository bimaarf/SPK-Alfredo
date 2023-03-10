import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

export const ModalDeleteSubKriteria = ({ getData, subKriteria }) => {
  const handleDelete = async () => {
    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios
        .post(`api/sub-kriteria/delete/${subKriteria.id}`)
        .then((res) => {
          toast.success("berhasil dihapus");
          getData()
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });
    });
  };

  return (
    <>
      <input
        type="checkbox"
        id={`form-delete-subkriteria${subKriteria.id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <button
            htmlFor="form-sub-kriteria"
            onClick={() =>
              document
                .getElementById(`form-delete-subkriteria${subKriteria.id}`)
                .click()
            }
            className="text-lg btn-sm absolute right-6 btn-circle bg-gray-400 cursor-pointer hover:rotate-180 hover:bg-gray-500 duration-300 ease-in-out text-white">
            ✕
          </button>
          <h3 className="md:text-2xl text-lg font-bold text-center">
            Yakin untuk menghapus ? {subKriteria.id}
          </h3>
          <div className="flex justify-center items-center gap-4 mt-10 md:text-md text-sm md:p-10">
            <button
              onClick={handleDelete}
              type="button"
              className="bg-red-600 hover:bg-red-700 duration-300 hover:md:px-24 hover:px-12 ease-in-out rounded-md px-10 md:px-20 py-3 md:py-4 text-white">
              <i className="fa fa-trash mr-1"></i>
              Hapus
            </button>
            <label
              htmlFor={`form-delete-subkriteria${subKriteria.id}`}
              className="bg-gray-500 cursor-pointer hover:bg-gray-600 duration-300 hover:md:px-24 hover:px-12 ease-in-out rounded-md px-10 md:px-20 py-3 md:py-4 text-white">
              Tutup
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
