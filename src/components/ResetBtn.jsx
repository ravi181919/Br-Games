import React from 'react'
import { BiReset } from 'react-icons/bi'
import { motion } from 'framer-motion'

const ResetBtn = ({bgColor="#FFB921", reset}) => {
  return (
    <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "backInOut" }}
              className="w-full h-[10%] flex justify-center"
              onClick={reset}
            >
              <motion.button
                initial={{ backgroundColor: "rgba(0,0,0,0)", opacity: 0.5 }}
                animate={{ backgroundColor: bgColor, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.5, ease: "backIn" }}
                className="px-4 py-4 font-bold rounded-md text-md text-shadow-sm shadow flex items-center justify-center gap-2 overflow-hidden"
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
  )
}

export default ResetBtn
