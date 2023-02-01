import React from "react";
import { Container } from "./styles";

export const Pagination = ({ pages, setPage, total, page }) => {
  return (
    <Container>
      <div className="normal-pagination">
        {pages.slice(0, total).map((item: number) => (
          <div key={item} className="page-item" onClick={() => setPage(item)}>
            {item}
          </div>
        ))}
      </div>
      <div className="mobile-pagination">
        {page > 1 && (
          <button onClick={() => setPage((previous: number) => previous - 1)}>
            Anterior
          </button>
        )}
        <span>Página: {page}</span>
        {page <= total - 1 && (
          <button onClick={() => setPage((previous: number) => previous + 1)}>
            Próxima
          </button>
        )}
      </div>
    </Container>
  );
};

export default Pagination;
