"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Image from "next/image";

const projects = [
  {
    name: "01",
    category: "frontend",
    title: "project 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adip  inc commodo  consequ  velit . ",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    name: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adip  inc commodo  consequ  velit . ",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Redux-Toolkit" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    name: "03",
    category: "frontend",
    title: "project 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adip  inc commodo  consequ  velit . ",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Next.js" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSwiperSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] fle flex-col justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
              <div className="flex flex-col gap-[30px] h-[50%]  ">
                {/* outline number */}
                <div className="text-8xl leading-none font-extrabold text-outline ">
                  {project?.num}
                </div>

                {/* project category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project?.category} project
                </h2>

                {/* project description */}
                <p className="text-white/60">{project?.description}</p>

                {/* stack */}
                <ul className="flex flex-wrap gap-4">
                  {project?.stack?.map((items, index) => (
                    <li key={index} className="text-xl text-accent hover:bg-white/10 border-white/20 hover:shadow-md bg-white/5 px-3 py-1 flex justify-center items-center">
                      {items?.name}
                      {index !== project.stack.length - 1}
                    </li>
                  ))}
                </ul>

                {/* border */}
                <div className="border border-white/20"></div>

                {/* buttons */}
                <div className="flex items-center gap-4 ">
                  {/* live project button */}
                  <Link href={project?.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project Link</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  {/* github project button */}
                  <Link href={project?.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSwiperSlideChange}
              >
                {projects?.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20  ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project?.image}
                          fill
                          sizes="w-full h-full"
                          alt={project?.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* slider button */}
                <WorkSliderBtns
                  containerStyle=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyle=" bg-accent hover:bg-accent-hover text-promary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WorkPage;