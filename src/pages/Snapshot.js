import React from "react";
import { Link } from "react-router-dom";

function Snapshot() {
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
            SNAPSHOT
          </div>
          <div className="text-white font-bold text-lg md:text-2xl lg:text-xl lg:p-5">

          “Photography is the story everyone fails to put into words.” You and your camera precious moments that vanish before you even realise. Do you think you have what it takes to turn a fleeting moment into a precious memory?If yes then we have an astounding opportunity to showcase your talent and make others see the world through your lens.
            </div>
          <div className="flex flex-col sm:flex-row gap-5 lg:p-5">
            <a href="https://forms.gle/vXbdUriYkmxKgj1w5"
              className="bg-gold text-red-main font-bold text-xl sm:text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Submit Here
            </a>
            <a href="https://drive.google.com/file/d/1ltkxfFrdM1RAXYTUx5e0XBltuojAX5it/view?usp=drive_link"
              className="bg-gold text-red-main font-bold text-xl sm:text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Theme & Guidelines
            </a>
          </div>
        </div>
        <div className="w-3/12 h-3/4 sm:w-4/12">
          <img
            src="/assets/Challenges/snapshot.svg"
            alt="snapshot"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Snapshot;
