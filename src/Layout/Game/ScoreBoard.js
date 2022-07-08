import styled from "styled-components";

export const ScoreBoardContainer = styled.div`
  color: rgb(51, 51, 51);

  margin: 10px 0px;
  padding: 10px;
  margin-left: 18%;
  width: 80%;

  @media (max-width: 1024px) {
    margin: 0;
    margin-top: 10px;
    font-size: 12px;
  }
`;

export const ScoreBoardValue = styled.span`
  float: right;
  /* @media (max-width: 1024px) {
    float: none;
  } */
`;
