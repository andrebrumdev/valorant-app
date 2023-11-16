import React from "react";
import { BannerWrapper } from "./styled";

// import { Container } from './styles';
type TBanner = {
  agent?: Agent;
  color: string;
};
const Banner: React.FC<TBanner> = ({ agent, color }) => {
  return (
    <BannerWrapper style={{ background: color }}>
      <div className="wrapper bg">
        <img src={agent?.background} />
      </div>
      <div className="wrapper overlay" />
      <div className="content">
        <div className="description">

        </div>
        <div className="agent">
          <img src={agent?.bustPortrait} />
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
