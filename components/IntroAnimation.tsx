"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const IntroAnimation = ({
  className,
  children,
}: Readonly<{
  className: string;
  children: React.ReactNode;
}>) => {
  const isLG = useMediaQuery({ query: `(min-width: 1024px)` });
  const [contentWidth, setContentWidth] = useState({});
  useEffect(() => {
    if (isLG) {
      setContentWidth({ width: "50%" });
    } else {
      setContentWidth({ width: "100dvw" });
    }
  }, [isLG]);

  return (
    <motion.div
      className={className}
      initial={{ width: "100dvw" }}
      animate={contentWidth}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

const IntroComponentAnimation = ({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) => {
  const introComponentVariant = {
    initial: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    enter: {
      transition: { staggerChildren: 0.17, delayChildren: 0.75, duration: 1 },
    },
  };
  return (
    <motion.div
      className={className}
      variants={introComponentVariant}
      initial="initial"
      animate="enter"
    >
      {children}
    </motion.div>
  );
};

const IntroTextAnimation = ({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) => {
  const introTextVariant = {
    initial: {
      x: 100,
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className={className} variants={introTextVariant}>
      {children}
    </motion.div>
  );
};

export { IntroAnimation, IntroTextAnimation, IntroComponentAnimation };
