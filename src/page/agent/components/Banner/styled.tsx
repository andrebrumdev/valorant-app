import styled from "styled-components";

export const BannerWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  height: max(30dvh, 30rem);
  position: relative;
  overflow: hidden;
  transform: skewX(2);
  .wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
  .bg {
    left: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: darken(1);
      z-index: 2;
    }
  }
  .overlay {
    border: solid rgba(131, 131, 131, 0.2);
    border-width: 0.2rem 0.2rem 0.5rem 0.2rem;
    background-color: #1f2324;
    opacity: 0.8;
    border-radius: 16px;
  }
  .blur {
    backdrop-filter: blur(1px);
  }
  .content {
    display: flex;
    position: relative;
    z-index: 2;
    height: 100%;
    width: 100%;
    .description {
      flex: 1;
    }
    .agent {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        transform: scale(2) translateY(15%);
      }
      @media screen and (max-width: 1000px) {
        img {
          transform: scale(1) translateY(0);
        }
      }
    }
  }
`;
