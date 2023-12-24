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

  <div className="h-full flex justify-between">
    <div className="w-6/12 h-full flex flex-col justify-center gap-10">
      <div className="text-gold font-bold text-6xl">DANCE</div>
      <div className="text-white font-bold text-2xl">
      “Why walk when you can dance?” We can't always choose the music that life plays for us but we can choose how we dance to it. The world is full of rhythms and beats if we listen closely. If you dance like you are the only one watching and feel the rhythm of the music in your soul as you dance to it, then this 72 hour challenge is all you need to showcase your talent.
      </div>
      <div className="flex gap-10">
      <a href="https://forms.gle/vXbdUriYkmxKgj1w5"
              className="bg-gold text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Submit Here
            </a>
            <a href="https://drive.google.com/file/d/1j7kJW1ij4Meqoox3F7sideIlTQrZPZSO/view?usp=drive_link"
              className="bg-gold text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Theme & Guidelines
            </a>
      </div>
    </div>
    <div className="w-1/4">
      <img src="/assets/Challenges/dance.svg" alt="dancing" className="w-full" />
    </div>
  </div>
</div>
);
}

export default Dance;
