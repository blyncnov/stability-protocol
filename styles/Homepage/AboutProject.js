import styled from "styled-components";

export const AboutProject__Container = styled.div`
  width: 100%;
  background-color: white;
`;

export const AboutProject__Columns = styled.div`
  width: 100%;
  color: #333;
  line-height: 1.5;

  .aboutProject__header {
    padding: 1em 0;

    h1 {
      color: #333;
    }

    p {
      opacity: 0.9;
    }
  }
`;

export const AboutProject__Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0;
`;

export const AboutProject__Box = styled.div`
  width: 100%;
  background-color: white;
  padding: 1em;
  border-radius: 4px 0 0 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  line-height: 1.5;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:nth-child(1) {
    height: calc(200px + 3em);
  }

  &:nth-child(2) {
    background: rgb(22, 16, 133);
    background: linear-gradient(
      70deg,
      rgba(22, 16, 133, 1) 0%,
      rgba(20, 38, 85, 1) 35%,
      rgba(19, 130, 153, 1) 100%
    );
    transform: translate(10px 10px);
    // height: 250px;
    border-radius: 4px;
    color: #ffffff !important;
    gap: 2em;

    h2 {
      color: rgb(22, 16, 133);
      text-shadow: 0px 0px 10px rgb(225, 225, 225);
    }

    :hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px -1px,
        rgba(0, 0, 0, 0.06) 0px 4px 8px -1px;
      transform: scale(1.02);
    }
  }

  &:nth-child(3) {
    height: calc(200px + 3em);
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px -1px,
      rgba(0, 0, 0, 0.06) 0px 4px 8px -1px;
    transform: translateY(-2px);
  }

  h2 {
    color: rgb(10, 15, 49);
    opacity: 0.95;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 16px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export default AboutProject__Container;
