import { usePokemon } from "@/store/index";
import React from "react";
import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/store/cart";
import Cart from "../Cart";
export { getServerSideProps } from "@/store/index";

export const Navbar = () => {
  const { pokemon, filter, setFilter } = usePokemon();
  const { cart, toogleCart } = useCart();

  console.log("cart na navbar", cart);
  return (
    <>
      <Cart cart={cart} toogleCart={toogleCart} />
      <Container>
        <input
          type="text"
          className="searchbar"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Pesquise pelo nome da Carta"
        />
        <div className="cart">
          <FaShoppingCart
            fontSize={25}
            className="cart-navbar-icon"
            onClick={() => toogleCart(true)}
          />
        </div>
      </Container>
    </>
  );
};

export default Navbar;
