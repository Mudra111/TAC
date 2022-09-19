import React, { useRef } from "react";
import TACworkspaceNav from "./TACworkspaceNav";
import TACWorkScomp1 from "./TAC_WorkS_comp1";
import TACWorkScomp3 from "./TAC_WorkS_comp3";
import TACWorkScomp5 from "./TAC_WorkS_comp5";
import TACWorkScomp6 from "./TAC_WorkS_comp6";
import TACWorkScomp7 from "./TAC_WorkS_comp7";
import TACWSComp2 from "./TAC_WS_Comp2";
import TACWSComp4 from "./TAC_WS_Comp4";
import "./TAC_WorkS_SubNav.css";

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
      <div className="WS-SubNav">
        <div className="WS-MainSubNav">
          <div className="TAC_WS_scrollBtn">
            <button onClick={scroll1}>SMART TOOLS FOR SMART BUSINESSES</button>
          </div>
          <div className="TAC_WS_scrollBtn">
            <button onClick={scroll2}>POWERED BY TAC</button>
          </div>
          <div className="TAC_WS_scrollBtn">
            <button onClick={scroll3}>PRICING</button>
          </div>
          <div className="TAC_WS_scrollBtn">
            <button onClick={scroll4}>THE TAC WORKSPACE ADVANTAGE</button>
          </div>
          <div className="TAC_WS_scrollBtn">
            <button onClick={scroll5}>GET STARTED</button>
          </div>
          <div className="TAC_WS_scrollBtn">
            <button onClick={scroll6}>TAC WORKSPACE FAQs</button>
          </div>
        </div>
      </div>
      <TACWSComp2 forwardedRef={one} />
      <TACWorkScomp3 forwardedRef={two} />
      <TACWSComp4 forwardedRef={three} />
      <TACWorkScomp6 forwardedRef={four} />
      <TACWorkScomp5 forwardedRef={five} />
      <TACWorkScomp7 forwardedRef={six} />
    </div>
  );
}
