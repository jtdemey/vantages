import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export type TileListElement = {
  href: string,
  text: string
};

type TileListProps = {
  header: string,
  items: TileListElement[]
};

const Container = styled(motion.article)`
  padding: 1rem;
  background: hsl(180, 5%, 8%);
`;

const ListHeader = styled(motion.h2)`
  color: hsla(240, 100%, 100%, 0.91);
  color: #466972;
  font-family: "Xanh Mono", serif;
  font-size: 1.5rem;
`;

const List = styled.ul`
  padding-left: 1rem;

  a {
    text-decoration: none;
  }
`;

const Tile = styled(motion.li)`
  display: inline-block;
  max-width: 50%;
  margin: 0.25rem auto 0.25rem 0.25rem;
  padding: 0.25rem 0.5rem;
  border-bottom: 1px solid hsl(206, 19%, 24%);
  border-left: 2px solid hsl(206, 19%, 24%);
  color: hsla(240, 100%, 100%, 0.91);
  font-family: "Encode Sans", sans-serif;
  font-size: 1.25rem;
  text-align: left;
`;

const TileList = ({ header, items }: TileListProps): JSX.Element => {
  return (
    <Container>
      <ListHeader>{header}</ListHeader>
      <List>
        {items && items.map((listElement: TileListElement) => (
          <a key={listElement.text} href={listElement.href}>
            <Tile>{listElement.text}</Tile><br />
          </a>
        ))}
      </List>
    </Container>
  );
};

export default TileList;
