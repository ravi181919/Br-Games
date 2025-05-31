import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiTicTacToe } from "react-icons/gi";
import { BsThermometerSun } from "react-icons/bs";
import { GiSnake } from "react-icons/gi";
import { GiMoonOrbit } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import whiteLogo from "/noBgWhite.png";
import blackLogo from "/noBgColor.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const link = [
    { URL: "/", linkName: "Home", icons: <FaHome /> },
    { URL: "/tic-tac-toe", linkName: "Tic Tac Toe", icons: <GiTicTacToe /> },
    { URL: "/snack", linkName: "Snack", icons: <GiSnake /> },
  ];

  const themeHandler = () => {
    const theme = document.documentElement.classList;
    if (dark) {
      theme.remove("dark");
      theme.add("light");
    } else {
      theme.remove("light");
      theme.add("dark");
    }
    setDark(!dark);
  };
  return (
    <div className="w-full h-[14vh] flex items-center pt-2 justify-between  transition-all duration-800 py-1">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "linear" }}
        className="min-w-fit mx-auto h-full  rounded-full flex items-center justify-center px-8 py-1  bg-white/85 dark:bg-black/65"
      >
        {dark === false ? (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className="w-fit"
          >
            <img
              src={blackLogo}
              alt="logo"
              className="w-[15vw] object-contain h-full"
            />
          </motion.div>
        ) : (
          <img
            src={whiteLogo}
            alt="logo"
            className="w-[15vw] object-contain h-full"
          />
        )}
      </motion.div>

      <div className="min-w-lg mx-auto h-full  rounded-full shadow-sm flex items-center justify-center px-8 py-1 relative bg-white/85 dark:bg-black/65 overflow-hidden dark:text-white/75 text-black/75">
        <motion.div
          initial={{ height: "100%", opacity: 0.8 }}
          animate={{ height: 0, opacity: 0 }}
          transition={{ duration: 1.2, ease: "linear" }}
          className="w-full h-full absolute pointer-events-none z-[10] top-0 left-0 bg-zinc-900"
        ></motion.div>
        <div className="w-fit flex gap-15 items-center">
          {link.map((links, index) => (
            <NavLink
              to={`${links.URL}`}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "font-bold scale-105 border-b-[2px] border-amber-600 dark:border-pink-500 text-sm flex items-center cursor-pointer text-shadow-2xs gap-1"
                  : "flex items-center gap-1 font-bold text-sm cursor-pointer text-shadow-xs"
              }
            >
              {links.icons}
              {links.linkName}
            </NavLink>
          ))}
        </div>
      </div>

      <motion.div
        onClick={() => themeHandler()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "linear" }}
        className="min-w-fit  mx-auto h-full  rounded-full flex items-center justify-center px-12 py-1  bg-white/85 dark:bg-black/65"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "linear" }}
          className="w-fit drop-shadow-2xl text-black/65 text-shadow-xl dark:text-white/65"
        >
          {dark ? <BsThermometerSun size={25} /> : <GiMoonOrbit size={30} />}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Navbar;
