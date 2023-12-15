import React, { useState } from "react";
import Ques from "./Ques";

function FAQ() {
  const [faq] = useState([
    {
      id: 1,
      ques: "Lorem Ipsum is simply dummy text of",
      ans: "Lorem Ipsum is simply dummy text of printing and typesetting industry",
    },
    {
      id: 2,
      ques: "Lorem Ipsum is simply dummy text of",
      ans: "Lorem Ipsum is simply dummy text of printing and typesetting industry",
    },
    {
      id: 3,
      ques: "Lorem Ipsum is simply dummy text of",
      ans: "Lorem Ipsum is simply dummy text of printing and typesetting industry",
    },
    {
      id: 4,
      ques: "Lorem Ipsum is simply dummy text of",
      ans: "Lorem Ipsum is simply dummy text of printing and typesetting industry",
    },
    {
      id: 5,
      ques: "Lorem Ipsum is simply dummy text of",
      ans: "Lorem Ipsum is simply dummy text of printing and typesetting industry",
    },
    {
      id: 6,
      ques: "Lorem Ipsum is simply dummy text of",
      ans: "Lorem Ipsum is simply dummy text of printing and typesetting industry",
    },
    {
      id: 7,
      ques: "Lorem Ipsum is simply dummy text of",
      ans: "Lorem Ipsum is simply dummy text of printing and typesetting industry",
    },
    {
      id: 8,
      ques: "Lorem Ipsum is simply dummy text of",
      ans: "Lorem Ipsum is simply dummy text of printing and typesetting industry",
    },
    {
      id: 9,
      ques: "Lorem Ipsum is simply dummy text of",
      ans: "Lorem Ipsum is simply dummy text of printing and typesetting industry",
    },
  ]);
  return (
    <div className="flex flex-col gap-10">
      {faq.map((f, key) => (
        <Ques key={key} f={f} />
      ))}
    </div>
  );
}

export default FAQ;
