import styled from "styled-components";
export const CryptoMenuContainer = styled.div`
  border: 4px solid black;
  //background-color: rgb(220,220,220);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* @media (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
    height: 70%;
  } */
`;

export const PeriodChoice = styled.div`
  margin: 0 10px;
  display: flex;
  grid-gap: 20px;
  font-size: 10px;
  @media (max-width: 1024px) {
    grid-gap: 3px;
    margin: 0;
  }
`;
