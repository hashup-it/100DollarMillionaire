import styled from "styled-components";

export const HistoryElement = styled.div`
  width: 100vw;
  height: 100vh;
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const HistoryContent = styled.div`
  width: 80%;
`;

export const HistoryClick = styled.div`
  font-size: 15px;
  position: absolute;
  bottom: 5vh;
`;
