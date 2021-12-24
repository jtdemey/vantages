import React from "react";
import styled from "styled-components";
import CascadingHeader from "../common/CascadingHeader";
import TileList from "./TileList";
import StingerListItems from "../../data/StingerListItems";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: hsl(180, 5%, 8%);
`;

const VantagesApp = (): JSX.Element => {
  return (
    <Container>
      <CascadingHeader backgroundColor="#2D5D7B" text="Vantages" />
      <TileList header="Stingers" items={StingerListItems} />
    </Container>
  );
};

export default VantagesApp;
