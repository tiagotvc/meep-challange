import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import { useState, useMemo, createContext, useContext } from "react";
import { useSnackbar } from "./useSnackBar";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

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

export async function getServerSideProps() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );
  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

const usePokemonController = (pokemon: Pokemon[]) => {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState<number>(1);

  const filteredPokemon = useMemo(
    () =>
      pokemon.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, pokemon]
  );

  return {
    filter,
    setFilter,
    pokemon: filteredPokemon,
    page,
    setPage,
  };
};

const PokemonContext = createContext<ReturnType<typeof usePokemonController>>({
  filter: "",
  page: 1,
  setFilter: () => {},
  setPage: () => {},
  pokemon: [],
});

export const PokemonProvider = ({ pokemon, children }) => (
  <PokemonContext.Provider value={usePokemonController(pokemon)}>
    {children}
  </PokemonContext.Provider>
);

export const usePokemon = () => useContext(PokemonContext);

/* const parsedProducts = useMemo(() => {
  const type = [
    "fogo",
    "água",
    "gelo",
    "terra",
    "vento",
    "planta",
    "pedra",
    "magnetico",
  ];
  const rarity = ["comum", "raro", "rarissimo", "lendário"];
  const habilities = [
    "Visão noturna",
    "Muralha impenetravel",
    "Confusão",
    "Super Velocidade",
    "Super Forçar",
  ];
  function createRandomPriceAtckAndDef(product: Product) {
    product["price"] = Math.floor(Math.random() * 100);
    product["atack"] = Math.floor(Math.random() * 1000);
    product["defense"] = Math.floor(Math.random() * 1000);
    return product;
  }
  function createRandomDescription(product: Product) {
    const randomMath = (value: string[]) => {
      return value[Math.floor(Math.random() * value.length)];
    };
    const randomType = randomMath(type);
    const randomRariry = randomMath(rarity);
    const randomHabilitie = randomMath(habilities);
    return `Esse pokemon tem raridade ${randomRariry} e possui habilidade do tipo ${randomType}, sua habilidade especial é ${randomHabilitie}`;
  }
  return filterProduct.slice(first, last).forEach((item) => {
    return createRandomDescription(createRandomPriceAtckAndDef(item));
  });
}, [filterProduct, first, last]); */
