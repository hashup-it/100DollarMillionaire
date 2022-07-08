/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CryptoMenu } from "./CryptoMenu";
import { Footer } from "./Footer";
import { GameController } from "./GameController";
import { GameTitle } from "./GameTitle";
import { ScoreBoard } from "./ScoreBoard";
import { GameContainer, HashUpLogo, Intro } from "../../Layout/Game/index";

import { Cryptocurrency } from "../../Cryptocurrency";
import { LTCpriceHistory } from "../../LTCpriceHistory";
import { BTCpriceHistory } from "../../BTCpriceHistory";
import { ETHpriceHistory } from "../../ETHpriceHistory";
import { MATICpriceHistory } from "../../MATICpriceHistory";
import { balanceHistory } from "./ScoreBoard/balanceHistory";
import { HistoryStep } from "./HistoryIntro/historyStep";

export const Game = () => {
  const [money, setMoney] = useState(100);
  const [day, setDay] = useState(0);
  const [chartOption, setChartOption] = useState(1);
  const [isIntro, setIsIntro] = useState(true);
  const [activeElement, setActiveElement] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const [cryptocurrencies, setCryptocurrencies] = useState([
    new Cryptocurrency(
      "Bitcoin",
      "BTC",
      "orange",
      BTCpriceHistory,
      "bitcoin.png",
      0,
      true
    ),
    new Cryptocurrency(
      "Litecoin",
      "LTC",
      "red",
      LTCpriceHistory,
      "litecoin.png",
      0,
      true
    ),
    new Cryptocurrency(
      "Ethereum",
      "ETH",
      "blue",
      ETHpriceHistory,
      "eth.jpg",
      1149
    ),
    new Cryptocurrency(
      "Polygon",
      "MATIC",
      "magenta",
      MATICpriceHistory,
      "polygon.png",
      1684
    ),
  ]);

  const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0]);

  const handleReleaseCrypto = (ifImport = false) => {
    for (let c of cryptocurrencies) {
      if (c.releaseDate <= day + 1 && c.released === false) {
        c.released = true;

        if (!ifImport) {
          const tempWallet = wallet;
          tempWallet[c.shortName] = 0;
          setWallet(tempWallet);
        }
      }
    }
  };

  const [wallet, setWallet] = useState({
    BTC: 0,
    LTC: 0,
  });

  const calculateBalance = () => {
    let balance = money;
    for (let c of cryptocurrencies) {
      if (wallet[c.shortName]) {
        balance += wallet[c.shortName] * c.priceHistory[day].price;
      }
    }
    return balance;
  };

  const [balance, setBalance] = useState(calculateBalance());

  useEffect(() => {
    setBalance(calculateBalance());
    if (day >= balanceHistory.length) {
      while (day >= balanceHistory.length) balanceHistory.push(balance);
    } else balanceHistory.push(balance);
  }, [balance, calculateBalance, day]);

  const handleSetCryptoBalance = (amount) => {
    const tempWallet = wallet;
    tempWallet[selectedCrypto.shortName] = amount;
    setWallet(tempWallet);
  };

  return (
    <GameContainer>
      {isIntro && (
        <Intro
          onClick={() => {
            setIsClicked(true);
            if (!isClicked) {
              setActiveElement(1);
              setTimeout(() => {
                setActiveElement(2);
                // setTimeout(() => {
                //   setActiveElement(3);
                //   //setIsIntro(false);
                // }, 3000);
              }, 2000);
            }
          }}
        >
          {activeElement === 0 && "Click anywhere to start"}
          {activeElement === 1 && (
            <div>
              <HashUpLogo src="https://cdn.hashup.it/Avatar_hash.png" />
            </div>
          )}
          {
            //   activeElement === 2 && (
            //   <License>
            //     The MIT License (MIT)
            //     <br />
            //     <br />
            //     Copyright (c) 2014 Gabriele Cirulli
            //     <br />
            //     <br />
            //     Permission is hereby granted, free of charge, to any person
            //     obtaining a copyof this software and associated documentation
            //     files (the "Software"), to deal in the Software without
            //     restriction, including without limitation the rights to use, copy,
            //     modify, merge, publish, distribute, sublicense, and/or sell copies
            //     of the Software, and to permit persons to whom the Software is
            //     furnished to do so, subject to the following conditions:
            //     <br />
            //     <br /> The above copyright notice and this permission notice shall
            //     be included it all copies or substantial portions of the Software.
            //     <br />
            //     <br /> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
            //     KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
            //     WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
            //     AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
            //     HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
            //     WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            //     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
            //     DEALINGS IN THE SOFTWARE
            //   </License>
            // )
          }
          {activeElement === 2 && <HistoryStep setIntro={setIsIntro} />}
        </Intro>
      )}

      <GameTitle />
      <ScoreBoard
        money={money}
        cryptoPrices={selectedCrypto.priceHistory}
        cryptoName={selectedCrypto.shortName}
        day={day}
        wallet={wallet}
        cryptocurrencies={cryptocurrencies}
        balance={balance}
      />
      <GameController
        cryptoPrices={selectedCrypto.priceHistory}
        cryptoName={selectedCrypto.shortName}
        crypto={wallet[selectedCrypto.shortName]}
        handleReleaseCrypto={handleReleaseCrypto}
        day={day}
        setDay={setDay}
        money={money}
        setMoney={setMoney}
        setCryptoBalance={handleSetCryptoBalance}
        balance={balance}
        setWallet={setWallet}
      />
      <CryptoMenu
        day={day}
        crypto={selectedCrypto}
        cryptocurrencies={cryptocurrencies}
        setSelectedCrypto={setSelectedCrypto}
        isChart={chartOption}
        setIsChart={setChartOption}
        wallet={wallet}
      />

      <Footer
        isChart={chartOption}
        setIsChart={setChartOption}
        day={day}
        wallet={wallet}
        setWallet={setWallet}
        setDay={setDay}
        setMoney={setMoney}
        money={money}
        cryptocurrencies={cryptocurrencies}
        handleReleaseCrypto={handleReleaseCrypto}
      />
    </GameContainer>
  );
};
