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

export const Navigation__StickToTop = styled.div`
//  position: fixed;
  width: 100%;
  top: 1em;
  }
`;

export const Navigation__Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 position: relative;

  }
`;

export const Navigation__Logo = styled.div`
  color: #f4af1b;
  display: flex;
  align-items: center;
  // z-index: 999999;
`;

export const Navigation__Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
    display: block;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    text-align: start;
    padding: 1em;
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background: rgba(20, 38, 85);
    padding: 20px;
    transition: all 0.2s ease-in-out;

    li {
      margin: 1em 0;
      // border-bottom: 1px solid #333;
    }
  }
`;

export const Navigation__Mobile = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
      z-index: 99999;

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

  .Navigation__bar {
    display: none;
      z-index: 999999;
  }

    @media (max-width: 800px) {
    .Navigation__Button {
      font-weight: bold;
    }

  @media (max-width: 800px) {
    display: flex;

    .Navigation__bar {
      display: flex;
    }
  }
`;

export default Navigation__Container;
