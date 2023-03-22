import React from "react";
export const TableMahasiswa = ({
  getKriteria,
  getSubKriteria,
  getMahasiswa,
  getMhsKriteria,
}) => {
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
                          <select
                            name="nama_sub_kriteria"
                            defaultValue={mhsKriteria.nama_sub_kriteria}
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
