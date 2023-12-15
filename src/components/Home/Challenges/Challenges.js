import React, { useState } from "react";
import ChallengeInfo from "./ChallengeInfo";

function Challenges() {
  const [c] = useState([
    {
      id: 1,
      img: "/assets/Home/challenges/frame_music.svg",
      title: "MUSIC",
      path: "/music",
    },
    {
      id: 2,
      img: "/assets/Home/challenges/frame_dance.svg",
      title: "DANCE",
      path: "/dance",
    },
    {
      id: 3,
      img: "/assets/Home/challenges/frame_painting.svg",
      title: "PAINTING",
      path: "/painting",
    },
    {
      id: 4,
      img: "/assets/Home/challenges/frame_acting.svg",
      title: "ACTING",
      path: "/acting",
    },
    {
      id: 5,
      img: "/assets/Home/challenges/frame_design.svg",
      title: "DESIGN",
      path: "/design",
    },
    {
      id: 6,
      img: "/assets/Home/challenges/frame_snapshot.svg",
      title: "SNAPSHOT",
      path: "/snapshot",
    },
    {
      id: 7,
      img: "/assets/Home/challenges/frame_writing.svg",
      title: "WRITING",
      path: "/writing",
    },
    {
      id: 8,
      img: "/assets/Home/challenges/frame_marketing.svg",
      title: "MARKETING",
      path: "/marketing",
    },
    {
      id: 9,
      img: "/assets/Home/challenges/frame_short_film.svg",
      title: "SHORT FILM",
      path: "/short-film",
    },
    {
      id: 10,
      img: "/assets/Home/challenges/frame_fashion.svg",
      title: "FASHION",
      path: "/fashion",
    },
  ]);
  return (
    <div className="w-full flex items-center justify-evenly flex-wrap gap-10">
      {c.map((challenge, key) => (
        <ChallengeInfo key={key} challenge={challenge} />
      ))}
    </div>
  );
}

export default Challenges;
