import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Agent from "../page/agent";

function RoutesApps() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route to Initial */}
        <Route path={"/"} element={<Home />} />
        <Route path={"/agent/:uuid"} element={<Agent />} />
        {/* 404 Page */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApps;
