import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Node = ({ value, next, color, idx }) => {
  const hidden = next === null ? "invisible" : "";
  return (
    <motion.div
      className=" flex w-full mb-8 "
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <div className="flex grow-[2] flex-col items-center">
        <p className="text-center pb-2 text-xs text-fontPrimary dark:text-[#9c9ca2] font-semibold">
          {idx}
        </p>
        <div
          className={`rounded-full h-[4.2rem] w-[4.2rem] ${color} mb-2`}
        ></div>
        <div className="">
          <p className="pb-2 text-center text-xs text-fontPrimary dark:text-[#9c9ca2] font-medium  ">
            Value: {value}
          </p>
          <p className="text-center text-xs text-fontPrimary dark:text-[#9c9ca2] font-medium  ">
            Next: {next ? next : "null"}
          </p>
        </div>
      </div>
      <div
        className={`flex justify-center w-full self-center translate-y-[-11px] ${hidden}`}
      >
        <FaLongArrowAltRight className=" h-12 w-12 dark:text-[#9c9ca2] text-secondary" />
      </div>
    </motion.div>
  );
};

export default Node;
