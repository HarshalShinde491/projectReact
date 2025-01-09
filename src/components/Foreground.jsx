import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "slate-900" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".10mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downloaded", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".25mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "slate-900" },
    },
  ];

  return (
    <div
      ref={ref}
      className="z-[3] h-screen w-full bg-slate-500/50 py-5 flex gap-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
