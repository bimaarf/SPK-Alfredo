import React from "react";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import { MatrixKeputusan } from "./Components/__MatrixKeputusan";
import { MatrixKuadrat } from "./Components/__MatrixKuadrat";

export const SPK = () => {
  return (
    <>
      <Header />
      <div className="md:container md:mx-auto pb-10 md:pt-10">
        <div className="md:flex md:columns-2 md:gap-10">
          <SidebarDecisionMaker />
          <div className="bg-white rounded-xl w-full p-3 md:p-10">
            <MatrixKeputusan />
            <MatrixKuadrat />
          </div>
        </div>
      </div>
    </>
  );
};
