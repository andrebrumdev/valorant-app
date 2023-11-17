import React from "react";
import logo from "../../../../assets/icon.svg";
import { Header, Nav } from "./styled";

const TopBar: React.FC = () => {
  return (
    <Header>
      <a href="/" className="logoWrapper center">
        <img src={logo} className="logo" />
      </a>
      <div className="navigations">
        <Nav className="center" to={"/"}>
          Home
        </Nav>
        <Nav className="center" to={"/agents"}>
          Agentes
        </Nav>
      </div>
    </Header>
  );
};

export default TopBar;
