import React from "react";
import AgentCard from "./components/Agents/agents";
import { Grid } from "./styled";
import { useLoaderData } from "react-router-dom";

const Home: React.FC = () => {
  const agents = useLoaderData() as Agent[];
  console.log(agents);
  return (
    <section className="agent">
      <h1>Agentes</h1>
      <Grid>
        {agents?.map((agent) => {
          return <AgentCard agent={agent} />;
        })}
      </Grid>
    </section>
  );
};

export default Home;
