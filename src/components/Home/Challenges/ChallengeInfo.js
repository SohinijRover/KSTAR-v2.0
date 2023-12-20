import React from "react";
import { Link } from "react-router-dom";

function ChallengeInfo({ challenge }) {
  return (
    <Link
      to={challenge.path}
      className="w-3/12 flex flex-col items-center gap-1"
    >
      <img src={challenge.img} alt="challenge icon" className="w-3/4" />
      <img
        src="/assets/Home/challenges/stand.png"
        alt="stand"
        className="w-3/4"
      />
      {/* text-4xl */}
      <h1 className="text-white font-bold text-center text-xl">
        {challenge.title}
      </h1>
    </Link>
  );
}

export default ChallengeInfo;
