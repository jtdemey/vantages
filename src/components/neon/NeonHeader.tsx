import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Monoton", cursive;
`;

const Prefix = styled(motion.h3)`
  position: absolute;
  top: -50px;
  left: 280px;
  color: hsl(40, 85%, 51%);
  font-size: 5rem;
`;

const First = styled(motion.h1)`
  position: absolute;
  top: 90px;
  left: 160px;
  color: hsl(40, 85%, 51%);
  margin: auto;
  font-size: 13rem;
  letter-spacing: 1rem;
`;

const Second = styled(motion.h2)`
  position: absolute;
  top: 315px;
  left: 75px;
  color: hsl(40, 85%, 51%);
  margin: auto;
  font-size: 13rem;
  letter-spacing: 1rem;
`;

const glow = (blur: number): string => `0px 0px ${blur}px hsl(40, 85%, 51%)`;

const shadowVariants = {
  dim: {
    textShadow: [
      glow(2),
      glow(5),
      glow(12),
      glow(10),
      glow(12),
      glow(4),
      glow(6),
      glow(15),
      glow(6),
      glow(2)
    ],
    transition: {
      textShadow: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1,
        ease: "easeInOut"
      }
    }
  }
};

const NeonHeader = (): JSX.Element => {
  return (
    <Container>
      <Prefix animate="dim" variants={shadowVariants}>The</Prefix>
      <First animate="dim" variants={shadowVariants}>Soapy</First>
      <Second animate="dim" variants={shadowVariants}>Penguin_</Second>
    </Container>
  );
};

export default NeonHeader;
