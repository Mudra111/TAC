import React from "react";
import "./Home_Page.css";
import Comp3 from "./Home_Comp3";
import Comp1 from "./Home_Comp1";
import Comp5 from "./Home_Comp5";
import Header from "./HeaderMain";
import TAC_C_c1 from "./TAC_Community_comp1";
import TAC_Community_Comp2 from "./TAC_Community_Comp2";
import TAC_Community_Comp3 from "./TAC_Community_Comp3";

export default function Home_Page() {
  return (
    <div>
      <div className="HomeMainClass">
        <div>
          <Header />
          <TAC_C_c1 />
          <Comp3 />
          <Comp1 />
          <Comp5 />
          <TAC_Community_Comp2 />
          <TAC_Community_Comp3 />
        </div>
      </div>
    </div>
  );
}
