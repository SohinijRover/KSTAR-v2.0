import React from "react";
import { Link } from "react-router-dom";

function Painting() {
  return (
    <div className="bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] w-full h-screen flex flex-col px-20 pt-5">
  <div className="flex justify-between">
    <img
      src="/assets/Challenges/main-logo.svg"
      alt="challenge logo"
      className="w-96"
    />
    <div className="flex items-start pt-5 gap-10">
      <Link to="/" className="flex items-center gap-3 text-gold font-bold text-2xl">
        <img src="/assets/Challenges/home.svg" alt="home icon" />
        Home
      </Link>
      <a className="flex items-center gap-3 text-gold font-bold text-2xl" href="mailto:studentsupport@kiit.ac.in?subject=Enquiry - KSTAR">
        <img src="/assets/Challenges/chat.svg" alt="chat icon" />
        Contact Us
      </a>
    </div>
  </div>

  <div className="h-full flex justify-between">
    <div className="w-6/12 h-full flex flex-col justify-center gap-10">
      <div className="text-gold font-bold text-6xl">PAINTING</div>
      <div className="text-white font-bold text-2xl">
      Art, if one must say, is a reflection of your beliefs, it is the expression of the way you perceive the world to be , a mere spitting image of your soul. There’s no such thing as a good painter but if your art makes people wonder about your perception of the world then you are indeed a commendable painter. So grab this opportunity as you grab that brush of yours and paint the canvas to showcase your unparalleled talent.
            </div>
      <div className="flex gap-10">
        <a
          href="#"
          className="bg-gold text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
        >
          Submit Here
        </a>
        <a
          href="#"
          className="bg-white text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-white hover:bg-inherit hover:text-white"
        >
          Theme & Guidelines
        </a>
      </div>
    </div>
    <div className="w-1/3 h-1/2">
      <img src="/assets/Challenges/painting.svg" alt="painting" className="w-full" />
    </div>
  </div>
</div>
);
}

export default Painting;
