import React, { useState } from "react";
import { BTCpriceHistory } from "../../../BTCpriceHistory";
import {
  CryptoPrice,
  BuyButton,
  GameControllerContainer,
  NextDayButton,
  SellButton,
  BuyButtonOptions,
  SleepAnimation,
} from "../../../Layout/Game/GameController";

export const GameController = ({
  cryptoPrices,
  day,
  setDay,
  money,
  setMoney,
  crypto,
  cryptoName,
  setCryptoBalance,
  handleReleaseCrypto,
  balance,
  setWallet,
}) => {
  const [isBuy, setIsBuy] = useState(false);
  const [isSell, setIsSell] = useState(false);
  const [isSleep, setIsSleep] = useState(false);
  const [sleepAnimation, setSleepAnimation] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const handleGoToSleep = (days) => {
    if (day + days < BTCpriceHistory.length) {
      setDay(day + days);
      handleReleaseCrypto();
      if (days > 1) setSleepAnimation(true);
      setTimeout(() => {
        setSleepAnimation(false);
      }, 300);
    } else handleWin();
  };

  const handleWin = () => {
    if (balance >= 1000000) setIsWin(true);
    alert(isWin, "lol");
  };

  const handleBuy = (percent) => {
    if (money) {
      const amount = (percent * money) / 100;
      const boughtCrypto =
        Math.round((amount / cryptoPrices[day].price) * 1000000) / 1000000;
      setMoney(money - amount);
      setCryptoBalance(crypto + boughtCrypto);
    }
  };

  const handleSell = (percent) => {
    if (crypto) {
      const amount = (crypto * percent) / 100;
      const earn$ = cryptoPrices[day].price * amount;
      setMoney(money + earn$);
      setCryptoBalance(crypto - amount);
    }
  };

  const restartGame = () => {
    setDay(0);
    setMoney(100);
    setWallet({ BTC: 0, LTC: 0 });
    setIsWin(false);
  };

  return (
    <GameControllerContainer>
      {sleepAnimation && <SleepAnimation>...zZz</SleepAnimation>}
      {isWin && day === BTCpriceHistory.length - 1 && (
        <SleepAnimation>You win!</SleepAnimation>
      )}
      {!isWin && day === BTCpriceHistory.length - 1 && (
        <SleepAnimation onClick={restartGame}>You lose!</SleepAnimation>
      )}
      <CryptoPrice>
        {cryptoName}/USD: <div></div>
        {((cryptoPrices[day].price * 100) / 100).toFixed(4)}$
      </CryptoPrice>
      {!isBuy ? (
        <BuyButton onClick={() => setIsBuy(true)} buy>
          Buy
        </BuyButton>
      ) : (
        <BuyButtonOptions>
          <BuyButton
            onClick={() => {
              handleBuy(10);
              setIsBuy(false);
            }}
          >
            Buy 10%
          </BuyButton>
          <BuyButton
            onClick={() => {
              handleBuy(50);
              setIsBuy(false);
            }}
          >
            Buy 50%
          </BuyButton>
          <BuyButton
            onClick={() => {
              handleBuy(75);
              setIsBuy(false);
            }}
          >
            Buy 75%
          </BuyButton>
        </BuyButtonOptions>
      )}
      <BuyButton
        onClick={() => {
          handleBuy(100);
          setIsBuy(false);
        }}
      >
        All-in
      </BuyButton>
      {!isSell ? (
        <BuyButton onClick={() => setIsSell(true)} sell>
          Sell
        </BuyButton>
      ) : (
        <BuyButtonOptions sell>
          <BuyButton
            onClick={() => {
              handleSell(10);
              setIsSell(false);
            }}
            sell
          >
            Sell 10%
          </BuyButton>
          <BuyButton
            onClick={() => {
              handleSell(50);
              setIsSell(false);
            }}
            sell
          >
            Sell 50%
          </BuyButton>
          <BuyButton
            onClick={() => {
              handleSell(75);
              setIsSell(false);
            }}
            sell
          >
            Sell 75%
          </BuyButton>
        </BuyButtonOptions>
      )}
      <BuyButton
        onClick={() => {
          handleSell(100);
          setIsSell(false);
        }}
        sell
      >
        Sell all
      </BuyButton>
      <NextDayButton
        onClick={() => {
          handleGoToSleep(1);
          setIsSleep(false);
        }}
      >
        Go to sleep for 1 day
      </NextDayButton>
      {!isSleep ? (
        <NextDayButton onClick={() => setIsSleep(true)}>
          Go to sleep for...
        </NextDayButton>
      ) : (
        <BuyButtonOptions>
          <NextDayButton
            onClick={() => {
              handleGoToSleep(2);
              setIsSleep(false);
            }}
          >
            2 days
          </NextDayButton>
          <NextDayButton
            onClick={() => {
              handleGoToSleep(4);
              setIsSleep(false);
            }}
          >
            4 days
          </NextDayButton>
          <NextDayButton
            onClick={() => {
              handleGoToSleep(7);
              setIsSleep(false);
            }}
          >
            a week
          </NextDayButton>
        </BuyButtonOptions>
      )}
    </GameControllerContainer>
  );
};
