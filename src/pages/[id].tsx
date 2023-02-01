import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { CompletePokemon, usePokemon } from "../store";
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
import { LoggedContext } from "@/store/loggedContext";
import { shadowColor } from "@/styles/functions";

export { getServerSideProps } from "@/store/index";

export default function ProductPage() {
  const { cartItens } = useCart();
  const { showSnackbar } = useContext(LoggedContext);
  const [quantity, setQuantity] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const { addToCart } = useCart();
  const router = useRouter();
  const { id } = router.query;

  const pokemon = JSON.parse(localStorage.getItem("products"));

  const data = pokemon.filter((pok: CompletePokemon) => pok.id === Number(id));

  const parseTotal = (total: string, price: number) => {
    setQuantity(Number(total));
    setTotal(price * Number(total));
  };

  const isInCart = cartItens.some(
    (item: CompletePokemon) => item.id === Number(id)
  );

  const sendPokemonToChart = (object: CompletePokemon) => {
    if (quantity === 0) {
      showSnackbar({
        type: "error",
        message: "A quantidade minima é de 1 item!",
      });
    } else if (isInCart)
      showSnackbar({
        type: "error",
        message: "Esse item já está em seu carrinho!",
      });
    else {
      object["price"] = total;
      object["quantity"] = quantity;
      addToCart(object);
      showSnackbar({
        type: "success",
        message: "Item adicionado ao carrinho!",
      });
    }
  };

  return (
    <Container cartButton={isInCart ? "rarissimo" : "raro"}>
      <ContainerContent shadowColor={shadowColor[data[0].rarity]}>
        <ContainerImage
          rarity={data[0].rarity}
          shadowColor={shadowColor[data[0].rarity]}
        >
          <div className="background_image">
            <Image
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${data[0].image}`}
              width={120}
              height={120}
              alt=""
            />
          </div>
        </ContainerImage>
        <ContainerInfo>
          <ContainerTitle>
            <Heading as="h3" size="medium" titleColor={data[0].rarity}>
              {data[0].name}
            </Heading>
          </ContainerTitle>
          <ContainerDescription>
            <Heading as="h6" size="small">
              {`Esse Pokemon possui raridade do tipo: ${data[0].rarity}`}
            </Heading>
            <Heading as="h6" size="small">
              {`Possui a habilidade: ${data[0].habilitie}`}
            </Heading>
            <Heading as="h6" size="small">
              {`Tem Ataque de : ${data[0].atack} Pontos`}
            </Heading>
            <Heading as="h6" size="small">
              {`Tem Defesa de : ${data[0].defense} Pontos`}
            </Heading>
            <Heading as="h6" size="small">
              {`Possui Ranking de  : ${data[0].rate} `}
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
            <input
              type="number"
              onChange={(e) => parseTotal(e.target.value, data[0].price)}
            />
            <Heading as="h6" size="small">
              {`R$ ${data[0].price}`}
            </Heading>
            <Heading as="h6" size="small">
              {`R$ ${total}`}
            </Heading>
          </div>
          <div className="choose-quantity"></div>
        </ContainerForm>
      </ContainerContent>

      <div className="add-cart">
        <button onClick={(e) => sendPokemonToChart(data[0])}>
          <FaShoppingCart fontSize={40} />
        </button>
      </div>
    </Container>
  );
}
