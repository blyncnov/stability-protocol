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
    z-index: 2;
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
  padding: 5em 0;
  line-height: 1.5;

  .HeroSection__Button {
    margin-top: 1em;
    padding: 12px 24px;
    border: none;
    border-radius: 3px;
    background-color: #d28101;
    color: #00154f;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5em;
    animation: myButtonAnim 1s ease 0s 1 normal forwards;

    &:hover {
      background-color: #bb7302;
    }

    @keyframes myButtonAnim {
      0% {
        opacity: 0;
        transform: translateX(-250px);
      }

      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const HeroSection__CTO = styled.div`
  width: 100%;
  max-width: 100%;
  font-family: "Open Sans", sans-serif;
  position: relative;
  z-index: 3;

  h1 {
    font-size: 40px;
    animation: myH1Anim 1s ease 0s 1 normal forwards;
  }

  p {
    margin: 1em 0;
    font-size: 17px;
    font-weight: 500;
    line-height: 25px !important;
  }

  @keyframes myH1Anim {
    0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: translateY(-250px);
    }

    38% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: translateY(0);
    }

    55% {
      animation-timing-function: ease-in;
      transform: translateY(-65px);
    }

    72% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }

    81% {
      animation-timing-function: ease-in;
      transform: translateY(-28px);
    }

    90% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }

    95% {
      animation-timing-function: ease-in;
      transform: translateY(-8px);
    }

    100% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  }

  .CTO__button {
    display: flex;
    gap: 1em;
    font-size: 16px !important;
  }

  .CTO__button .waitlist {
    background-color: transparent;
    border: 1px solid #d28101;
    color: #d28101;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 15px;
    }

    .HeroSection__Button {
      padding: 12px 24px;
      font-size: 14px;
      font-weight: bold;
    }
  }

  img {
    width: 100% !important;
    max-width: 100%;
    animation: myAnim 1s ease 0s 1 normal forwards;
  }

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default Header;
