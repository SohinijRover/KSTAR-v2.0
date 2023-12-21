import React from "react";

import Challenges from "./Challenges/Challenges";
import FAQ from "./FAQ/FAQ";
import Sponcers from "./Sponcers";

function Hero() {
  return (
    <div
      className="w-full h-fit relative pt-96"
      style={{ marginTop: "100vh" }}
    >

      {/* TRANSITION IMAGE */}
      <div className="w-full opacity-80 absolute left-0 -top-12 sm:-top-20 lg:-top-40 2xl:-mt-32">
        <img
          src="/assets/Home/hero_transition.svg"
          alt="transition object"
          className="w-full"
        />
      </div>

      {/* CHALLENGES */}
      <div className="w-full flex flex-col gap-5 md:gap-10 -mt-72 sm:-mt-60 md:-mt-36 lg:-mt-16 2xl:mt-10">
        {/* TITLE */}
        <div className="flex items-center justify-center">
          <img
            src="/assets/Home/challenge_title.png"
            alt="challenge title"
          />
        </div>
        <div>
          <Challenges />
        </div>
        {/* REGISTER BUTTON */}
        <div className="w-full flex items-center justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScUh1eePAPzlhJtfwsPHXaxYgz8r6EVbWvYKa3hSFBKffmiuw/viewform"
            className="font-bold text-gold hover:text-red-main px-9 py-4 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] hover:bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#C9A348_20%,#F6DF76_40%,#C7A147_60%,#CC9331_80%,#955E1E_100%)] rounded-xl border-4 border-gold  text-4xl"
          >
            Register Now!
          </a>
        </div>
      </div>

      <Sponcers />

      {/* FAQ */}
      <div className="w-full flex justify-between items-center py-10 pl-16">
        {/* MAIN */}
        <div className="flex flex-col gap-10 w-10/12">
          <h1 className="text-white font-bold text-6xl">FAQ</h1>
          <FAQ />
        </div>
        {/* IMAGE */}
        <div className="hidden 2xl:block">
          <img
            src="/assets/Home/faq.svg"
            alt="faq side"
            className="w-52"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
