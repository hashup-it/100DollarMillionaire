import styled from "styled-components";

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-template-areas:
    "title scoreboard"
    "controller cryptomenu"
    "footer footer";
  width: 50vw;
  height: 60vh;
  margin: 0;
  //margin: 0 auto;
  justify-content: center;
  //align-items: center;
  //margin-top: 10vh;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin-top: 0;
  }
`;

export const HashUpLogo = styled.img`
  width: 25vw;
`;

export const License = styled.div`
  width: 60vw;
  height: 80vh;
  text-align: start;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;

export const Intro = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 25px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;
