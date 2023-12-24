import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const targetDate = new Date("December 25, 2023 00:00:00");
    const difference = targetDate - currentDate;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days: formatTime(days),
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds),
      };
    } else {
      // If the target date has passed
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div
      className="overflow-hidden bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] h-screen w-full flex flex-col fixed top-0"
      style={{ zIndex: "-1" }}
    >
      {/* bg particles */}
      <div
        className="w-full h-full flex absolute left-0 top-0"
        style={{ zIndex: "-1" }}
      >
        <img
          src="/assets/Frame.png"
          alt="bg paricles"
          className="w-1/2 opacity-60"
        />
        <img
          src="/assets/Frame.png"
          alt="bg paricles"
          className="w-1/2 opacity-60"
        />
      </div>
      <header className="w-full flex items-center justify-between p-2 md:p-5">
        <div className="flex gap-2">
          <a href="https://kiit.ac.in/">
            <img
              src="/assets/Home/kiit_icon.svg"
              alt="KIIT"
              className="w-12 md:w-20"
            />
          </a>
          <a href="https://ksac.kiit.ac.in/">
            <img
              src="/assets/Home/ksac_icon.png"
              alt="KSAC"
              className="w-12 md:w-20"
            />
          </a>
        </div>
        <div className="flex items-center gap-5 md:gap-10">
          {/* <Link
          href="#Hero" passHref
            className="font-bold text-red-main px-2 py-1 md:py-3 md:px-2 bg-white rounded-xl border-4 border-gold hover:text-white hover:bg-red-main text-sm md:text-xl"
          >
            Submit Now!
          </Link> */}
          <a href="mailto:studentsupport@kiit.ac.in?subject=Enquiry - KSTAR">
            <img
              src="/assets/Home/chat_icon.svg"
              alt="mailto"
              className="w-12"
            />
          </a>
        </div>
      </header>

      <div className="flex flex-col md:flex-row mt-10 w-full">
        {/* KSTAR MAIN LOGO 3RD EDITION */}
        <div className="flex items-center justify-start">
          {/* <img src="/assets/Home/logo-main.png" alt="kstar main" className="2xl:w-10/12" /> */}
          <img src="/assets/Home/logo-main.png" alt="kstar main" className="2xl:w-10/12" />
        </div>
        {/* PRIZE POOL STAMP */}
        <div className="flex items-center justify-center w-full">
          <img
            src="/assets/Home/prize_pool.png"
            alt="prize pool stamp"
            className="w-44 xl:w-80 2xl:w-72"
          />
        </div>
      </div>

      {/* DATE */}
      <div className="w-full flex justify-center text-white font-bold text-4xl md:text-6xl mt-10 md:mt-20 2xl:mt-10">
        25<sup className="text-xl">th</sup>-27<sup className="text-xl">th</sup>
        DEC 2023
      </div>

      {/* TIMER */}
      {/* <p className="flex items-center justify-center text-white gap-7 md:gap-16 xl:gap-24 mt-10 md:mt-20 2xl:mt-10">
        <span className="flex flex-col items-center gap-2 2xl:gap-5">
          <span
            className="flex items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#C9A348_0%,#C9A348_25%,#C7A147_50%,#CC9331_75%,#955E1E_100%)] w-16 h-16 2xl:w-20 2xl:h-20 2xl:text-3xl rounded-lg font-bold text-2xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <span className=" absolute bg-red-main w-12 h-12 2xl:w-16 2xl:h-16 rounded-lg"></span>
            <span style={{ transform: "rotate(-45deg)" }}>{timeLeft.days}</span>
          </span>
          <span className="text-xl">Days</span>
        </span>

        <span className="flex flex-col items-center gap-2 2xl:gap-5">
          <span
            className="flex items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#C9A348_0%,#C9A348_25%,#C7A147_50%,#CC9331_75%,#955E1E_100%)] w-16 h-16 rounded-lg font-bold text-2xl 2xl:w-20 2xl:h-20 2xl:text-3xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <span className=" absolute bg-red-main w-12 h-12 2xl:w-16 2xl:h-16 rounded-lg"></span>
            <span style={{ transform: "rotate(-45deg)" }}>
              {timeLeft.hours}
            </span>
          </span>
          <span className="text-xl">Hours</span>
        </span>

        <span className="flex flex-col items-center gap-2 2xl:gap-5">
          <span
            className="flex items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#C9A348_0%,#C9A348_25%,#C7A147_50%,#CC9331_75%,#955E1E_100%)] w-16 h-16 rounded-lg font-bold text-2xl 2xl:w-20 2xl:h-20 2xl:text-3xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <span className=" absolute bg-red-main w-12 h-12 2xl:w-16 2xl:h-16 rounded-lg"></span>
            <span style={{ transform: "rotate(-45deg)" }}>
              {timeLeft.minutes}
            </span>
          </span>
          <span className="text-xl">Minutes</span>
        </span>

        <span className="flex flex-col items-center gap-2 2xl:gap-5">
          <span
            className="flex items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#C9A348_0%,#C9A348_25%,#C7A147_50%,#CC9331_75%,#955E1E_100%)] w-16 h-16 rounded-lg font-bold text-2xl 2xl:w-20 2xl:h-20 2xl:text-3xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <span className=" absolute bg-red-main w-12 h-12 2xl:w-16 2xl:h-16 rounded-lg"></span>
            <span style={{ transform: "rotate(-45deg)" }}>
              {timeLeft.seconds}
            </span>
          </span>
          <span className="text-xl">Seconds</span>
        </span>
      </p> */}
    </div>
  );
}

export default Header;
