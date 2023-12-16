import React, { useState, useEffect } from "react";

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
  }, [timeLeft]);

  return (
    <div
      className="bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] h-screen w-full flex flex-col fixed top-0"
      style={{ zIndex: "-1" }}
    >
      <img
        src="/assets/Frame.png"
        alt="bg paricles"
        className="absolute opacity-60"
        style={{ zIndex: "-1" }}
      />
      <img
        src="/assets/Frame.png"
        alt="bg paricles"
        className="absolute right-0 opacity-60"
        style={{ zIndex: "-1" }}
      />
      <header className="w-full flex items-center justify-between px-10 py-5">
        <div className="flex gap-10">
          <a href="#">
            <img src="/assets/Home/kiit_icon.svg" alt="KIIT" />
          </a>
          <a href="#">
            <img src="/assets/Home/ksac_icon.svg" alt="KSAC" />
          </a>
        </div>
        <div className="flex items-center gap-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScUh1eePAPzlhJtfwsPHXaxYgz8r6EVbWvYKa3hSFBKffmiuw/viewform"
            className="font-bold text-red-main px-5 py-3 bg-white rounded-xl border-4 border-gold hover:text-white hover:bg-red-main text-xl"
          >
            Register Now!
          </a>
          <a href="#">
            <img src="/assets/Home/chat_icon.svg" alt="mailto" />
          </a>
        </div>
      </header>

      <div className="flex py-5 px-28">
        {/* KSTAR MAIN LOGO 3RD EDITION */}
        <div className="flex items-center justify-start">
          <img
            src="/assets/Home/logo-main.png"
            alt="kstar main"
            className="w-10/12"
          />
        </div>
        {/* PRIZE POOL STAMP */}
        <div className="w-1/2 flex items-center justify-start">
          <img
            src="/assets/Home/prize_pool.png"
            alt="prize pool stamp"
            className="w-8/12"
          />
        </div>
      </div>

      {/* DATE */}
      <div className="w-full flex justify-center text-white font-bold mt-5 text-6xl">
        25<sup className="text-xl">th</sup>-27<sup className="text-xl">th</sup>
        DEC 2023
      </div>

      {/* TIMER */}
      <p className="flex items-center justify-center gap-20 mt-10 text-white">
        <span className="flex flex-col items-center gap-5">
          <span
            className="flex items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#C9A348_0%,#C9A348_25%,#C7A147_50%,#CC9331_75%,#955E1E_100%)] w-20 h-20 rounded-lg font-bold text-4xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <span className=" absolute bg-red-main w-16 h-16 rounded-lg"></span>
            <span style={{ transform: "rotate(-45deg)" }}>{timeLeft.days}</span>
          </span>
          <span className="text-xl">Days</span>
        </span>

        <span className="flex flex-col items-center gap-5">
          <span
            className="flex items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#C9A348_0%,#C9A348_25%,#C7A147_50%,#CC9331_75%,#955E1E_100%)] w-20 h-20 rounded-lg font-bold text-4xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <span className=" absolute bg-red-main w-16 h-16 rounded-lg"></span>
            <span style={{ transform: "rotate(-45deg)" }}>
              {timeLeft.hours}
            </span>
          </span>
          <span className="text-xl">Hours</span>
        </span>

        {/* <span className="font-bold text-6xl border">:</span> */}

        <span className="flex flex-col items-center gap-5">
          <span
            className="flex items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#C9A348_0%,#C9A348_25%,#C7A147_50%,#CC9331_75%,#955E1E_100%)] w-20 h-20 rounded-lg font-bold text-4xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <span className=" absolute bg-red-main w-16 h-16 rounded-lg"></span>
            <span style={{ transform: "rotate(-45deg)" }}>
              {timeLeft.minutes}
            </span>
          </span>
          <span className="text-xl">Minutes</span>
        </span>

        <span className="flex flex-col items-center gap-5">
          <span
            className="flex items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#C9A348_0%,#C9A348_25%,#C7A147_50%,#CC9331_75%,#955E1E_100%)] w-20 h-20 rounded-lg font-bold text-4xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <span className=" absolute bg-red-main w-16 h-16 rounded-lg"></span>
            <span style={{ transform: "rotate(-45deg)" }}>
              {timeLeft.seconds}
            </span>
          </span>
          <span className="text-xl">Seconds</span>
        </span>
      </p>
    </div>
  );
}

export default Header;
