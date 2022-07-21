import React from "react";
import {
  ScoreBoardContainer,
  ScoreBoardValue,
} from "../../../Layout/Game/ScoreBoard";

export const ScoreBoard = ({
  money,
  cryptoPrices,
  day,
  cryptocurrencies,
  wallet,
  balance,
}) => {
  // const calculateBalance = () => {
  //   let balance = money;
  //   for (let c of cryptocurrencies) {
  //     if (wallet[c.shortName]) {
  //       balance += wallet[c.shortName] * c.priceHistory[day].price;
  //     }
  //   }
  //   return balance;
  // };

  // const [balance, setBalance] = useState(calculateBalance());

  // useEffect(() => {
  //   setBalance(calculateBalance());
  //   if (day >= balanceHistory.length) {
  //     while (day >= balanceHistory.length) balanceHistory.push(balance);
  //   } else balanceHistory.push(balance);
  // }, [day]);

  return (
    <ScoreBoardContainer>
      {Object.keys(wallet).map((el, i) => {
        return (
          <div key={i}>
            {el}:{" "}
            <ScoreBoardValue>
              {(Math.round(wallet[el] * 1000000) / 1000000).toFixed(4)} {el}
            </ScoreBoardValue>{" "}
            <div></div>
          </div>
        );
      })}
      Balance: <ScoreBoardValue>{balance.toFixed(2)}$</ScoreBoardValue>
      <div></div>
      Money: <ScoreBoardValue>{money.toFixed(2)}$</ScoreBoardValue>
      <div></div>
      In crypto:{" "}
      <ScoreBoardValue>{(balance - money).toFixed(2)}$</ScoreBoardValue>
      <div></div>
      Day: <ScoreBoardValue>{cryptoPrices[day].Date}</ScoreBoardValue>
    </ScoreBoardContainer>
  );
};
