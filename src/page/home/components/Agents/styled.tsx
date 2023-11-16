import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Card = styled(NavLink)<{ colors: string[] }>`
  width: 20rem;
  height: 20rem;
  padding: 16px;
  border-radius: 16px;
  position: relative;
  background-image: linear-gradient(
    180deg,
    ${({ colors }) => `#${colors[0]}`},
    #1f2324
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.8);
  overflow: hidden;
  .content {
    min-height: 3rem;
    backdrop-filter: blur(1.5rem);
    background-color: rgba(12, 1, 37, 0.2);
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 2;
    border: solid 0.1rem rgba(131, 131, 131, 0.2);
    .description {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      line-height: 1.1rem;

      .name {
        font-weight: bold;
        font-size: 1.2rem;
      }
      .info {
        font-size: 0.8rem;
        opacity: 0.7;
      }
    }
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      background: rgba(218, 218, 218, 0.3);
      border: solid 1px rgba(131, 131, 131, 0.2);
      padding: 0.4rem;
      border-radius: 50%;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
  .imgContainer {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      object-fit: contain;
      width: 100%;
      height: 100%;
      position: absolute;
      transform: scale(3);
      bottom: -80%;
    }
  }
  .bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: -5%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 10%;
      filter: darken(1);
      z-index: 2;
    }
  }
  box-shadow: 0px 0rem 0.5rem #1f2324;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  &:hover {
    box-shadow: 0px 1rem 2rem ${({ colors }) => `#${colors[0]}`};
    .imgContainer img {
      transform: scale(2);
      bottom: -30%;
    }
  }
`;
