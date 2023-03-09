import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const FormEditSubKriteria = ({ getData, subKriteria }) => {
  const [formEdit, setFormEdit] = useState({
    nama_sub_kriteria: subKriteria.nama_sub_kriteria,
    nilai: subKriteria.nilai,
  });
  const handleChange = (e) => {
    e.persist();
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nama_sub_kriteria: formEdit.nama_sub_kriteria,
      nilai: formEdit.nilai,
    };
    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios.post(`api/sub-kriteria/update/${subKriteria.id}`, data).then(
        (res) => {
          document
            .getElementById(`form-edit-subkriteria${subKriteria.id}`)
            .click();
          if (res.data.status === 200) getData();
          return toast.success("Berhasil disunting");
        },
        function (err) {
          return toast.error("error");
        }
      );
    });
  };
  return (
    <>
      <input
        type="checkbox"
        id={`form-edit-subkriteria${subKriteria.id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <button
            htmlFor="form-sub-kriteria"
            onClick={() =>
              document
                .getElementById(`form-edit-subkriteria${subKriteria.id}`)
                .click()
            }
            className="text-lg btn-sm absolute right-6 btn-circle bg-gray-400 cursor-pointer hover:rotate-180 hover:bg-gray-500 duration-300 ease-in-out text-white"
          >
            ✕
          </button>
          <h3 className="text-lg font-bold">{subKriteria.nama_sub_kriteria}</h3>
          <form className="py-4">
            <div className="md:flex gap-1 space-y-2 md:space-y-0">
              <div className="md:w-3/4">
                <label>Nama Sub Kriteria</label>
                <input
                  name="nama_sub_kriteria"
                  onChange={handleChange}
                  className="xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                  value={formEdit.nama_sub_kriteria}
                />
              </div>
              <div className="md:w-1/4">
                <label>Nilai</label>
                <input
                  name="nilai"
                  onChange={handleChange}
                  className="xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                  value={formEdit.nilai}
                />
              </div>
            </div>
            <div className="mt-4 float-right">
              <button
                onClick={handleSubmit}
                type="submit"
                className="md:mt-0 text-sm duration-300 ease-in-out px-10 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600"
              >
                Sunting
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
