import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
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
  position: relative;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    filter: blur(8px);
  }
`;

export const HeroSection__Columns = styled.div`
  display: grid;
  gap: 3em;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  //   height: calc(90vh - 70px);
  padding: 5em 0;
  line-height: 1.5;

  .text {
    width: 100%;
    max-width: 100%;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    position: relative;
    z-index: 9;
  }

  .text h1 {
    font-size: 32px;
  }

  .text p {
    margin: 1em 0;
    font-size: 15px;
  }

  button {
    margin-top: 1em;
    padding: 12px 24px;
    border: none;
    border-radius: 3px;
    background-color: #f4af1b;
    color: #00154f;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }

  .text img {
    width: 100% !important;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export default Header;
