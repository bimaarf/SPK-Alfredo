import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
export const TableMahasiswa = ({
  getKriteria,
  getSubKriteria,
  getMahasiswa,
  getMhsKriteria,
}) => {
  const [subValue, setSubValue] = useState({
    mhs_id: "",
    nama_sub_kriteria: "",
  });
  const handleOption = (e) => {
    e.persist();
    setSubValue({ ...subValue, [e.target.name]: e.target.value });
    handleUpdate();
  };
  const handleUpdate = async() => {
    console.log(subValue);
    const data = {
      mhs_id: subValue.mhs_id,
      nama_sub_kriteria: subValue.nama_sub_kriteria,
    };
    await axios.get("sanctum/csrf-cookie").then(() => {
      axios.post("api/mahasiswa/kriteria/update", data).then((res) => {
        if (res.data.status === 200) return toast.success("berhasil diubah");
      });
    });
  };
  return (
    <>
      <h1>value sub kriteria = {subValue.nama_sub_kriteria}</h1>
      <h1>value kriteria = {subValue.nama_sub_kriteria}</h1>
      <h1>value MHS ID = {subValue.mhs_id}</h1>
      <table className="table table-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>NAMA</th>
            {getKriteria &&
              getKriteria.map((item, key) => (
                <th key={key}>{item.nama_kriteria}</th>
              ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {getMahasiswa &&
            getMahasiswa.map((item, indexMhs) => (
              <tr key={indexMhs}>
                <td>{indexMhs + 1}</td>
                <td>{item.nama}</td>
                {getMhsKriteria &&
                  getMhsKriteria.map(
                    (mhsKriteria, indexKriteria) =>
                      mhsKriteria.mhs_id === item.id && (
                        <td key={indexKriteria}>
                          <input
                            id={`mhs_id${item.id}`}
                            type="text"
                            value={item.id}
                            name="mhs_id"
                            className="hidden"
                            onClick={handleOption}
                          />

                          <label
                            className="hidden"
                            htmlFor={`mhs_id${item.id}`}></label>

                          <select
                            name="nama_sub_kriteria"
                            defaultValue={mhsKriteria.nama_sub_kriteria}
                            onChange={handleOption}
                            onClick={() => {
                              document
                                .getElementById(`mhs_id${item.id}`)
                                .click();
                            }}
                            className="w-full px-1 py-3 border rounded-sm outline-none">
                            <option value="-">-- Pilih ---</option>
                            {getSubKriteria &&
                              getSubKriteria.map(
                                (subKriteria, indexSub) =>
                                  subKriteria.kriteria_id ===
                                    mhsKriteria.kriteria_id && (
                                    <>
                                      <option
                                        value={subKriteria.nama_sub_kriteria}
                                        key={indexSub}>
                                        {subKriteria.nama_sub_kriteria}
                                      </option>
                                    </>
                                  )
                              )}
                          </select>
                        </td>
                      )
                  )}
                <td>
                  <button className="px-4 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded">
                    <i className="fa fa-pencil"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
