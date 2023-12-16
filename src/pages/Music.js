import React from "react";
import { Link } from "react-router-dom";

function Music() {
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

  <div className="h-full flex items-center justify-between">
    <div className="w-6/12 h-full flex flex-col justify-center gap-10">
      <div className="text-gold font-bold text-6xl">MUSIC</div>
      <div className="text-white font-bold text-2xl">
      “To play a wrong note is insignificant .To play without passion is inexcusable”-Beethovan If you are a musician and feel like the mundane routine has toned down your passion and love for music, then hold your fire no more.The stage is all set for you to mesmerize everyone with your euphonious voice. To be the best instrumentalist or vocalist among your peers. Let this wonderful event encourage you to sustain your passion , love and proclivity for music.
            </div>
      <div className="flex gap-10">
      <Link
              to="/registration-closed"
              className="bg-gold text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
            >
              Submit Here
            </Link>
            <Link
            to="/theme"
              href="#"
              className="bg-white text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-white hover:bg-inherit hover:text-white"
            >
              Theme & Guidelines
            </Link>
      </div>
    </div>
    <div className="w-1/5 h-1/7 pr-16">
      <img src="/assets/Challenges/music.svg" alt="music" className="w-full" />
    </div>
  </div>
</div>
);
}

export default Music;
