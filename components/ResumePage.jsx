"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "Passionate web developer with a keen eye for detail and a dedication to creating exceptional user experiences. With a solid foundation in both frontend and backend technologies, I thrive on turning ideas into innovative digital solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Md Jawed Ansari",
    },
    // {
    //   fieldName: "Phone",
    //   fieldValue: "(+91) 7491938225",
    // },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    // {
    //   fieldName: "Skype",
    //   fieldValue: "jawed0216",
    // },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    // {
    //   fieldName: "Email",
    //   fieldValue: "jawed0216@gmail.com",
    // },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, हिंदी, اردو",
    },
  ],
};

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "With expertise in frontend development at Dream Steps Technologies, I craft seamless digital experiences and deliver high-quality web applications using React.js, Tailwind CSS, and Redux Toolkit in my current full-time role.",
  items: [
    {
      company: "Dream Steps Technologies",
      position: "Frontend Developer ",
      duration: "Dec 2023 - Present",
    },
  ],
};

// Education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Completed Bachelor's degree in Electrical & Electronics from Jawaharlal Nehru Technological U&niversity Kakinada in 2017, equipped with comprehensive knowledge in Electrical & Electronics principles and practices. ",
  items: [
    {
      institution: "Physics Wallah Skills",
      degree: "Full Stack Web Development",
      duration: "Jan 2023 - Oct 2023",
    },
    {
      institution: "JNTUK",
      degree: "Bachelor of Technology (Electrical & Electronics)",
      duration: "2013 - 2017",
    },
    {
      institution: "U. R. College Rosera",
      degree: "Intermediate ",
      duration: "2011 - 2013",
    },
    {
      institution: "Rosera Higher Secondary school",
      degree: "Matriculation ",
      duration: "2010-2011",
    },
  ],
};
 
// skills data
const skills = {
  title: "My skills",
  description:
    "Proficient in , CSS, JavaScript, React.js, Node.js, and MongoDB. Skilled in frontend and backend development, creating dynamic web applications with a focus on performance and user experience. ",
  items: [
    {
      icon: <FaHtml5 />,
      name: " HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.Js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "Nextdot.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux-Toolkit",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[308px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center  xl:text-left ">
                <h3 className="text-4xl font-bold ">{experience?.title}</h3>
                <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0 ">
                  {experience?.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-col-1 md:grid-cols-2 gap-[30px]">
                    {experience?.items?.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item?.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item?.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item?.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center  xl:text-left ">
                <h3 className="text-4xl font-bold ">{education?.title}</h3>
                <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0 ">
                  {education?.description}
                </p>
                <ScrollArea className="h-[420px]">
                  <ul className="grid grid-col-1 md:grid-cols-2 gap-[30px]">
                    {education?.items?.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item?.duration}</span>
                        <h3 className="text-sm  min-h-[60px] text-center lg:text-left">
                          {item?.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item?.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold ">{skills?.title}</h3>
                  <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0">
                    {skills?.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-[30px] ">
                  {skills?.items?.map((skill, index) => (
                    <li key={index} className="">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl  group-hover:text-accent transition-all duration-300">
                              {skill?.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill?.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      {skill?.name}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about?.title}</h3>
                <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0 ">
                  {about?.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about?.info?.map((items, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center  xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{items?.fieldName}</span>
                      <span className="text-xl">{items?.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;

