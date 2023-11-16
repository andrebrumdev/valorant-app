import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useFetch";
import { agentRequest } from "../../service/agents";
import { ImageColoring } from "./styled";

const Agent: React.FC = () => {
  const { uuid } = useParams();
  const { url, params } = agentRequest(uuid || "");
  const { data: agentResponse } = useAxios<Response<Agent>>(url, params);
  const agent = agentResponse?.data;
  const color = `#${agent?.backgroundGradientColors[0]}`;
  return (
    <section>
      <div>
        <h1 style={{ color }}>{agent?.displayName}</h1>
        <p>{agent?.description}</p>
      </div>
      <div>
        {agent?.backgroundGradientColors.map((color) => (
          <div
            style={{
              width: 32,
              height: 32,
              background: `#${color}`,
              borderRadius: "50%",
            }}
          />
        ))}
      </div>
      <div>
        <h2>{agent?.role.displayName}</h2>
        <p>{agent?.role.description}</p>
      </div>
      <div>
        {agent?.abilities.map((ability) => (
          <div>
            <h3>
              {ability.displayName}{" "}
              <ImageColoring
                  src={`${ability.displayIcon}`}
                style={{
                  filter: `drop-shadow( 0px 0px 5px ${color})`,
                }}
              >
                {/* <img src={ability.displayIcon} /> */}
                {/* <div className="color-overlay" /> */}
              </ImageColoring>
            </h3>
            <p>{ability.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agent;
