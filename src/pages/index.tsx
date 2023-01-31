import React from "react";
import { SectionBackground } from "@/components/SectionBackground";
import Link from "next/link";
import { CompletePokemon, usePokemon } from "@/store/index";
import { createProkemon } from "utils/functions";
import { ItemCard } from "@/components/ItemCard";
import { Grid } from "@/styles/index-styles";
export { getServerSideProps } from "@/store/index";

const Catalog = () => {
  const { pokemon } = usePokemon();
  const parsedPokemon = createProkemon(pokemon);

  return (
    <SectionBackground background={false}>
      <Grid>
        {parsedPokemon.map((item: CompletePokemon) => (
          <Link key={`${item.id}`} href={`/${item.id}`}>
            <ItemCard rarity={item.rarity} item={item} />
          </Link>
        ))}
      </Grid>
    </SectionBackground>
  );
};

export default Catalog;
