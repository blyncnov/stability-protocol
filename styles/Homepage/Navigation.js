import styled from "styled-components";

export const Navigation__Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 9;
  position: relative;
`;

export const Navigation__Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;

export const Navigation__Logo = styled.div`
  // color: #f4af1b;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

export const Navigation__Lists = styled.ul`
  display: flex;
  gap: 1em;
  color: #ffffff;

  li {
    transition: all 0.3s ease-in-out;
  }

  li a {
    font-famly: "Open Sans", sans-serif;
    font-weight: 520;
    transition: all 0.3s ease-in-out;
  }

  li:hover a {
    color: #f4af1b;
    transform: scale(1.1);
    text-decoration: underline;
    margin-left: 0.5em;
    padding-bottom: 0.5em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Navigation__Container;
