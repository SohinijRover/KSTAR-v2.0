import React from "react";

function Sponcers() {
  return (
    <div className="px-16 py-20 flex flex-col gap-20">
      <h1 className="text-white text-4xl lg:text-6xl text-center font-bold">OUR SPONSORS</h1>
      <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
        <img
          src="/assets/Sponcers/sponcer1.svg"
          alt="sponcer1"
        />
        <img
          src="/assets/Sponcers/sponcer2.svg"
          alt="sponcer2"
        />
        <img
          src="/assets/Sponcers/sponcer3.svg"
          alt="sponcer3"
        />
        <img
          src="/assets/Sponcers/sponcer4.svg"
          alt="sponcer4"
        />
        <img
          src="/assets/Sponcers/sponcer5.svg"
          alt="sponcer5"
        />
      </div>
    </div>
  );
}

export default Sponcers;
