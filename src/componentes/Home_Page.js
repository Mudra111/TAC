import React from "react";
import "./Home_Page.css";
import Comp3 from "./Home_Comp3";
import Comp1 from "./Home_Comp1";
import Comp5 from "./Home_Comp5";
import Header from "./HeaderMain";
import TAC_B_c1 from "./TAC_Business_comp1";
import TAC_B_c6 from "./TAC_Business_comp6";
import TAC_B_c3 from "./TAC_Business_comp3";
import TAC_B_c2 from "./TAC_Business_comp2";
import TAC_C_c1 from "./TAC_Community_comp1";

export default function Home_Page() {
  return (
    <div>
      <div className="HomeMainClass">
        <div>
          
          <Header />
          <TAC_C_c1 />
          <Comp3 />
          <TAC_B_c2 />
          <TAC_B_c3 />
          <TAC_B_c6 />
          <Comp1 />
          <Comp5 />
        </div>
      </div>
    </div>
  );
}
