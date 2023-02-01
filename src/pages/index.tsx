import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionBackground } from "@/components/SectionBackground";
import Link from "next/link";
import { CompletePokemon, usePokemon } from "@/store/index";
import { createProkemon } from "utils/functions";
import { ItemCard } from "@/components/ItemCard";
import { Grid } from "@/styles/index-styles";
import Pagination from "@/components/Pagination";
export { getServerSideProps } from "@/store/index";

const Catalog = () => {
  const { pokemon, page, setPage } = usePokemon();
  const parsedPokemon = createProkemon(pokemon);

  const first = page === 1 ? 0 : (page - 1) * 17;
  const last = page * 17 - 1;

  const totalPages = Array.from(
    { length: parsedPokemon.length },
    (_, i) => i + 1
  );

  const pagination = () => {
    const pagesTotal = parsedPokemon.length / 15;
    if (pagesTotal < 1) return 1;
    else if (pagesTotal >= 45) return 47;
    else if (pagesTotal <= 2) return Math.floor(pagesTotal) + 1;
    else return Math.floor(pagesTotal);
  };

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(parsedPokemon.slice(first, last))
    );
  }, [last, first, parsedPokemon]);

  return (
    <>
      <Pagination
        pages={totalPages}
        setPage={setPage}
        total={pagination()}
        page={page}
      />
      <SectionBackground>
        <Grid>
          {parsedPokemon.slice(first, last).map((item: CompletePokemon) => (
            <Link key={`${item.id}`} href={`/${item.id}`}>
              <ItemCard rarity={item.rarity} item={item} />
            </Link>
          ))}
        </Grid>
      </SectionBackground>
    </>
  );
};

export default Catalog;
