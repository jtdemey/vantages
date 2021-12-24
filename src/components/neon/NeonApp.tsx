import React from "react";
import styled from "styled-components";
import NeonBorder from "./NeonBorder";

/*
--oxford-blue: hsla(240, 100%, 7%, 1);
--oxford-blue-2: hsla(224, 100%, 13%, 1);
--blue-ncs: hsla(195, 100%, 39%, 1);
--blue-sapphire: hsla(195, 100%, 24%, 1);
--rich-black-fogra-29: hsla(203, 69%, 5%, 1);
*/

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(hsl(203, 69%, 5%), hsl(203, 20%, 5%));
`;

const handleClick = (isAnimating: boolean, setAnimating: Function) =>
  setAnimating(!isAnimating);

const NeonApp = (): JSX.Element => {
  const [isAnimating, setAnimating] = React.useState(false);
  return (
    <Container
      onClick={() => handleClick(isAnimating, setAnimating)}
    >
      <NeonBorder />
    </Container>
  );
};

export default NeonApp;
