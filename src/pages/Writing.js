import React from "react";
import { Link } from "react-router-dom";

function Writing() {
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
      <div className="text-gold font-bold text-6xl">WRITING</div>
      <div className="text-white font-bold text-2xl">
      In this world of abbreviations if your heart still flutters at the site of a novel that you are yet to discover, if the smell of new books brings you joy, if the taste of your coffee is incomplete without a book in your hand and if the sound of a shakespearean reference makes you smile, then you are at the right place.We through this challenge would like to encourage and embrace your talents, whether it’s a short story or poetry let your work blow your peers mind.
            </div>
      <div className="flex gap-10">
      <a href="https://forms.gle/h7Nxq2mdRJ4gMsXM9"
              className="bg-gold text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Submit Here
            </a>
            <a href="https://drive.google.com/file/d/1o__0txD-ofWjeswIIWvNtsmm8MnMYWWf/view?usp=drive_link"
              className="bg-gold text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Theme & Guidelines
            </a>
      </div>
    </div>
    <div className="w-4/12 h-1/2 pt-24">
      <img src="/assets/Challenges/writing.svg" alt="writing" className="w-full" />
    </div>
  </div>
</div>
);
}

export default Writing;
