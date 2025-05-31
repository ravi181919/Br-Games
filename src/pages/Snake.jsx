import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
const Snake = () => {
  document.title = "BR-Games | Snake"
  return (
    <div className="w-full min-h-[100vh] bg-black/85 dark:bg-white/65 dark:text-black/75 text-white/75 flex flex-col justify-center items-center transition-all duration-800 relative px-16">
      <div className="absolute w-full top-0 left-0 z-10">
        <Navbar />
      </div>

      <div className="h-[86vh] w-full flex flex-col relative mt-20 pl-5 items-center justify-between bg-pink-300">
        <div className="w-full h-[90%] flex items-end justify-between">
          <div className="w-[60%] text-shadow-lg">
            <motion.h1
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[12vw] leading-30 font-[kajiro]"
            >
              Timeless Fun
              <motion.span
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "backInOut" }}
                className="text-pink-400 text-shadow-sm font-bold inline-block"
              >
                .
              </motion.span>
            </motion.h1>
            <motion.h1
              initial={{ y: "-200%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: "backInOut" }}
              className="text-[12vw] leading-30 font-[kajiro] "
            >
              Classic Snake
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2, ease: "backInOut" }}
                className="inline-block w-[8vw] ml-2 h-[16vh] bg-pink-400 shadow-md rounded-full"
              ></motion.span>
            </motion.h1>
            <motion.h1
              initial={{ backgroundColor: "rgba(0,0,0,0)", opacity: 0.5 }}
              animate={{ backgroundColor: "#FFB921", opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.5, ease: "backIn" }}
              className="text-[11vw] leading-30 font-[kajiro] w-fit flex items-center justify-center overflow-hidden px-3 pt-0.5"
            >
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2, ease: "backInOut" }}
                className="inline-block w-[8vw] mr-2 mb-0.5 h-[16vh] bg-pink-400 shadow-md rounded-md"
              ></motion.span>
              <motion.span
                initial={{ y: "-300%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.5, ease: "backInOut" }}
                className="inline-block "
              >
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 2, ease: "backInOut" }}
                  className="inline-block pt-3"
                >
                  Endless Challenge.
                </motion.span>
              </motion.span>
            </motion.h1>
          </div>
        </div>
        <motion.p
          initial={{ x: "-100%", opacity: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "linear" }}
          className="text-[3.5vw] pt-2 mt-2 w-full h-fit  leading- text-center tracking-widest font-[kajiro] relative"
        >
          Challenge your brain in this classic battle of Xs and Os.
        </motion.p>
      </div>
    </div>
  );
};

export default Snake;
