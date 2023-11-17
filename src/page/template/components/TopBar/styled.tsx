import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 4rem;
  background-color: var(--color-background);
  position: sticky;
  top: 0;
  display: grid;
  grid-template-areas: "logo navigation";
  grid-template-columns: auto 1fr;

  .logoWrapper {
    grid-area: logo;
    .logo {
      height: 3rem;
      width: auto;
      object-fit: contain;
      padding: 0px 1rem;
    }
  }
  .navigations {
    grid-area: navigation;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const Nav = styled(NavLink)`
  cursor: pointer;
  color: var(--color-text);
  cursor: pointer;
  height: 100%;
  padding: 0px 0.5rem;
  position: relative;
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.1rem;
    width: 0%;
    background-color: var(--color-primary);
    transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &.active {
    color: var(--color-primary);
    &::before {
      width: 100%;
    }
  }
  &:hover {
    opacity: 0.8;
    &::before {
      width: 100%;
    }
  }
  &:active {
    opacity: 0.6;
  }
`;
