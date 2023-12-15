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
    <div className="bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] h-screen w-full flex flex-col fixed top-0" style={{zIndex: "-1"}}>
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
            href="#"
            className="font-bold text-red-main px-5 py-3 bg-white rounded-xl border-4 border-gold hover:text-white hover:bg-red-main text-xl"
          >
            Register Now!
          </a>
          <a href="#">
            <img src="/assets/Home/chat_icon.svg" alt="mailto" />
          </a>
        </div>
      </header>

      {/* KSTAR MAIN LOGO 3RD EDITION */}
      <div className="w-full flex justify-center">
        <img
          src="/assets/Home/logo-main.png"
          alt="kstar main"
          className="w-3/12"
        />
      </div>

      {/* DATE */}
      <div className="w-full flex justify-center text-white font-bold mt-5 text-6xl">
        25<sup className="text-xl">th</sup>-27<sup className="text-xl">th</sup>
        DEC 2023
      </div>

      {/* TIMER */}
      <p className="font-bold text-white relative flex items-center justify-center mt-5 gap-10 text-3xl">
        <span className="relative w-20 h-20 flex flex-col justify-center items-center">
          <span
            className="border-2 rounded-xl absolute w-full h-full"
            style={{ transform: "rotate(45deg)" }}
          ></span>
          <span
            className="w-full border-t-2 bg-white absolute top-3/4 right-3/4"
            style={{ transform: "rotate(-45deg)" }}
          ></span>
          <span
            className="w-full border-t-2 bg-white absolute bottom-3/4 left-3/4"
            style={{ transform: "rotate(-45deg)" }}
          ></span>
          <span>{timeLeft.days}</span>
          <span className="md:text-sm">Days</span>
        </span>
        :
        <span className="relative w-20 h-20 flex flex-col justify-center items-center">
          <span
            className="border-2 rounded-xl absolute w-full h-full"
            style={{ transform: "rotate(45deg)" }}
          ></span>
          <span
            className="w-full border-t-2 bg-white absolute top-3/4 right-3/4"
            style={{ transform: "rotate(-45deg)" }}
          ></span>
          <span
            className="w-full border-t-2 bg-white absolute bottom-3/4 left-3/4"
            style={{ transform: "rotate(-45deg)" }}
          ></span>
          <span>{timeLeft.hours}</span>
          <span className="md:text-sm">Hours</span>
        </span>
        :
        <span className="relative w-20 h-20 flex flex-col justify-center items-center">
          <span
            className="border-2 rounded-xl absolute w-full h-full"
            style={{ transform: "rotate(45deg)" }}
          ></span>
          <span
            className="w-full border-t-2 bg-white absolute top-3/4 right-3/4"
            style={{ transform: "rotate(-45deg)" }}
          ></span>
          <span
            className="w-full border-t-2 bg-white absolute bottom-3/4 left-3/4"
            style={{ transform: "rotate(-45deg)" }}
          ></span>
          <span>{timeLeft.minutes}</span>
          <span className="md:text-sm">Min</span>
        </span>
        :
        <span className="relative w-20 h-20 flex flex-col justify-center items-center">
          <span
            className="border-2 rounded-xl absolute w-full h-full"
            style={{ transform: "rotate(45deg)" }}
          ></span>
          <span
            className="w-full border-t-2 bg-white absolute top-3/4 right-3/4"
            style={{ transform: "rotate(-45deg)" }}
          ></span>
          <span
            className="w-full border-t-2 bg-white absolute bottom-3/4 left-3/4"
            style={{ transform: "rotate(-45deg)" }}
          ></span>
          <span>{timeLeft.seconds}</span>
          <span className="md:text-sm">Sec</span>
        </span>
      </p>

      {/* PRIZE POOL STAMP */}
      <div className="w-full flex items-center justify-center">
        <img src="/assets/Home/prize_pool.png" alt="prize pool stamp" />
      </div>
    </div>
  );
}

export default Header;
