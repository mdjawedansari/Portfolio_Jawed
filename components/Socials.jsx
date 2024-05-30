"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ejazali01?tab=repositories",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ejaz-ali-329646133/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/Ejaz_Ali001",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/coders_clinic?igsh=cDhpcWJndThyZGll&utm_source=qr",
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
