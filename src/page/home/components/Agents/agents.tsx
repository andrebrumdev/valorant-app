import React from "react";
import { Card } from "./styled";

type TAgentCard = {
  agent: Agent;
};
const AgentCard: React.FC<TAgentCard> = ({ agent }) => {
  function getImage() {
    return agent.fullPortrait || agent.bustPortrait || agent.fullPortraitV2;
  }
  const redirectLink = `${agent.uuid}`;
  return (
    <Card colors={agent.backgroundGradientColors} to={redirectLink} end>
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
