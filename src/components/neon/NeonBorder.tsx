import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import NeonHeader from "./NeonHeader";

const Container = styled(motion.div)`
  width: 1400px;
  height: 620px;
  margin: auto;
  background: hsl(203, 5%, 2%);
  border: 8px solid #000022;
`;

const glow = (blur: number, spread: number): string =>
  `0px 0px ${blur}px ${spread}px #001242`;

const borderVariants = {
  backlight: {
    boxShadow: [
      glow(28, 30),
      glow(80, 20),
      glow(60, 50),
      glow(70, 10),
      glow(28, 30)
    ],
    transition: {
      boxShadow: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 8,
        ease: "easeInOut"
      }
    }
  }
};

const NeonBorder = (): JSX.Element => {
  return (
    <Container animate="backlight" variants={borderVariants}>
      <NeonHeader />
    </Container>
  );
};

export default NeonBorder;
