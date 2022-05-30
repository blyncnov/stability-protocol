import styled from "styled-components";

export const Navigation__Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Navigation__Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation__Logo = styled.ul`
  color: #f4af1b;
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
