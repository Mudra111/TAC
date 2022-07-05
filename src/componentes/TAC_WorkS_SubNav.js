import React, { useRef } from "react";

function TAC_WorkS_SubNav() {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  const scroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offserTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div>
        <button
          onClick={() => {
            scroll(one);
          }}
        >
          1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            scroll(two);
          }}
        >
          2
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            scroll(three);
          }}
        >
          3
        </button>
      </div>
    </div>
  );
}

export default TAC_WorkS_SubNav;
