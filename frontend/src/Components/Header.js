import React from "react";
import headerImage from "../Images/bg.png";
import untanImage from "../Images/untan.png";
import untanSVGImage from "../Images/untan.svg";
export const Header = () => {
  return (
    <>
      <div
        className="w-full gap-2 pl-10 flex justify-start items-center "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundImage: `url(${headerImage})`,
          height: "18vh",
        }}
      >
        <img src={untanImage} width={100} />

        <div className="space-y-2">
          <h1 className="text-center font-bold text-xl md:text-4xl text-white drop-shadow-lg shadow-black">
            SPK BIDIKMISI UNTAN
          </h1>
          <p className="text-slate-500 drop-shadow-sm shadow-white">
            Cetak Laporan
          </p>
        </div>
      </div>
    </>
  );
};
