import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { GiSkullCrossedBones } from "react-icons/gi";
import { SiAnaconda } from "react-icons/si";
import ResetBtn from "../components/ResetBtn";

const Tictactoe = () => {
  const [xoIcon, setXoIcon] = React.useState(Array(9).fill(null));
  const [turnOf, setTurnOf] = useState(true);

  const checkHowWonTheGame = () => {
    const checkIndexOfBox = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i of checkIndexOfBox) {
      const [a, b, c] = i;
      if (
        xoIcon[a] !== null &&
        xoIcon[a] === xoIcon[b] &&
        xoIcon[a] === xoIcon[c]
      ) {
        return xoIcon[a];
      }
    }
    return false;
  };

  const winnerIs = checkHowWonTheGame();
  console.log(winnerIs);

  const handleXoIconsChange = (index) => {
    if (xoIcon[index] !== null) return;
    const makeCopyOfXoIconState = [...xoIcon];
    makeCopyOfXoIconState[index] = turnOf ? "X" : "O";
    setXoIcon(makeCopyOfXoIconState);
    setTurnOf(!turnOf);
  };

  const resetHandler = () => {
    setXoIcon(Array(9).fill(null));
  };

  document.title = "BR-Games | Tic Tac Toe";
  return (
    <div className="w-full min-h-[100vh] bg-black/85 dark:bg-white/65 dark:text-black/75 text-white/75 flex flex-col justify-center items-center transition-all duration-800 relative px-16">
      <div className="absolute w-full top-0 left-0 z-10">
        <Navbar />
      </div>

      {winnerIs && (
        <div className="w-full absolute top-0 left-0 z-[1] bg-[#000000e9] h-full flex items-center justify-center">
          <div className="w-[35vw] h-[45vh] ml-10 flex flex-col gap-3 justify-center items-center p-[2vw] shadow-md relative rounded-md shadow-black/50 bg-[#e3e2df92]">
            <div className="flex flex-col items-center">
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "backInOut" }}
                className="text-black text-shadow-lg drop-shadow-sm font-bold inline-block"
              >
                {(() => {
                  return winnerIs === "X" ? (
                    <motion.span>
                      {" "}
                      <GiSkullCrossedBones size={79} />
                    </motion.span>
                  ) : winnerIs === "O" ? (
                    <SiAnaconda size={79} />
                  ) : null;
                })()}
              </motion.span>
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "backInOut" }}
                className="capitalize text-shadow-md text-lg pt-10 pb-2 leading-0 font-bold inline-block"
              >
                Is Winner of this game{" "}
              </motion.span>
            </div>
            <ResetBtn bgColor="#000000d5" reset={resetHandler} name="Start New Game!"/>
          </div>
        </div>
      )}

      <div className="h-[86vh] w-full flex flex-col relative  pl-5 items-center justify-between">
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
            {new Array(3).fill("").map((_, verticalItemsIndex) => (
              <div
                className="w-full flex flex-wrap justify-center gap-4"
                key={verticalItemsIndex}
              >
                {new Array(3).fill("").map((_, horizontalItemsIndex) => (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1, ease: "backInOut" }}
                    className="inline-flex w-[8vw] h-[16vh] items-center justify-center rounded-md bg-pink-400 shadow"
                    key={horizontalItemsIndex}
                    onClick={() =>
                      handleXoIconsChange(
                        verticalItemsIndex * 3 + horizontalItemsIndex
                      )
                    }
                  >
                    {(() => {
                      const value =
                        xoIcon[verticalItemsIndex * 3 + horizontalItemsIndex];
                      return value === "X" ? (
                        <GiSkullCrossedBones size={35} />
                      ) : value === "O" ? (
                        <SiAnaconda size={35} />
                      ) : null;
                    })()}
                  </motion.span>
                ))}
              </div>
            ))}

            <ResetBtn reset={resetHandler} />
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
