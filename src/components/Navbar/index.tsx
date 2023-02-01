import { usePokemon } from "@/store/index";
import React from "react";
import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/store/cart";
import Cart from "../Cart";
import { useRouter } from "next/router";
export { getServerSideProps } from "@/store/index";

export const Navbar = () => {
  const { filter, setFilter, setPage } = usePokemon();
  const { cart, toogleCart } = useCart();
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Cart cart={cart} toogleCart={toogleCart} />
      <Container showSearch={id ? false : true}>
        <input
          type="text"
          className="searchbar"
          value={filter}
          onChange={(e) => {
            setPage(1);
            setFilter(e.target.value);
          }}
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
