import axios from "axios";
import React, { useEffect, useState } from "react";

export const MatrixKeputusan = () => {
  const [getKriteria, setKriteria] = useState("");
  const [getMhs, setMhs] = useState("");
  const [getMhsKriteria, setMhsKriteria] = useState("");
  const getKriteriaAPI = async () => {
    await axios.get("sanctum/csrf-cookie").then(() => {
      axios.get("/api/mahasiswa/spk/matriks-keputusan").then((res) => {
        setKriteria(res.data[0]);
      });
    });
  };
  const getMahasiswaAPI = async () => {
    await axios.get("sanctum/csrf-cookie").then(() => {
      axios.get("/api/mahasiswa/spk/matriks-keputusan").then((res) => {
        setMhs(res.data[1]);
      });
    });
  };
  const getMhsKriteriaAPI = async () => {
    await axios.get("sanctum/csrf-cookie").then(() => {
      axios.get("/api/mahasiswa/spk/matriks-keputusan").then((res) => {
        setMhsKriteria(res.data[2]);
      });
    });
  };

  useEffect(() => {
    getKriteriaAPI();
    getMahasiswaAPI();
    getMhsKriteriaAPI();
  }, []);
  return (
    <>
      <h1>Matriks Keputusan</h1>
      <div className="w-full overflow-x-scroll">
        <table className="table w-full table-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Mahasiswa</th>
              {getKriteria &&
                getKriteria.map((item, key) => (
                  <th key={key}>{item.kode_kriteria}</th>
                ))}
            </tr>
          </thead>
          {getMhs &&
            getMhs.map((item, key) => (
              <tbody key={key}>
                <tr>
                  <td>{key + 1}</td>
                  <td>{item.nama}</td>
                  {getMhsKriteria &&
                    getMhsKriteria.map(
                      (mhsKriteria, keyKriteria) =>
                        mhsKriteria.nama === item.nama && (
                          <td key={keyKriteria}>{mhsKriteria.nilai}</td>
                        )
                    )}
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
};
