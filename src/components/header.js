import React from "react";
import { css } from "@emotion/core";

import Navigation from "./nav";

const Header = () => {
  return (
    <header
      css={css`
        background-color: #fff;
        padding: 0 1rem 0rem 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <h1
          css={css`
            color: #000;
            text-align: center;
          `}
        >
          DarshanWebDev
        </h1>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
