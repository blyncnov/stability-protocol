import styled from "styled-components";

export const Footer__Container = styled.div`
  width: 100%;
  padding: 2em 0;
  color: #ffffff;
  background-color: #00154f;
  background: rgb(22, 16, 133);
  background: url(/bg1.png),
    linear-gradient(
      70deg,
      rgba(22, 16, 133, 1) 0%,
      rgba(20, 38, 85, 1) 35%,
      rgba(19, 130, 153, 1) 100%
    ),
    url(/bg4.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: botom right;
  margin: 0 0 0 0;
  text-align: center;

  &::after {
    content: "fff";
    position: absolute;
    top: -10px;
    width: 50vw;
    height: 10px;
  }
`;

export default Footer__Container;
