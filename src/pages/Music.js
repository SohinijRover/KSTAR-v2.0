import React from "react";
import { Link } from "react-router-dom";

function Music() {
  return (
    <div className="bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] w-full min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 pt-5">
      <div className="flex flex-col sm:flex-row items-center justify-between lg:p-5">
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <img
            src="/assets/Challenges/main-logo.svg"
            alt="challenge logo"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:p-5 gap-5">
          <Link to="/" className="flex items-center gap-3 text-gold font-bold text-xl sm:text-2xl">
            <img src="/assets/Challenges/home.svg" alt="home icon" />
            <div>Home</div>
          </Link>
          <a className="flex items-center gap-3 text-gold font-bold text-xl sm:text-2xl" href="mailto:studentsupport@kiit.ac.in?subject=Enquiry - KSTAR">
            <img src="/assets/Challenges/chat.svg" alt="chat icon" />
            <div>Contact Us</div>
          </a>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-5">
        <div className="w-full lg:w-6/12 h-full flex flex-col justify-center gap-5 text-center sm:text-left">
          <div className="text-gold font-bold text-4xl md:text-6xl lg:p-5">
            MUSIC
          </div>
          <div className="text-white font-bold text-lg md:text-2xl lg:text-xl lg:p-5">

            To play a wrong note is insignificant. To play without passion is inexcusable. - Beethoven If you are a musician and feel like the mundane routine has toned down your passion and love for music, then hold your fire no more. The stage is all set for you to mesmerize everyone with your euphonious voice. To be the best instrumentalist or vocalist among your peers. Let this wonderful event encourage you to sustain your passion, love, and proclivity for music.
          </div>
          <div className="flex flex-col sm:flex-row gap-5 lg:p-5">
            <a href="https://forms.gle/vXbdUriYkmxKgj1w5"
              className="bg-gold text-red-main font-bold text-xl sm:text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Submit Here
            </a>
            <a href="https://drive.google.com/file/d/1_q0zPk4927WVNQ2lDClQtKntAvZuAHDw/view?usp=drive_link"
              className="bg-gold text-red-main font-bold text-xl sm:text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Theme & Guidelines
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-40 sm:w-30 h-50 lg:pr-10">
          <img src="/assets/Challenges/music.svg" alt="music" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Music;
