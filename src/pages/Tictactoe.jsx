import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { BiReset } from "react-icons/bi";
import { GiSkullCrossedBones } from "react-icons/gi";
import { SiAnaconda } from "react-icons/si";

const Tictactoe = () => {

  const [xoIcon, setXoIcon] = React.useState("");

  const handleXoIconsChange = () => {
    
  }

  document.title = "BR-Games | Tic Tac Toe"
  return (
    <div className="w-full min-h-[100vh] bg-black/85 dark:bg-white/65 dark:text-black/75 text-white/75 flex flex-col justify-center items-center transition-all duration-800 relative px-16">
      <div className="absolute w-full top-0 left-0 z-10">
        <Navbar />
      </div>
      <div className="h-[86vh] w-full flex flex-col relative pt-5 pl-5 items-center justify-between">
        <div className="w-full h-full flex items-end justify-between">
          <div className="w-[60%] text-shadow-lg">
            <motion.h1
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[12vw] leading-30 font-[kajiro]"
            >
              Think Fast
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "backInOut" }}
                className="text-pink-400 text-shadow-sm font-bold inline-block"
              >
                .
              </motion.span>
            </motion.h1>
            <motion.h1
              initial={{ x: 100, opacity: 0, rotateZ: 360 }}
              animate={{ x: 0, opacity: 1, rotateZ: 0 }}
              transition={{ duration: 1.5, delay: 1, ease: "backInOut" }}
              className="text-[12vw] leading-30 font-[kajiro]"
            >
              Play Smart
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2, ease: "backInOut" }}
                className="inline-block w-[7vw] h-[16vh] bg-pink-400 shadow-md rounded-full"
              ></motion.span>
            </motion.h1>
            <motion.h1
              initial={{ backgroundColor: "rgba(0,0,0,0)", opacity: 0.5 }}
              animate={{ backgroundColor: "#FFB921", opacity: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: "backIn" }}
              className="text-[12vw] leading-30 font-[kajiro] w-fit flex items-center justify-center overflow-hidden px-3 pt-0.5"
            >
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "backInOut" }}
                className="inline-block w-[8vw] mr-2 mb-0.5 h-[18vh] bg-pink-400 shadow-md rounded-md"
              ></motion.span>
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "backInOut" }}
                className="inline-block pt-3"
              >
                Tic Tac Toe.
              </motion.span>
            </motion.h1>
          </div>
          <div className="w-[40%] h-[90%] flex items-center justify-start flex-col gap-4 p-10">
            {new Array(3).fill("").map((verticalItems, verticalItemsIndex) => (
              <div
                className="w-full flex flex-wrap justify-center gap-4"
                key={verticalItemsIndex}
              >
                {new Array(3)
                  .fill("")
                  .map((horizontalItems, horizontalItemsIndex) => (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 2, delay: 1, ease: "backInOut" }}
                      className="inline-block w-[8vw] h-[16vh] rounded-md bg-pink-400 shadow"
                      key={horizontalItemsIndex}
                    >{}</motion.span>
                  ))}
              </div>
            ))}

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "backInOut" }}
              className="w-full h-[10%] flex justify-center"
            >
              <motion.button
                initial={{ backgroundColor: "rgba(0,0,0,0)", opacity: 0.5 }}
                animate={{ backgroundColor: "#FFB921", opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.5, ease: "backIn" }}
                className="px-4 py-1 font-bold rounded-md text-md text-shadow-sm shadow flex items-center justify-center gap-2 overflow-hidden"
              >
                <motion.span
                  initial={{ y: 100, color: "rgba(0,0,0,0)", opacity: 0 }}
                  animate={{ y: 0, color: "#fb64b6", opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5, ease: "backInOut" }}
                  className="inline-block font-black pt-1.5"
                >
                  <motion.span
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: -360, opacity: 1 }}
                    transition={{ duration: 1, delay: 3, ease: "backInOut" }}
                    className="inline-block"
                  >
                    <BiReset size={18} />
                  </motion.span>
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 2, ease: "backInOut" }}
                >
                  Reset
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/*  */}
        <motion.p
          initial={{ x: "-100%", opacity: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "linear" }}
          className="text-[3.5vw] pt-2 mt-1 w-full h-fit  leading- text-center tracking-widest font-[kajiro] relative"
        >
          Challenge your brain in this classic battle of Xs and Os.
        </motion.p>
      </div>
    </div>
  );
};

export default Tictactoe;
