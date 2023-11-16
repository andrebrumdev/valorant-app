import React from "react";
import useAxios from "../../hooks/useFetch";
import { agentsRequest } from "../../service/agents";
import "./style.css";
import AgentCard from "./components/Agents/agents";

const Home: React.FC = () => {
  const { data: agentsResponse } = useAxios<Response<Agent[]>>(
    agentsRequest.url,
    agentsRequest.params
  );

  return (
    <section className="agent">
      <h1>Agentes</h1>
      <div className="grid">
        {agentsResponse?.data.map((agent) => {
          return <AgentCard agent={agent} />;
        })}
      </div>
    </section>
  );
};

export default Home;
