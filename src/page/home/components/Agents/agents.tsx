import React from "react";
import { Card } from "./styled";

type TAgentCard = {
  agent: Agent;
};
const AgentCard: React.FC<TAgentCard> = ({ agent }) => {
  function getImage() {
    return agent.fullPortrait || agent.bustPortrait || agent.fullPortraitV2;
  }
  return (
    <Card colors={agent.backgroundGradientColors} to={`/agent/${agent.uuid}`}>
      <div className="bg">
        <img src={agent.background} />
      </div>
      <div className="imgContainer">
        <img src={getImage()} />
      </div>
      <div className="content" title={agent.description}>
        <div className="description">
          <div className="name">{agent.displayName}</div>
          <div className="info">{agent.role.displayName}</div>
        </div>
        <div className="icon">
          <img src={agent.role.displayIcon} />
        </div>
      </div>
    </Card>
  );
};

export default AgentCard;
