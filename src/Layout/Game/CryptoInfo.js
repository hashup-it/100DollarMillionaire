import styled from "styled-components";

export const CryptoInfoWrapper = styled.div`
  margin: 20px 20px 10px 20px;
  display: grid;
  grid-template-columns: 80px 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  background-color: white;
  grid-template-rows: 1;
  gap: 20px;
  box-shadow: -4px 0 0 0 black, 4px 0 0 0 black, 0 -4px 0 0 black,
    0 4px 0 0 black;
  cursor: pointer;

  &:hover {
    background-color: rgb(244, 244, 244);
  }
  @media (max-width: 1024px) {
    display: flex;
    font-size: 11px;
    max-width: 84vw;
    /* width: 75vw;
    max-width: 74.7vw; */
    padding: 5px;
    justify-content: center;
    gap: 5px;
    background: none;
    box-shadow: none;
  }
`;

export const CryptoIcon = styled.img`
  height: 80px;
  width: 80px;
  border-right: 4px solid black;
  background-color: white;
  @media (max-width: 1024px) {
    height: 50px;
    width: 50px;
  }
`;

export const Name = styled.p``;
export const Raise = styled.p``;
export const Price = styled.p``;
