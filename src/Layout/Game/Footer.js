import styled from "styled-components";

export const FooterContainer = styled.div`
  grid-area: footer;
  border: 4px solid black;
  border-top: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  @media (max-width: 1024px) {
    border: none;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  grid-gap: 10px;
  width: 100%;
`;

export const SaveModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-gap: 30px;
  width: 40vw;
  height: 30vh;
  left: 30%;
  top: 35%;
  padding: 20px;
  background: rgb(235, 81, 81);
  background: linear-gradient(
    45deg,
    rgba(235, 81, 81, 1) 15%,
    rgba(219, 196, 196, 1) 44%
  );
  border: 4px solid black;

  @media (max-width: 1024px) {
    height: 86.5vh;
    width: 86.5vw;
    top: 0;
    left: 0;
  }
`;

export const SaveModalInput = styled.input`
  padding: 10px;
  font-family: "Press start 2P";
`;

export const SaveModalRow = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const SaveModalHash = styled.div`
  word-break: break-all;
`;

export const SaveModalHelp = styled.div`
  font-size: 14px;
`;
