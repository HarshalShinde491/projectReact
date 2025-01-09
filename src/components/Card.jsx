import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference} 
      whileDrag={{scaleX:1.1}}
      dragElastic={.1}
      dragTransition={{bounceStiffness:100,bounceDamping:30}}
      className="relative w-[250px] h-[300px] bg-slate-700/50 rounded-[50px] ml-5 overflow-hidden"
    >
      <FaFileAlt className="text-white text-5xl ml-5 mt-10" />
      <p className="p-5">{data.desc}</p>
      <div className="absolute w-full h-[80px] flex justify-between items-end p-6">
        <p className="text-white">{data.filesize}</p>
        {data.close ? (
          <IoIosCloseCircleOutline className="fill-white text-2xl" />
        ) : (
          <FaDownload className="fill-white text-2xl" />
        )}
      </div>
      {data.tag?.isOpen && (
        <div
          className={`absolute bottom-0 h-[50px] w-full ${
            data.tag.tagColor === "slate-900" ? "bg-slate-900" : "bg-green-700"
          } flex justify-center items-center`}
        >
          <h1 className="text-white text-lg font-semibold hover:text-green-500 cursor-pointer">
            {data.tag.tagTitle}
          </h1>
        </div>
      )}
    </motion.div>
  );
}

export default Card;
