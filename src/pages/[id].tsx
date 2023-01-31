import React from "react";
import { useRouter } from "next/router";
import { usePokemon } from "../store";
import {
  Container,
  ContainerContent,
  ContainerDescription,
  ContainerForm,
  ContainerImage,
  ContainerInfo,
  ContainerTitle,
} from "@/styles/index-styles";
import Image from "next/image";
import { Heading } from "@/components/Heading";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/store/cart";

export { getServerSideProps } from "@/store/index";

export default function ProductPage() {
  const { pokemon, filter, setFilter } = usePokemon();
  const { cartItens, addToCart } = useCart();
  const router = useRouter();
  const { id } = router.query;

  pokemon.filter((pok: any) => pok.id === id);

  return (
    <Container>
      <ContainerContent>
        <ContainerImage>
          <div className="background_image">
            <Image
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon[0].image}`}
              width={120}
              height={120}
              alt=""
            />
          </div>
        </ContainerImage>
        <ContainerInfo>
          <ContainerTitle>
            <Heading as="h3" size="medium">
              {pokemon[0].name}
            </Heading>
          </ContainerTitle>
          <ContainerDescription>
            <Heading as="h6" size="small">
              Essa carta é super rara e o pokemon dela é muito poderoso. Nem
              tente vencer. Ataque : 2000 Defesa : 4000 Forte contra cartas de
              fogo. Essa carta é super rara e o pokemon dela é muito poderoso.
              Nem tente vencer. Ataque : 2000 Defesa : 4000 Forte contra cartas
              de fogo. fogo. Essa carta é super rara e o pokemon dela é muito...
            </Heading>
          </ContainerDescription>
        </ContainerInfo>
        <ContainerForm>
          <div className="form-names">
            <Heading as="h6" size="small">
              Quantidade:
            </Heading>
            <Heading as="h6" size="small" uppercase>
              Preço:
            </Heading>
            <Heading as="h6" size="small" uppercase>
              Total:
            </Heading>
          </div>
          <div className="form-values">
            <input type="number" />
            <Heading as="h6" size="small">
              R$ 200
            </Heading>
            <Heading as="h6" size="small">
              R$ 200
            </Heading>
          </div>
          <div className="choose-quantity"></div>
        </ContainerForm>
      </ContainerContent>
      <div className="add-cart">
        <button
          onClick={() =>
            addToCart({
              atack: "100",
              defense: "",
              description: "",
              image: "",
              name: "teste",
              id: 1,
              rarity: "",
              habilitie: "",
              rate: "",
            })
          }
        >
          <FaShoppingCart fontSize={40} />
        </button>
      </div>
    </Container>
  );
}
