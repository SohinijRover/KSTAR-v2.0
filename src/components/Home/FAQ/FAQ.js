import React, { useState } from "react";
import Ques from "./Ques";

function FAQ() {
  const [faq] = useState([
    {
      id: 1,
      ques: "What is Registration Id?",
      ans: "-> Your University Roll No. provided by you at the time of registration will be considered as the Registration Id of KSTAR.",
    },
    {
      id: 2,
      ques: "When will the registrations start?",
      ans: "-> The registration of the event will start from 16th Dec 2023, 5PM.",
    },
    {
      id: 3,
      ques: "When will the registrations close?",
      ans: "-> The registrations of the event will close on 24th Dec 2023, 10AM",
    },
    {
      id: 4,
      ques: "How can I Register?",
      ans: "-> You can register using the Register Now buttons on the Homepage, irrespective of the categories",
    },
    {
      id: 5,
      ques: "How can I submit?",
      ans: "-> You can find the Submit Here button inside Every Event Cards, after the release of Theme on 25th Dec, 2023. Please follow the guidelines for upload format and size restrictions with respect to Categories.",
    },
    {
      id: 6,
      ques: "Is there any Registration fee for the Event?",
      ans: "-> The event is absolutely free and exclusively for 1st Year UG/PG students of KIIT.",
    },
    {
      id: 7,
      ques: "What is the Event Format?",
      ans: "-> The format of the event is 72 Hour Challenge i.e A theme will be given to you at the start of the event and you need to submit your entry within the designated time limit.",
    },
    {
      id: 8,
      ques: "How to get updates about thhe event?",
      ans: "-> For any official updates regarding the event, kindly follow @ksacofficial on Facebook, Instagram and Twitter.",
    },
    {
      id: 9,
      ques: "When will the Event Start?",
      ans: "-> The event will start on 25th Dec 2023, 00:00 hours and ends on 27th Dec, 23:59 hours",
    },
    {
      id: 10,
      ques: "How can I see the Theme and guidelines of the event?",
      ans: "-> As you know it is a 72 Hour Challenge, the theme and the guidelines to participate and submit your entry will be opened on 25th Dec 2023, 00:00 hours.",
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
