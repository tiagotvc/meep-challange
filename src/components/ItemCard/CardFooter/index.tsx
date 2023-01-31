import Image from "next/image";
import React from "react";
import { CardFooterContainer } from "../styles";

export const CardFooter = ({ rarity, item }) => {
  return (
    <CardFooterContainer rarity={rarity}>
      <div className="info">
        <div className="value">{item.atack}</div>
        <div className="type">Ataque</div>
      </div>
      <div className="info">
        <div className="value">{item.defense}</div>
        <div className="type">Defesa</div>
      </div>
      <div className="info">
        <div className="value">{item.rate}</div>
        <div className="type">Ranking</div>
      </div>
    </CardFooterContainer>
  );
};

export default CardFooter;
