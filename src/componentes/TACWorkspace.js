import React from "react";
import TACworkspaceNav from "./TACworkspaceNav";
import TAC_WS_Comp2 from "./TAC_WS_Comp2";
import TAC_WS_Comp4 from "./TAC_WS_Comp4";

export default function TACWorkspace() {
  return (
    <div>
      <TACworkspaceNav />
      <TAC_WS_Comp2 />
      <TAC_WS_Comp4 />
    </div>
  );
}
