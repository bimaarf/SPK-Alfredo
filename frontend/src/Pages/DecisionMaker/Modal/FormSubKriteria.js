import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const FormSubKriteria = ({ getKriteria }) => {
  const [formList, setFormList] = useState([
    {
      kriteria_id: "",
      nama_sub_kriteria: "",
      nilai: "",
    },
  ]);
  const addForm = (e) => {
    e.preventDefault();
    setFormList([
      ...formList,
      {
        kriteria_id: "",
        nama_sub_kriteria: "",
        nilai: "",
      },
    ]);
  };
  const delForm = (index) => {
    const list = [...formList];
    list.splice(index, 1);
    setFormList(list);
  };
  const handleChange = (e, index) => {
    e.persist();
    const { name, value } = e.target;
    const list = [...formList];
    list[index][name] = value;
    setFormList(list);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = formList;
    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios.post(`api/sub-kriteria/store`, { items: data }).then(
        (res) => {
          document.getElementById("form-sub-kriteria").click();
          if (res.data.message === "Update!")
            return toast.success("Berhasil diubah");
          if (res.data.message === "Added!")
            setFormList([
              { kriteria_id: "", nama_sub_kriteria: "", nilai: "" },
            ]);
          return toast.success("Berhasil ditambah");
        },
        function (err) {
          console.log(data);
          return toast.warning("Pastikan data terisi dengan benar!");
        }
      );
    });
  };
  return (
    <form>
      {formList.slice(0, formList.length).map((x, i) => (
        <div key={i} className="mt-4 border p-2 rounded-xl">
          <div className="mt-2">
            <label
              htmlFor="nama_kriteria"
              className="text-gray-600 font-semibold"
            >
              Nama Kriteria
            </label>
            <select
              onChange={(e) => handleChange(e, i)}
              name="kriteria_id"
              id="nama_kriteria"
              className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
            >
              <option value="">-- Pilih --</option>
              {getKriteria &&
                getKriteria.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.kode_kriteria} ({item.nama_kriteria})
                  </option>
                ))}
            </select>
          </div>
          <div className="mt-2">
            <label
              htmlFor="nama_sub_kriteria"
              className="text-gray-600 font-semibold"
            >
              Nama Sub Kriteria
            </label>
            <input
              onChange={(e) => handleChange(e, i)}
              value={x.nama_sub_kriteria}
              id="nama_sub_kriteria"
              type="text"
              name="nama_sub_kriteria"
              className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
              placeholder="e.g. Nama Sub Kriteria"
              required
            />
          </div>
          <div className="mt-2">
            <label htmlFor="nilai" className="text-gray-600 font-semibold">
              Nilai
            </label>
            <input
              onChange={(e) => handleChange(e, i)}
              value={x.nilai}
              id="nilai"
              type="number"
              name="nilai"
              className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
              placeholder="e.g. 3"
              required
            />
          </div>
          {i > 0 && (
            <button
              type="button"
              onClick={() => delForm(i)}
              className="text-sm bg-red-500 hover:bg-red-600 duration-300 ease-in-out text-start rounded-md md:w-1/4 px-10 py-2 mt-10 text-white"
            >
              <i className="fa fa-trash mr-2"></i>
              Hapus
            </button>
          )}
        </div>
      ))}

      <div className=" flex justify-end items-center gap-2 mt-4">
        <button
          type="button"
          onClick={addForm}
          className="text-sm bg-cyan-600 cursor-pointer hover:bg-cyan-700 duration-300 ease-in-out px-10 py-2 rounded-md text-white"
        >
          <i className="fa fa-plus mr-2"></i>
          Tambah
        </button>
        <button
          onClick={handleSubmit}
          type="button"
          className="text-sm bg-yellow-600 cursor-pointer hover:bg-yellow-700 duration-300 ease-in-out px-10 py-2 rounded-md text-white"
        >
          Simpan
        </button>
      </div>
    </form>
  );
};
