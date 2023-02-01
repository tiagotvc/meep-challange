import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SectionBackground } from "../SectionBackground";

import Link from "next/link";
import { usePokemon } from "@/store/index";
import {
  CartFooter,
  CartHeader,
  Container,
  ContainerCards,
  ContainerItens,
  EmptyCartCard,
} from "./styles";
import { CompletePokemon, useCart } from "@/store/cart";
export { getServerSideProps } from "@/store/index";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import CardImage from "../ItemCard/CardImage";

export const Cart = ({ cart, toogleCart }) => {
  const { cartItens, setCartItens } = useCart();
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(1);

  const onChangeQuantity = (e, id: number) => {
    const current = cartItens.filter((item: CompletePokemon) => item.id === id);
    const index = cartItens.indexOf(current[0]);
    cartItens[index].quantity = e.target.value;
    setCartItens(cartItens);
    setCounter((previous: number) => previous + 1);
  };

  const removeFromCart = (id: number) => {
    const current = cartItens.filter((item: CompletePokemon) => item.id === id);
    const index = cartItens.indexOf(current[0]);
    cartItens.splice(index);
    setCartItens(cartItens);
    setCounter((previous: number) => previous + 1);
  };

  useEffect(() => {
    let initialValue = 0;
    let sum = cartItens.reduce(function (accumulator, curValue) {
      return accumulator + curValue.price * curValue.quantity;
    }, initialValue);
    setTotal(sum);
  }, [counter, cartItens]);

  return (
    <Container open={cart}>
      <CartHeader>
        <span>Carinho</span>
        <BsFillArrowLeftCircleFill
          className="cart-header-icon"
          fontSize={25}
          onClick={() => toogleCart(!cart)}
        />
      </CartHeader>
      {cartItens.length > 0 ? (
        <ContainerItens>
          {cartItens.map((item: CompletePokemon) => (
            <ContainerCards key={item.id} rarity={item.rarity}>
              <CardImage item={item} rarity="none" key={item.id} />
              <div className="cart-info">
                <div className="cart-itens-left">
                  <span>Nome:</span>
                  <span>Preço:</span>
                  <span>Quantidade:</span>
                  <span>Valor Total:</span>
                </div>
                <div className="cart-itens-right">
                  <span>{item.name}</span>
                  <span>{`R$ ${item.price}`}</span>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => onChangeQuantity(e, item.id)}
                  />
                  <span>{item.quantity * item.price}</span>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </ContainerCards>
          ))}
        </ContainerItens>
      ) : (
        <ContainerItens>
          <EmptyCartCard>
            <span>Seu carrinho está vazio</span>
          </EmptyCartCard>
        </ContainerItens>
      )}
      <CartFooter>
        <div className="subtotal">
          <div className="cart-itens-start">
            <span>Subtotal:</span>
          </div>
          <div className="cart-itens-end">
            {total !== 0 && <span>R$ {total}</span>}
          </div>
        </div>

        <button>Finalizar Compra</button>
      </CartFooter>
    </Container>
  );
};

export default Cart;
