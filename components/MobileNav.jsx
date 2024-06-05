"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
        <button className="flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
            <CiMenuFries className="text-[32px] text-accent" />
          </button>
        </SheetTrigger>
        {isOpen && (
          <ScrollArea>
            <SheetContent className="flex flex-col">
              <div className="mt-20 mb-20 ">
                <Link href="/">
                  <h1 className="text-4xl font-primary text-center">
                    Jawed <span className="text-accent">.</span>
                  </h1>
                </Link>
              </div>

              <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => (
                  <Link
                    onClick={handleItemClick}
                    href={link.path}
                    key={index}
                    className={`${
                      link.path === pathName && "border-b-2 border-accent"
                    } text-xl capitalize hover:text-accent transition-all`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <Link
                href="/contact"
                className="mt-6 animate-pulse flex justify-center items-center"
              >
                <Button>Hire me</Button>
              </Link>
            </SheetContent>
          </ScrollArea>
        )}
      </Sheet>
    </>
  );
};

export default MobileNav;
