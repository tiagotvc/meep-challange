import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContainerButton } from "../styles";

export const CardButton = ({ rarity, item }) => {
  return (
    <ContainerButton rarity={rarity}>
      <button>
        <Link key={`${item.id}`} href={`/${item.id}`}>
          Mais Detalhes
        </Link>
      </button>
    </ContainerButton>
  );
};

export default CardButton;
