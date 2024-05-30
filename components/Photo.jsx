"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute "
        >
          <Image
            src="/assets/photo.png"
            priority
            // loader={<h3>Loading...</h3>}
            quality={100}
            fill
            alt="Ejaz Ali image"
            sizes="w-full h-full"
            className="object-contain rounded-full "
          />
        </motion.div>

        {/* circle */}

        <motion.svg
          className="w-[270px] h-[270px] xl:w-[420px] xl:h-[420px]"
          fill="transparent"
          viewBox="0 0 500 500"
          xmlna="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="240"
            cy="240"
            r="243"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 253 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
