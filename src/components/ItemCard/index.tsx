import Image from "next/image";
import React from "react";
import CardBody from "./CardBody";
import CardButton from "./CardButton";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import { Container } from "./styles";

export const ItemCard = ({ rarity, item }) => {
  return (
    <Container>
      <CardImage rarity={rarity} item={item} />
      <CardBody item={item} />
      <CardFooter rarity={rarity} item={item} />
      <CardButton rarity={rarity} item={item} />
    </Container>
  );
};
