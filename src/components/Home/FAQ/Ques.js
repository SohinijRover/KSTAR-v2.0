import React, { useState } from "react";

function Ques({ f }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="flex gap-5 justify-between text-white text-3xl">
      <div className="flex flex-col gap-5">
        <div>{f.ques}</div>
        <div
          className={
            isHidden
              ? "border-4 border-gold rounded-xl p-5 hidden"
              : "border-4 border-gold rounded-xl p-5 block"
          }
        >
          {f.ans}
        </div>
      </div>
      <div>
        <img
          src={
            isHidden
              ? "/assets/Home/plus_icon.png"
              : "/assets/Home/minus_icon.png"
          }
          alt="add icon"
          className="w-10 cursor-pointer"
          onClick={() => (isHidden ? setIsHidden(false) : setIsHidden(true))}
        />
      </div>
    </div>
  );
}

export default Ques;
