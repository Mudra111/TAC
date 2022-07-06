import React, { useRef } from "react";
import TACworkspaceNav from "./TACworkspaceNav";
import TACWorkScomp1 from "./TAC_WorkS_comp1";
import TACWorkScomp3 from "./TAC_WorkS_comp3";
import TACWorkScomp5 from "./TAC_WorkS_comp5";
import TACWorkScomp6 from "./TAC_WorkS_comp6";
import TACWorkScomp7 from "./TAC_WorkS_comp7";
import TACWSComp2 from "./TAC_WS_Comp2";
import TACWSComp4 from "./TAC_WS_Comp4";
import "./Tac_WorkS_SubNav.css";

export default function TACWorkspace() {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const five = useRef(null);
  const six = useRef(null);

  const scroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scroll1 = () => scroll(one);
  const scroll2 = () => scroll(two);
  const scroll3 = () => scroll(three);
  const scroll4 = () => scroll(four);
  const scroll5 = () => scroll(five);
  const scroll6 = () => scroll(six);

  return (
    <div>
      <TACworkspaceNav />
      <TACWorkScomp1 />
      <>
        <div className="WS-MainSubNav">
          <div>
            <button onClick={scroll1}>One</button>
          </div>
          <div>
            <button onClick={scroll2}>Two</button>
          </div>
          <div>
            <button onClick={scroll3}>Three</button>
          </div>
          <div>
            <button onClick={scroll4}>Four</button>
          </div>
          <div>
            <button onClick={scroll5}>Five</button>
          </div>
          <div>
            <button onClick={scroll6}>Six</button>
          </div>
        </div>
      </>
      <TACWSComp2 forwardedRef={one} />
      <TACWorkScomp3 forwardedRef={two} />
      <TACWSComp4 forwardedRef={three} />
      <TACWorkScomp5 forwardedRef={four} />
      <TACWorkScomp6 forwardedRef={five} />
      <TACWorkScomp7 forwardedRef={six} />
    </div>
  );
}
