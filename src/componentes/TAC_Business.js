import React from "react";
import TACBusComp4 from "./TACBusComp4";
import TACBusComp5 from "./TACBusComp5";
import TACBusComp7 from "./TACBusComp7";
import TAC_Business_comp1 from "./TAC_Business_comp1";
import TAC_B_c2 from "./TAC_Business_comp2";
import TAC_B_c3 from "./TAC_Business_comp3";
import TAC_Business_comp6 from "./TAC_Business_comp6";

export default function TAC_Business() {
  return (
    <div>
      <TAC_Business_comp1 />
      <TAC_B_c2 />
      <TACBusComp4 />
      <TAC_B_c3 />
      <TACBusComp5 />
      <TAC_Business_comp6 />
      <TACBusComp7 />
    </div>
  );
}
