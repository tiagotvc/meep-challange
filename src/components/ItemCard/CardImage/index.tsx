import Image from "next/image";
import React from "react";
import { ItemCardProps } from "..";
import { ContainerImage, ImageBackground } from "../styles";

export const CardImage: React.FC<ItemCardProps> = ({ rarity, item }) => {
  return (
    <ContainerImage rarity={rarity}>
      <ImageBackground>
        <Image
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${item.image}`}
          width={100}
          height={100}
          alt=""
        />
      </ImageBackground>
    </ContainerImage>
  );
};

export default CardImage;
