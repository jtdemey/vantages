import React from "react";
import { motion } from "framer-motion";
import { between } from "../../utils/RandomUtils";
import styled from "styled-components";

type CascadingHeaderProps = {
  backgroundColor?: string;
  text: string;
};

const Header = styled(motion.h1)`
  margin: 6rem auto 0;
  padding: 0.4rem;
  color: hsla(240, 100%, 100%, 0.91);
  text-align: center;
  font-family: "Xanh Mono", serif;
  font-size: 2.5rem;
  @media all and (min-width: 701px) {
    font-size: 7rem;
  }
`;

const Span = styled(motion.span)`
  display: inline-block;
  padding: 0 0.1rem;
  z-index: 1;
  @media all and (min-width: 701px) {
    padding: 0 0.25rem;
  }
`;

const CascadingHeader = ({ backgroundColor, text }: CascadingHeaderProps) => {
  const chars = text.split("");
  return (
    <Header style={{ background: backgroundColor ?? "none" }}>
      {chars.map((character: string, i: number) => (
        <Span
          key={i}
          animate={{
            opacity: [0, 1],
            y: [between(-150, 150), 0]
          }}
          transition={{
            duration: 2,
            ease: "easeOut"
          }}
        >
          {character}
        </Span>
      ))}
    </Header>
  );
};

export default CascadingHeader;
