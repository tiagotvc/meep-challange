import React from "react";
import Image from "next/image";
import { SectionBackground } from "../SectionBackground";

import Link from "next/link";
import { usePokemon } from "@/store/index";
import { CartHeader, Container, ContainerItens } from "./styles";
import { useCart } from "@/store/cart";
export { getServerSideProps } from "@/store/index";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const Cart = ({ cart, toogleCart }) => {
  const { pokemon, filter, setFilter } = usePokemon();

  console.log("cart no cart", cart);

  return (
    <Container open={cart}>
      <CartHeader>
        <BsFillArrowLeftCircleFill
          className="cart-header-icon"
          fontSize={25}
          onClick={() => toogleCart(!cart)}
        />
      </CartHeader>
      <ContainerItens>
        <div className="cart-itens">
          <div className="cart-info">
            <div className="cart-itens-left">
              <span>Nome:</span>
              <span>Preço:</span>
              <span>Quantidade:</span>
              <span>Valor Total:</span>
            </div>
            <div className="cart-itens-right">
              <span>Bubasalru</span>
              <span>R$ 1000</span>
              <input type="number" />
              <span>R$ 2000</span>
            </div>
          </div>
        </div>
      </ContainerItens>
    </Container>
  );
};

export default Cart;
