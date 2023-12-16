import React from "react";
import { Link } from "react-router-dom";

function Dance() {
  return (<div className="bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] w-full h-screen flex flex-col px-20 pt-5">
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

  <div className="h-full flex  items-center justify-between">
    <div className="w-6/12 h-full flex flex-col justify-center gap-10">
      <div className="text-gold font-bold text-6xl">DANCE</div>
      <div className="text-white font-bold text-2xl">
      “Why walk when you can dance?” We can't always choose the music that life plays for us but we can choose how we dance to it. The world is full of rhythms and beats if we listen closely. If you dance like you are the only one watching and feel the rhythm of the music in your soul as you dance to it, then this 72 hour challenge is all you need to showcase your talent.
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
    <div className="w-4/12 h-10/12 p-10">
      <img src="/assets/Challenges/dance.svg" alt="dancing" className="w-full" />
    </div>
  </div>
</div>
);
}

export default Dance;
