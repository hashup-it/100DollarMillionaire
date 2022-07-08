import React, { useState } from "react";
import {
  HistoryClick,
  HistoryContent,
  HistoryElement,
} from "../../../Layout/Game/history";
import { historyElements } from "./historyElements";

export const HistoryStep = ({ setIntro }) => {
  const [active, setActive] = useState(0);
  return (
    <HistoryElement
      onClick={() => {
        if (active < historyElements.length - 1) setActive(active + 1);
        else setIntro(false);
      }}
    >
      <HistoryContent>{historyElements[active].contentText}</HistoryContent>
      <HistoryClick>Click anywhere to continue...</HistoryClick>
    </HistoryElement>
  );
};
