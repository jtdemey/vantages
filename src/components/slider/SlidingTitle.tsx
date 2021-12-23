import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Header = styled(motion.h1)`
  display: flex;
  position: absolute;
  top: 285px;
  left: 80px;
  font-family: "Xanh Mono", sans-serif;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
`;

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear"
      }
    }
  }
};

const repeatString = (text: string, amount: number): string => {
  let result = `${text}  `;
  for (let i = 0; i < amount; i++) {
    result += `${text}  `;
  }
  return result;
};

const SlidingTitle = (): JSX.Element => {
  return (
    <>
      <Header animate="animate" variants={marqueeVariants}>
        {repeatString("TheSoapyPenguin_", 10)}
      </Header>
    </>
  );
};

export default SlidingTitle;
