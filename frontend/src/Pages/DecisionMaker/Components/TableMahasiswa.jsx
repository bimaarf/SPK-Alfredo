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
  const handleUpdate = async () => {
    await axios.get("sanctum/csrf-cookie").then(() => {
      axios.post("api/mahasiswa/kriteria/update", subValue).then((res) => {
        if (res.data.status === 200) return toast.success("berhasil diubah");
      });
    });
  };
  return (
    <>
      <table className="table table-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>NAMA</th>
            {getKriteria &&
              getKriteria.map((item, key) => (
                <th key={key}>{item.nama_kriteria}</th>
              ))}
          </tr>
        </thead>
        {getMahasiswa &&
          getMahasiswa.map((item, indexMhs) => (
            <tbody key={indexMhs} className="text-sm">
              <tr>
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
                            onClick={handleOption}
                            onFocus={(e) => {
                              e.persist();
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
                                    <option
                                      value={subKriteria.nama_sub_kriteria}
                                      key={indexSub}>
                                      {subKriteria.nama_sub_kriteria}
                                    </option>
                                  )
                              )}
                          </select>
                        </td>
                      )
                  )}
              </tr>
            </tbody>
          ))}
      </table>
    </>
  );
};
