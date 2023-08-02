import React from "react";
import { Link } from "gatsby";

import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
  &.current-language {
    border-bottom: 2px solid #000;
  }
`;

const navBar = () => {
  return (
    <Nav>
      <NavLink to="/" activeClassName="current-language">
        EN
      </NavLink>

      <NavLink to="/es" activeClassName="current-language">
        ES
      </NavLink>

      <NavLink to="/fr" activeClassName="current-language">
        FR
      </NavLink>
    </Nav>
  );
};

export default navBar;
