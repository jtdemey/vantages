import React from "react";
import { motion } from "framer-motion";
import { between } from "../../utils/RandomUtils";
import styled from "styled-components";

type CascadingHeaderProps = {
  text: string;
};

const Header = styled.h1`
  padding-top: 6rem;
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

const CascadingHeader = ({ text }: CascadingHeaderProps) => {
  const chars = text.split("");
  return (
    <Header>
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
