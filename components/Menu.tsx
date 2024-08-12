"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const MenuButton = ({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <motion.button onClick={toggleMenu} className="absolute top-0 left-0 w-28 h-10 cursor-pointer rounded-3xl overflow-hidden z-50">
      <motion.div
        className="w-full h-full relative"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween",delay:isActive?0:0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={"w-full h-full bg-white text-black"}    
        >
          <PerspectiveText label="Menu" />
        </div>

        <div
          className="w-full h-full bg-black text-white"
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </motion.button>
  );
};

const PerspectiveText = ({ label }: { label: string }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="uppercase">{label}</p>
    </div>
  );
};

const NavText = ({
  links,
  toggleMenu
}: {
  toggleMenu:() => void
  links: {
    id: string;
    label: string;
  }[];
}) => {
  const menuLinkItemVariants = {
    initial: {
      y: 75,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    enter: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    exit: {
      y: 75,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const menuLinksVariants = {
    initial: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    enter: {
      transition: { staggerChildren: 0.17, delayChildren: 0.75 },
    },
    exit: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <div className="flex justify-between items-center flex-col pt-20 pb-8 px-8">
      <motion.div
        variants={menuLinksVariants}
        animate="enter"
        exit="exit"
        initial="initial"
        className="space-y-4"
      >
        {links.map((link, index) => (
          <div
          onClick={toggleMenu}
            className="w-max p-1 cursor-pointer"
            key={index}
            style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0% 100%)" }}
          >
            <motion.div className="relative" variants={menuLinkItemVariants}>
              <Link
              href={`/#${link.id}`}
                className="hover:underline menu-link text-xl py-4 lg:py-1 lg:text-3xl font-normal tracking-[-0.02em] leading-[85%]"
              >
                {link.label}
              </Link>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Menu = ({
  sections,
}: {
  sections: {
    id: string;
    label: string;
  }[];
}) => {
  const [isActive, setIsActive] = useState(false);
  const menu = {
    open: {
      width: "auto",
      height: "auto",
      top: "-15px",
      left: "-15px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      width: "112px",
      height: "40px",
      top: "0px",
      left: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const toggleMenu =() => {
    setIsActive(!isActive);
  }

  return (
    <div className="lg:absolute fixed z-50">
      <MenuButton
        isActive={isActive}
        toggleMenu={toggleMenu}
      />
      <motion.div
        className="h-fit bg-white rounded-3xl relative text-black"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence mode="wait">
          {isActive && <NavText links={sections} toggleMenu={toggleMenu}/>}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;
