import { Pokemon } from "../store";
import { pokemonHabilities, pokemonRarity, pokemonType, rates } from "./consts";

const randomMath = (value: string[]) => {
  return value[Math.floor(Math.random() * value.length)];
};

export function createRandomDescription() {
  const randomType = randomMath(pokemonType);
  const randomRariry = randomMath(pokemonRarity);
  return `Esse pokemon tem raridade ${randomRariry} e possui habilidade do tipo ${randomType}.`;
}

export function createProkemon(pokemon: Pokemon[]) {
  pokemon.forEach((item: Pokemon) => {
    item["description"] = createRandomDescription();
    item["rarity"] = randomMath(pokemonRarity);
    item["habilitie"] = randomMath(pokemonHabilities);
    item["atack"] = Math.floor(Math.random() * 1000);
    item["defense"] = Math.floor(Math.random() * 1000);
    item["price"] = Math.floor(Math.random() * 250);
    item["rate"] = randomMath(rates);
  });
  return pokemon;
}
