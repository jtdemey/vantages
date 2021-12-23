import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

type SlidingBarProps = {
  slot: number;
  variant: string;
};

const Bar = styled(motion.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 8px;
  height: 300px;
  background: #1c1c1c;
`;

const genVariant = (backgrounds: string[], heights: number[]) => ({
  background: backgrounds,
  height: heights,
  transition: {
    background: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 5,
      ease: "easeInOut"
    },
    height: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 5,
      ease: "easeInOut"
    }
  }
});

const barVariants = {
  earth: genVariant(
    ["#381d2a", "#c6ae82", "#989572", "#6a8e7f", "#202c39", "#381d2a"],
    [0, 80, 40, 300, 180, 240, 0]
  ),
  fire: genVariant(
    ["#b36a5e", "#c97c5d", "#c89f9c", "#eed7c5", "#eee2df", "#b36a5e"],
    [0, 80, 60, 140, 120, 200, 220, 300, 0]
  ),
  wind: genVariant(
    ["#69ddff", "#96cdff", "#d8e1ff", "#dbbadd", "#be92a2", "#69ddff"],
    [0, 288, 145, 12, 264, 294, 68, 0]
  )
};

const SlidingBar = ({ slot, variant }: SlidingBarProps): JSX.Element => {
  return (
    <Bar
      animate={variant}
      style={{ left: `${28 * slot}px` }}
      variants={barVariants}
    />
  );
};

export default SlidingBar;
