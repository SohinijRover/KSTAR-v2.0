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
          <Link
            to="/"
            className="flex items-center gap-3 text-gold font-bold text-2xl"
          >
            <img src="/assets/Challenges/home.svg" alt="home icon" />
            Home
          </Link>
          <a
            className="flex items-center gap-3 text-gold font-bold text-2xl"
            href="mailto:studentsupport@kiit.ac.in?subject=Enquiry - KSTAR"
          >
            <img src="/assets/Challenges/chat.svg" alt="chat icon" />
            Contact Us
          </a>
        </div>
      </div>

      <div className="h-full flex items-center justify-between">
        <div className="w-6/12 h-full flex flex-col justify-center gap-10">
          <div className="text-gold font-bold text-6xl">ACTING</div>
          <div className="text-white font-bold text-2xl">
            Aren't we all movie buffs? It's like our go-to thing for
            entertainment.When we see a movie with a character we like, we want
            to be that character as well. A director brings the stories to life,
            while an actor brings the characters to life. Acting is not just
            playing a part- it is so much more than that. It's about telling a
            story and expressing your emotions through a character. The world is
            your stage, be the main character of your life. It's showtime, bring
            out the actor in you and exhibit your talent in acting.
          </div>
          <div className="flex gap-10">
          <a href="https://forms.gle/xW7mwgTh1Bvkcot88"
              className="bg-gold text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Submit Here
            </a>
            <a href="https://drive.google.com/file/d/1-V07b0ZFeow53fOugadS1IbtVnGHIfuZ/view?usp=sharing"
              className="bg-gold text-red-main font-bold text-2xl px-7 py-4 rounded-lg cursor-pointer border-2 border-gold hover:bg-inherit hover:text-gold"
              target="_blank" rel="noreferrer">
              Theme & Guidelines
            </a>
          </div>
        </div>
        <div className="w-5/12 h-3/4">
          <img
            src="/assets/Challenges/acting.svg"
            alt="acting"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Acting;
