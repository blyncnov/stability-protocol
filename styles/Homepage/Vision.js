import styled from "styled-components";

export const Vision__Container = styled.div`
  width: 100%;
  padding: 1em 0;
`;

export const Vision__Columns = styled.div`
  width: 100%;
  color: #333;
  line-height: 1.5;

  .vision__header {
    padding: 1em 0;

    h1 {
      color: #333;
    }

    p {
      opacity: 0.9;
    }
  }
`;

export const Vision__Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5em;
`;

export const Vision__Box = styled.div`
  width: 100%;
  background-color: white;
  padding: 1em;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  line-height: 1.5;
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px -1px,
      rgba(0, 0, 0, 0.06) 0px 4px 8px -1px;
    transform: translateY(-2px);
  }

  h2 {
    color: rgb(10, 15, 49);
    opacity: 0.95;
  }

  h2::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    margin-top: 0.5em;
  }

  @media (max-width: 768px) {
    // text-align: center;

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export default Vision__Container;
