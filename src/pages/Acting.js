import React from "react";
import { Link } from "react-router-dom";

function Acting() {
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
          <a className="flex items-center gap-3 text-gold font-bold text-2xl">
            <img src="/assets/Challenges/chat.svg" alt="chat icon" />
            Contact Us
          </a>
        </div>
      </div>

      <div className="h-full flex justify-between">
        <div className="w-5/12 h-full flex flex-col justify-center gap-10">
          <div className="text-gold font-bold text-6xl">ACTING</div>
          <div className="text-white font-bold text-2xl">
            Do you know the ideology behind the concept of short films “ALL TOO
            WELL(taylor’s short film)”?Is“THE HUNT” of a good short film enough
            to bond “TWO DISTANT STRANGERS”.If you think so too and see yourself
            as the next Anurag Kashyap or Tarantino.
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
        <div className="w-6/12 h-3/4">
          <img src="/assets/Challenges/acting.svg" alt="acting" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Acting;
