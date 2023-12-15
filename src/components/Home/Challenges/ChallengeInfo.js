import React from "react";
import { Link } from "react-router-dom";

function ChallengeInfo({challenge}) {
  return (
    <Link to="/" className="w-3/12 flex flex-col items-center gap-2">
        <img src={challenge.img} alt="challenge icon" />
        <img src="/assets/Home/challenges/stand.svg" alt="stand image" />
        <h1 className="text-white font-bold text-center text-4xl">{challenge.title}</h1>
    </Link>
  );
}

export default ChallengeInfo;
