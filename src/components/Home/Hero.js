import React from "react";

import Challenges from "./Challenges/Challenges";
import FAQ from "./FAQ/FAQ";

function Hero() {
  return (
    <div
      className="w-full h-fit relative pt-96"
      style={{ marginTop: "100svh" }}
    >
      {/* BG PARTICLES */}
      {/* <img
        src="/assets/bg.svg"
        alt="bg particles"
        className="absolute top-0 w-full"
      /> */}

      {/* TRANSITION IMAGE */}
      <img
        src="/assets/Home/hero_transition.svg"
        alt="transition object"
        className="w-full opacity-80 absolute -top-60"
      />

      {/* CHALLENGES */}
      <div className="w-full flex flex-col gap-20 mt-20">
        {/* TITLE */}
        <div className="flex items-center justify-center">
          <img
            src="/assets/Home/challenge_title.png"
            alt="challenge title"
            className="w-4/12"
          />
        </div>
        {/*  */}
        <div className="pt-20">
          <Challenges />
        </div>
        {/* REGISTER BUTTON */}
        <div className="w-full flex items-center justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScUh1eePAPzlhJtfwsPHXaxYgz8r6EVbWvYKa3hSFBKffmiuw/viewform"
            className="font-bold text-gold px-9 py-4 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] rounded-xl border-4 border-gold  text-4xl"
          >
            Register Now!
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full flex justify-between items-center py-10 pl-16">
        {/* MAIN */}
        <div className="flex flex-col gap-20 w-10/12">
          <h1 className="text-white font-bold text-6xl">FAQ</h1>
          <FAQ />
        </div>
        {/* IMAGE */}
        <div>
          <img src="/assets/Home/faq.svg" alt="faq side image" className="w-52" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
