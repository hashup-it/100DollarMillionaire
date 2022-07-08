import styled from "styled-components";

export const GameControllerContainer = styled.div`
  border: 4px solid black;
  border-right: none;

  /* display: grid;
  grid-template-rows: 1fr 0.7fr 0.7fr 0.8fr; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 0;
    border-bottom: none;
    border-right: 4px solid black;
  }
`;

export const BuyButton = styled.div`
  width: 80%;

  margin: 10px auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 4px solid rgb(255, 255, 255, 0.4);
  border-bottom: 4px solid rgb(255, 255, 255, 0.4);
  background: ${(props) => (props.sell ? "red" : "#006400")};
  color: white;
  cursor: pointer;
  text-align: center;
  box-shadow: -4px 0 0 0 black, 4px 0 0 0 black, 0 -4px 0 0 black,
    0 4px 0 0 black;
  box-shadow: -3px 0 0 0 black, 3px 0 0 0 black, 0 -3px 0 0 black,
    0 3px 0 0 black;

  &:hover {
    box-shadow: -4px 0 0 0 black, 4px 0 0 0 black, 0 -4px 0 0 black,
      0 4px 0 0 black;
  }

  &:active {
    color: #006400;
    background: white;
    box-shadow: -3px 0 0 0 black, 3px 0 0 0 black, 0 -3px 0 0 black,
      0 3px 0 0 black;
  }
  @media (max-width: 1024px) {
    width: 60%;
    margin: 5px;
    padding: 2px;
  }
`;

export const CryptoPrice = styled.div`
  border-bottom: 4px solid black;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 100;
  margin-bottom: 3px;
  padding: 3px;
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
    height: 20%;
  }
`;

export const NextDayButton = styled.div`
  width: 77%;
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  background-color: rgb(100, 100, 100);
  color: white;

  margin: 10px auto;

  //margin: 10px;
  box-shadow: -4px 0 0 0 black, 4px 0 0 0 black, 0 -4px 0 0 black,
    0 4px 0 0 black;
  border: 4px solid rgb(255, 255, 255, 0.4);
  @media (max-width: 1024px) {
    width: 60%;
    margin: 5px;
    padding: 2px;
  }
`;

export const BuyButtonOptions = styled.div`
  display: flex;
  //width: 100%;
  font-size: 12px;
  margin: 0 15px;
`;

export const SleepAnimation = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 80px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;
