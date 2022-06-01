import styled from "styled-components";

export const Vision__Container = styled.div`
  width: 100%;
  padding: 1em 0;
`;

export const Vision__Columns = styled.div`
  width: 100%;
  color: #333;

  .vision__header {
    padding: 1em 0;

    h1 {
      color: #333;
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
