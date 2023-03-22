import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const ModalTambahMhs = ({ getAllData }) => {
  const [formInput, setFormInput] = useState({
    nama: "",
  });
  const handleChange = (e) => {
    e.persist();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nama: formInput.nama,
    };
    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios.post("api/mahasiswa/store", data).then((res) => {
        toast.success("Mahasiswa berhasil ditambahkan");
        document.getElementById("modal-mhs").click();
        getAllData()
      });
    });
  };
  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div>
            <label htmlFor="nama">Nama Mahasiswa</label>
            <input
              type="text"
              name="nama"
              onChange={handleChange}
              value={formInput.nama}
              className="w-full py-3 px-2 border focus:border-orange-300 mt-2 bg-gray-100 outline-none"
              placeholder="Masukkan nama mahasiswa"
            />
          </div>
          <div className="modal-action">
            <label
              id="modal-mhs"
              htmlFor="my-modal"
              className="px-10 py-1.5 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
              Tutup
            </label>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-10 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded">
              Tambahkan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
