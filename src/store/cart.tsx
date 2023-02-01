import Cart from "@/components/Cart";
import { useState, useMemo, createContext, useContext } from "react";
import { Pokemon } from ".";

export interface CompletePokemon extends Pokemon {
  description: string;
  rarity: string;
  habilitie: string;
  atack: string;
  defense: string;
  rate: string;
  price: number;
}

const useCartController = () => {
  const [cartItens, setCartItens] = useState<CompletePokemon[]>([]);
  const [cart, toogleCart] = useState<boolean>(false);

  const addToCart = (pokemon: CompletePokemon) => {
    setCartItens((previous: CompletePokemon[]) => [...previous, pokemon]);
  };

  return {
    cartItens,
    addToCart,
    toogleCart,
    cart,
  };
};

const CartContext = createContext<ReturnType<typeof useCartController>>({
  addToCart: () => {},
  toogleCart: () => {},
  cartItens: [],
  cart: false,
});

export const CartProvider = ({ children }) => (
  <CartContext.Provider value={useCartController()}>
    {children}
  </CartContext.Provider>
);

export const useCart = () => useContext(CartContext);
