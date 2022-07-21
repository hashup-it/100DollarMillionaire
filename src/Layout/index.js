import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: "Press Start 2P", cursive;
  height: 100vh;
  width: 100vw;
  max-height: auto;
  max-width: 100vw;
  background: rgb(235, 81, 81);
  background: linear-gradient(
    45deg,
    rgba(235, 81, 81, 1) 15%,
    rgba(219, 196, 196, 1) 44%
  );
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  margin: -8px 0 -100px -8px;
  @media (max-width: 1024px) {
    height: 100vh;
    max-height: 120vh;
    width: 100vw;
    max-width: 100vw;
  } ;
`;
