import React from "react";
import { GlobalStyles } from "../../globaStyles";
import { Provider } from "@/contexts/ActionsContext";

export default function Layout({ children }) {
  return (
    <Provider>
      <div>
        <GlobalStyles />
      </div>
    </Provider>
  );
}
