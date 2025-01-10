"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const DownloadCV = () => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
    >
      <Link href='' download  target="_blank" rel="noopener noreferrer">  
      {/* /assets/resume/Updated Frontend Developer.pdf (1).pdf     */}
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2  rounded-full text-accent"
      >
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
      </Link>
    </motion.div>
  );
};

export default DownloadCV;
