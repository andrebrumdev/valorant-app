import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import { ImageColoring } from "./styled";

const Agent: React.FC = () => {
  const agent = useLoaderData() as Agent;
  const color = `#${agent?.backgroundGradientColors[0]}`;
  return (
    <section>
      <Banner agent={agent} color={color}/>
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
  return <></>
};

export default Agent;
