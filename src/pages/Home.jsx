import React from "react";
import { motion } from "framer-motion";
const Home = () => {

  document.title = "BR-Games"
  return (
    <div className="w-full min-h-[86vh]  flex items-center justify-center transition-all duration-800 relative px-16">
      <div className="h-full flex items-center mt-8 justify-center font-[kajiro] flex-col text-shadow-lg">
        <motion.h1
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[16vw] leading-33"
        >
          Your Favorite Games
          <motion.span
            initial={{ y: -100, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "backInOut" }}
            className="text-pink-400 text-shadow-sm font-bold inline-block"
          >
            .
          </motion.span>
        </motion.h1>
        <motion.h1
          initial={{ backgroundColor: "rgba(0,0,0,0)", opacity: 0.5 }}
          animate={{ backgroundColor: "#FFB921", opacity: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: "backIn" }}
          className="text-[14vw] px-2  leading-32 flex items-center justify-center gap-2.5 overflow-hidden"
        >
          <motion.span
            initial={{ y: 100, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "backInOut" }}
            className="inline-block w-[7vw] h-[16vh] bg-pink-400 shadow-md rounded-full"
          ></motion.span>
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "backInOut" }}
            className="inline-block pt-3"
          >
            One Click Away.
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0, rotateZ: 360 }}
            animate={{ x: 0, opacity: 1, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "backInOut" }}
            className="inline-block w-[7vw] h-[16vh] bg-pink-400 shadow-md"
          ></motion.span>
        </motion.h1>
        <motion.h1
          initial={{ x: 100, opacity: 0, rotateZ: 30 }}
          animate={{ x: 0, opacity: 1, rotateZ: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="text-[13vw] leading-36 "
        >
          Welcome to BR Play
          <motion.span
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "backInOut" }}
            className="text-pink-400 text-shadow-sm font-bold inline-block"
          >
            !
          </motion.span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Home;
