import Image from "next/image";
import React from "react";
import { CardBodyContainer } from "../styles";

export const CardBody = ({ item }) => {
  return (
    <CardBodyContainer>
      <span className="power">{item.habilitie}</span>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </CardBodyContainer>
  );
};

export default CardBody;
