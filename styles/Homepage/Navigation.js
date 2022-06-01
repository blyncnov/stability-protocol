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

  .Navigation__Button {
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    background-color: #d28101;
    color: #00154f;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #bb7302;
    }
  }

  @media (max-width: 800px) {
    .Navigation__Button {
      font-weight: bold;
    }
  }
`;

export const Navigation__Logo = styled.div`
  color: #f4af1b;
  display: flex;
  align-items: center;
`;

export const Navigation__Lists = styled.ul`
  display: flex;
  gap: 1em;
  color: #ffffff;
  align-items: center;

  li {
    transition: all 0.3s ease-in-out;
  }

  li a {
    font-famly: "Open Sans", sans-serif;
    font-weight: 520;
    font-size: 1.1rem;
    transition: all 0.3s ease-in-out;
  }

  li:hover a {
    color: #f4af1b;
    transform: scale(1.1);
    text-decoration: underline;
    margin-left: 0.5em;
    padding-bottom: 0.5em;
  }

  @media (max-width: 800px) {
    li {
      display: none;
    }
  }
`;

export const Navigation__Mobile = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  .Navigation__bar {
    display: none;
  }

  @media (max-width: 800px) {
    display: flex;

    .Navigation__bar {
      display: flex;
    }
  }
`;

export default Navigation__Container;
