import React from "react";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./styled";
import Breadcrumbs from "./components/Breadcrumbs";

const Template: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Breadcrumbs/>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  );
};

export default Template;
