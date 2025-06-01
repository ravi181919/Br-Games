import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
const Snake = () => {
  document.title = "BR-Games | Snake";
  return (
    <div className="w-full min-h-[100vh] bg-black/85 dark:bg-white/65 dark:text-black/75 text-white/75 flex flex-col justify-center items-center transition-all duration-800 relative px-16">
      <div className="absolute w-full top-0 left-0 z-10">
        <Navbar />
      </div>

      <div className="h-[86vh] w-full flex flex-col relative mt-20 pl-5 items-center justify-between bg-pink-300 overflow-hidden">
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
          <div className="w-[40%] h-full overflow-hidden flex items-end justify-center relative ">
            <div className="w-full h-[90%] flex gap-4 relative overflow-hidden ">
              <motion.div
                initial={{ y: "-100%", opacity: 0.4 }}
                animate={{ y: "250%", opacity: 1 }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-[5vw] ml-5 mb-0.5 h-[35vh] flex items-end justify-between bg-linear-to-t/increasing from-pink-500 to-pink-200 shadow-md rounded-full px-3.5 py-4"
              >
                {new Array(2).fill("").map((ani, aniIndex) => (
                  <span
                    key={aniIndex}
                    className="inline-flex items-center justify-center px-0.5 w-[1vw] mb-0.5 h-[2vh] bg-black shadow-md rounded-full "
                  >
                    <span className="inline-block w-[0.5vw] h-[1vh] bg-white shadow-md rounded-full"></span>
                  </span>
                ))}
              </motion.div>
              <motion.div
                initial={{ y: "-100%", opacity: 0.4 }}
                animate={{ y: "250%", opacity: 1 }}
                transition={{
                  duration: 5,
                  delay: 2,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-[5vw] mb-0.5 h-[35vh] flex items-end justify-between bg-linear-to-t/oklch from-pink-500 to-pink-100 shadow-md rounded-md px-3 py-1"
              >
                {new Array(2).fill("").map((ani, aniIndex) => (
                  <span
                    key={aniIndex}
                    className="inline-flex items-center justify-center px-0.5 w-[1vw] mb-0.5 h-[2vh] bg-black shadow-md rounded-full "
                  >
                    <span className="inline-block w-[0.5vw] h-[1vh] bg-white shadow-md rounded-full"></span>
                  </span>
                ))}
              </motion.div>
              <motion.div
                initial={{ y: "250%", opacity: 0.4 }}
                animate={{ y: "-100%", opacity: 1 }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-[5vw] ml-5 mb-0.5 h-[35vh] flex items-start justify-between bg-linear-to-t/increasing from-pink-500 to-pink-200 shadow-md rounded-full px-3.5 py-4"
              >
                {new Array(2).fill("").map((ani, aniIndex) => (
                  <span
                    key={aniIndex}
                    className="inline-flex items-center justify-center px-0.5 w-[1vw] mb-0.5 h-[2vh] bg-black shadow-md rounded-full "
                  >
                    <span className="inline-block w-[0.5vw] h-[1vh] bg-white shadow-md rounded-full"></span>
                  </span>
                ))}
              </motion.div>
              <motion.div
                initial={{ y: "250%", opacity: 0.4 }}
                animate={{ y: "-100%", opacity: 1 }}
                transition={{
                  duration: 5,
                  delay: 2,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-[5vw] ml-5 mb-0.5 h-[35vh] flex items-start justify-between bg-linear-to-t/oklch from-pink-500 to-pink-100 shadow-md rounded-md px-3 py-1"
              >
                {new Array(2).fill("").map((ani, aniIndex) => (
                  <span
                    key={aniIndex}
                    className="inline-flex items-center justify-center px-0.5 w-[1vw] mb-0.5 h-[2vh] bg-black shadow-md rounded-full "
                  >
                    <span className="inline-block w-[0.5vw] h-[1vh] bg-white shadow-md rounded-full"></span>
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <motion.p
          initial={{ x: "-100%", opacity: 0.4 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "linear" }}
          className="text-[3.5vw] w-full h-24 gap-2 flex items-center justify-center text-shadow-lg leading-0 text-center tracking-widest font-[kajiro] relative"
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 3, ease: "backInOut" }}
            className="inline-block pt-3"
          >
            Challenge your brain in
          </motion.span>
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 3.5, ease: "backInOut" }}
            className="inline-flex h-[12vh] pl-1 mt-2 pt-1 w-[6vw] leading-0 items-center justify-center rounded-full bg-[#FFB921] "
          >
            this
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 3, ease: "backInOut" }}
            className="inline-block pt-3"
          >
            classic battle of Xs and Os.
          </motion.span>
        </motion.p>
      </div>
    </div>
  );
};

export default Snake;
