import { useState, createContext, useContext, useEffect } from "react";
import { Pokemon } from ".";
import { isEmpty } from "lodash";

export interface CompletePokemon extends Pokemon {
  description: string;
  rarity: string;
  habilitie: string;
  atack: string;
  defense: string;
  rate: string;
  price: number;
  quantity: number;
}

const useCartController = () => {
  const [cartItens, setCartItens] = useState<CompletePokemon[]>([]);
  const [cart, toogleCart] = useState<boolean>(false);

  const addToCart = (pokemon: CompletePokemon) => {
    setCartItens((previous: CompletePokemon[]) => [...previous, pokemon]);
  };

  useEffect(() => {
    const tempCartItens = JSON.parse(localStorage.getItem("cartItens")) || [];
    if (!isEmpty(cartItens) || isEmpty(tempCartItens)) return;
    setCartItens(tempCartItens);
  }, [cartItens]);

  useEffect(() => {
    if (isEmpty(cartItens)) return;
    localStorage.setItem("cartItens", JSON.stringify(cartItens));
  }, [cartItens]);

  return {
    cartItens,
    addToCart,
    toogleCart,
    setCartItens,
    cart,
  };
};

const CartContext = createContext<ReturnType<typeof useCartController>>({
  addToCart: () => {},
  toogleCart: () => {},
  cartItens: [],
  cart: false,
  setCartItens: () => {},
});

export const CartProvider = ({ children }) => (
  <CartContext.Provider value={useCartController()}>
    {children}
  </CartContext.Provider>
);

export const useCart = () => useContext(CartContext);
