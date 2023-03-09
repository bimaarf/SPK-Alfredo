import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
export const FormEditKriteria = ({
  setIsActive,
  dataSelector,
  getDashboard,
}) => {
  const [loadSubmit, setLoadSubmit] = useState(false);
  const [loadDelete, setLoadDelete] = useState(false);
  const [formInput, setFormInput] = useState({
    nama_kriteria: dataSelector.nama_kriteria,
    kode_kriteria: dataSelector.kode_kriteria,
    bobot: dataSelector.bobot,
    tipe_kriteria: dataSelector.tipe_kriteria,
  });
  const handleChange = (e) => {
    e.persist();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const handleDelete = async (e) => {
    setLoadDelete(true);
    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios.post(`api/kriteria/delete/${dataSelector.id}`).then(
        (res) => {
          getDashboard();
          document.getElementById("form-kriteria").click();
          if (res.data.status === 200) return toast.success("Berhasil dihapus");
        },
        function (err) {
          return toast.warning("Hapus terlebih dahulu sub kriteria");
        }
      );
    });
    setTimeout(() => {
      setLoadDelete(false);
    }, 2000);
  };
  const handleSubmit = async (e) => {
    setLoadSubmit(true);
    e.preventDefault();
    const data = {
      nama_kriteria: formInput.nama_kriteria,
      kode_kriteria: formInput.kode_kriteria,
      bobot: formInput.bobot,
      tipe_kriteria: formInput.tipe_kriteria,
    };
    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios.post(`api/kriteria/edit/` + dataSelector.id, data).then(
        (res) => {
          getDashboard();
          document.getElementById("form-kriteria").click();
          if (res.data.message === "Update!")
            return toast.success("Berhasil diubah");
          if (res.data.message === "Added!")
            return toast.success("Berhasil ditambah");
        },
        function (err) {
          return toast.warning("Pastikan data terisi dengan benar!");
        }
      );
    });
    setTimeout(() => {
      setLoadSubmit(false);
    }, 2000);
  };
  return (
    <>
      <div
        onClick={() => setIsActive("Data")}
        className=" rounded-xl w-full transition-all py-4 duration-300 ease-in-out cursor-pointer"
      >
        <div className="flex items-baseline justify-between">
          <h1 className="font-semibold text-sm md:text-md text-gray-600">
            <i className="fa fa-arrow-left text-sky-500 font-normal mr-2"></i>
            Kembali
          </h1>
        </div>
      </div>
      <form>
        <div className="mt-2">
          <label
            htmlFor="nama_kriteria"
            className="text-gray-600 font-semibold"
          >
            Nama Kriteria
          </label>
          <input
            onChange={handleChange}
            value={formInput.nama_kriteria}
            id="nama_kriteria"
            type="text"
            name="nama_kriteria"
            className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
            placeholder="e.g. Nama Kriteria"
            required
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="kode_kriteria"
            className="text-gray-600 font-semibold"
          >
            Kode Kriteria
          </label>
          <select
            onChange={handleChange}
            defaultValue={formInput.kode_kriteria}
            name="kode_kriteria"
            id="kode_kriteria"
            className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
          >
            <option value="">-- Pilih --</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
            <option value="C4">C4</option>
            <option value="C5">C5</option>
          </select>
        </div>
        <div className="mt-2">
          <label htmlFor="bobot" className="text-gray-600 font-semibold">
            Bobot
          </label>
          <input
            onChange={handleChange}
            value={formInput.bobot}
            id="bobot"
            type="number"
            name="bobot"
            className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
            placeholder="e.g. 1.75"
            required
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="tipe_kriteria"
            className="text-gray-600 font-semibold"
          >
            Tipe Kriteria
          </label>
          <select
            onChange={handleChange}
            name="tipe_kriteria"
            id="tipe_kriteria"
            defaultValue={formInput.tipe_kriteria}
            className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
          >
            <option value="">-- Pilih --</option>
            <option value="Benefit">Benefit</option>
            <option value="Cost">Cost</option>
          </select>
        </div>
        <div className="md:flex gap-2 justify-center items-center md:gap-0 md:modal-action">
          <div>
            <button
              disabled={loadDelete ? true : false}
              type="button"
              onClick={handleDelete}
              htmlFor="form-kriteria"
              className={`${
                loadDelete
                  ? "bg-red-700 hover:bg-red-800"
                  : "bg-red-600 hover:bg-red-700"
              } w-full mt-2 md:mt-0 text-sm duration-300 ease-in-out px-10 py-2 rounded-md text-white`}
            >
              {loadDelete ? (
                <svg
                  role="status"
                  className="inline w-3 h-3 mr-1 text-white animate-spin mb-0.5"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <i className="fa fa-trash mr-1 hidden md:inline-block"></i>
              )}
              Delete
            </button>
          </div>
          <div>
            <button
              type="button"
              htmlFor="form-kriteria"
              onClick={() => document.getElementById("form-kriteria").click()}
              className="w-full mt-2 md:mt-0 text-sm bg-gray-500 cursor-pointer hover:bg-gray-600 duration-300 ease-in-out px-10 py-2 rounded-md text-white"
            >
              Tutup
            </button>
          </div>
          <div>
            <button
              disabled={loadSubmit ? true : false}
              type="submit"
              onClick={handleSubmit}
              htmlFor="form-kriteria"
              className={`${
                loadSubmit
                  ? " bg-yellow-700 hover:bg-yellow-800"
                  : " bg-yellow-600 hover:bg-yellow-700"
              } w-full mt-2 md:mt-0 text-sm duration-300 ease-in-out px-10 py-2 rounded-md text-white`}
            >
              {loadSubmit && (
                <svg
                  role="status"
                  className="inline w-3 h-3 mr-1 text-white animate-spin mb-0.5"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              Edit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
