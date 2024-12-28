"use client";

import React from "react";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/mdjawedansari?tab=repositories",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/md-jawed-ansari-b672b9198/",
  },
  {
    icon: <BiLogoGmail />,
    path: "mailto:testing@gmail.com",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
