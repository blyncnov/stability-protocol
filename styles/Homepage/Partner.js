import styled from "styled-components";

export const Partner__Container = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 2em 0;
  color: #fff;
  background-color: #000b19;
`;

export const Partner__Columns = styled.div`
  width: 100%;

  .Partners__Header {
    line-height: 1.5;
  }
`;

export const Partner__Grid = styled.div`
  width: 100%;
  padding: 1em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 0;
  column-gap: 100px;

  justify-content: center;
  text-align: center;

  .Partner__box h1 {
    transition: all 0.3s ease-in-out;
  }

  .Partner__box h1:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Partner__Container;
