"use client";

import React from "react";
import DownloadCV from "./DownloadCV";
import Socials from "./Socials";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <div className="text-center xl:text-left order-2 xl:order-none">
      <span className="text-xl">Frontend Developer</span>
      <h1 className="h1 mb-6">
        Hello I'm <br />
        <motion.span className="text-accent">Md Jawed Ansari</motion.span>
      </h1>
      <p className="mx-w-[500px] mb-9 text-white/80">
        I excel at crafting elegant digital experiences using HTML, CSS,
        JavaScript, React.js, Node.js, and MongoDB, with experience from
        internships at Foxmula and Eleadsmedia.
      </p>

      {/* button and socials */}
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <DownloadCV />
        <div className="mb-8 xl:mb-0">
          <Socials
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full overflow-hidden flex justify-center items-center text-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
