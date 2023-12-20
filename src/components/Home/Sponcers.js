import React from "react";

function Sponcers() {
  return (
    <div className="px-16 py-20 flex flex-col gap-20">
      <h1 className="text-white text-6xl font-bold">OUR SPONCERS</h1>
      <div className="flex flex-wrap justify-center gap-24">
        <img
          src="/assets/Sponcers/sponcer1.svg"
          alt="sponcer1"
          className="w-96"
        />
        <img
          src="/assets/Sponcers/sponcer2.svg"
          alt="sponcer2"
          className="w-96"
        />
        <img
          src="/assets/Sponcers/sponcer3.svg"
          alt="sponcer3"
          className="w-96"
        />
        <img
          src="/assets/Sponcers/sponcer4.svg"
          alt="sponcer4"
          className="w-96"
        />
        <img
          src="/assets/Sponcers/sponcer5.svg"
          alt="sponcer5"
          className="w-96"
        />
      </div>
    </div>
  );
}

export default Sponcers;
