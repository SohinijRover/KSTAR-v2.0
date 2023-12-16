import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ThemeGuidelines() {
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
    <div className="w-full h-screen flex flex-col items-center gap-5">
      <div className="flex w-full p-5 justify-end">
        <div className="flex items-start py-5 px-10 gap-10">
          <Link
            to="/"
            className="flex items-center gap-3 text-gold font-bold text-2xl"
          >
            <img src="/assets/Challenges/home.svg" alt="home icon" />
            Home
          </Link>
          <a className="flex items-center gap-3 text-gold font-bold text-2xl">
            <img src="/assets/Challenges/chat.svg" alt="chat icon" />
            Contact Us
          </a>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-between">
        <div className="border-r-2 w-6/12 h-80 flex flex-col gap-10 items-center justify-center">
          <div className="font-bold text-center text-white text-6xl">
            THEME AND GUIDELINES NOT PUBLISHED YET...
          </div>
          <div className="font-bold text-white text-3xl text-center">
            PLEASE WAIT TILL 25Dec <br />
            {timeLeft.days} Days : {timeLeft.hours} Hrs : {timeLeft.minutes} Min
            : {timeLeft.seconds} Sec
          </div>
        </div>
        <div className="w-5/12 pr-16 flex justify-center items-center">
          <img src="/assets/Home/logo-main.png" alt="main logo" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default ThemeGuidelines;
