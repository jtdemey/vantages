import React from "react";
import styled from "styled-components";
import SlidingBars from "./SlidingBars";
import SlidingTitle from "./SlidingTitle";

/*
$eerie-black: #1c1c1cff;
$timberwolf: #daddd8ff;
$alabaster: #ecebe4ff;
$cultured: #eef0f2ff;
$ghost-white: #fafaffff;
*/

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #FAFAFF;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: auto;
`;

const handleClick = (isAnimating: boolean, setAnimating: Function) =>
  setAnimating(!isAnimating);

const SliderApp = (): JSX.Element => {
  const [isAnimating, setAnimating] = React.useState(false);
  return (
    <Container
      onClick={() => handleClick(isAnimating, setAnimating)}
    >
      <SlidingTitle />
      <SlidingBars />
      <Image src="slider/soapyslider1.png" width={800} height={800} />
    </Container>
  );
};

export default SliderApp;
