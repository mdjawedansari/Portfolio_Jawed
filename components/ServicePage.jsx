"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Crafting responsive and dynamic websites tailored to your specific needs. Leveraging the latest technologies to ensure seamless performance and user engagement.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Logo Design",
    description:
      "Enhancing your website's visibility and search engine rankings with proven strategies. Driving organic traffic and improving your online presence for long-term success.",
    href: "/contact",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces for optimal user experiences. Focusing on aesthetic appeal and functionality to delight your users.",
    href: "/contact",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Creating memorable and impactful logos that define your brand identity. Ensuring your logo captures the essence of your brand and resonates with your audience.",
    href: "/contact",
  },
];

const ServicePage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container  lg:px-[6rem] xl:container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="grid grid-col-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover group-hover:text-accent transition-all duration-500 ease-in-out">
                  {service?.num}
                </div>
                <Link
                  href={service?.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all  duration-500">
                {service?.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service?.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;

