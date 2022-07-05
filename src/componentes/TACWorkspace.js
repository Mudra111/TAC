import React, { useRef } from "react";
import TACworkspaceNav from "./TACworkspaceNav";
import TACWorkScomp1 from "./TAC_WorkS_comp1";
import TACWorkScomp3 from "./TAC_WorkS_comp3";
import TACWorkScomp5 from "./TAC_WorkS_comp5";
import TACWorkScomp6 from "./TAC_WorkS_comp6";
import TACWorkScomp7 from "./TAC_WorkS_comp7";
import TACWSComp2 from "./TAC_WS_Comp2";
import TACWSComp4 from "./TAC_WS_Comp4";

const scroll = (elementRef) => {
  window.scrollTo(0, elementRef.current.offsetTop);
};
export default function TACWorkspace() {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  const scrollOne = () => scroll(one);
  const scroll2 = () => scroll(two);
  const scroll3 = () => scroll(three);

  return (
    <div>
      <TACworkspaceNav />
      <TACWorkScomp1 />
      <>
        <div>
          <div>
            <button onClick={scrollOne}>1</button>
          </div>
          <div>
            <button onClick={scroll2}>2</button>
          </div>
          <div>
            <button onClick={scroll3}>3</button>
          </div>
        </div>

        <TACWSComp2 ref1={one} />
        <TACWorkScomp3 ref2={two} />
        <TACWSComp4 ref3={three} />
        <TACWorkScomp5 />
        <TACWorkScomp6 />
        <TACWorkScomp7 />
      </>
    </div>
  );
}
