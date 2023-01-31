import Image from "next/image";
import React from "react";
import { ContainerButton } from "../styles";

export const CardButton = ({ rarity }) => {
  return (
    <ContainerButton rarity={rarity}>
      <button>Mais Detalhes</button>
    </ContainerButton>
  );
};

export default CardButton;
