import React from "react";
import styled from "styled-components";
import SlidingBar from "./SlidingBar";

const Container = styled.div`
  position: relative;
  top: 379px;
  left: 1145px;
  width: 8px;
  height: 300px;
`;

const SlidingBars = (): JSX.Element => {
  return (
    <Container>
      <SlidingBar slot={0} variant="wind" />
      <SlidingBar slot={1} variant="fire" />
      <SlidingBar slot={2} variant="earth" />
    </Container>
  );
};

export default SlidingBars;
