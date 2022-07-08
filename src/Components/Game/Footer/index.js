import React, { useState } from "react";
import {
  FooterContainer,
  FooterRow,
  SaveModal,
  SaveModalHash,
  SaveModalHelp,
  SaveModalInput,
  SaveModalRow,
} from "../../../Layout/Game/Footer";
import { BuyButton } from "../../../Layout/Game/GameController";

export const Footer = ({
  isChart,
  setIsChart,
  day,
  wallet,
  setWallet,
  money,
  setMoney,
  setDay,
  cryptocurrencies,
  handleReleaseCrypto,
}) => {
  const [isSave, setIsSave] = useState(false);
  const [isImport, setIsImport] = useState(false);
  const [importText, setImportText] = useState("");

  const handleInput = (e) => {
    setImportText(e.target.value);
  };

  const getPosition = (string, subString, index) => {
    return string.split(subString, index).join(subString).length;
  };

  const handleImport = () => {
    const regex = /(\d+(.\d+)?,)+\d+/;
    let text = "";
    try {
      text = atob(importText);
    } catch {
      alert("Incorrect import");
      return;
    }
    if (regex.exec(text) !== null) {
      const day = parseInt(text.substring(0, text.indexOf(",")));
      const money = parseFloat(
        text.substring(
          text.indexOf(",") + 1,
          text.indexOf(",", text.indexOf(",") + 1)
        )
      );
      let LTC = 0;
      let ETH = 0;
      let MATIC = 0;
      let BTC = 0;
      BTC = parseFloat(
        text.substring(getPosition(text, ",", 2) + 1, getPosition(text, ",", 3))
      );
      LTC = parseFloat(
        text.substring(getPosition(text, ",", 3) + 1, getPosition(text, ",", 4))
      );
      ETH = parseFloat(
        text.substring(getPosition(text, ",", 4) + 1, getPosition(text, ",", 5))
      );
      MATIC = parseFloat(text.substring(getPosition(text, ",", 5) + 1));
      setDay(day);
      handleReleaseCrypto(true);
      setMoney(parseFloat(money));
      let tempWallet = {
        BTC: parseFloat(BTC),
        LTC: parseFloat(LTC),
      };
      if (ETH) {
        cryptocurrencies[2].released = true;
        tempWallet = {
          BTC: parseFloat(BTC),
          LTC: parseFloat(LTC),
          ETH: parseFloat(ETH),
        };
      }
      if (MATIC) {
        cryptocurrencies[3].released = true;
        tempWallet = {
          BTC: parseFloat(BTC),
          LTC: parseFloat(LTC),
          ETH: parseFloat(ETH),
          MATIC: parseFloat(MATIC),
        };
      }
      setWallet(tempWallet);
    } else alert("Incorrect import");
  };

  const handleCryptoChart = () => {
    isChart === 2 ? setIsChart(1) : setIsChart(2);
  };

  const handleBalanceChart = () => {
    isChart === 3 ? setIsChart(1) : setIsChart(3);
  };

  return (
    <FooterContainer>
      {isSave && (
        <SaveModal>
          <SaveModalHelp>
            In order to save your progress copy content below and store it in
            some safe place. Then just click import button and paste it to load
            your progress.
          </SaveModalHelp>
          <SaveModalHash>
            {btoa(
              day +
                "," +
                money +
                "," +
                cryptocurrencies.map((c) => {
                  if (c.released === true) return wallet[c.shortName];
                  else return "";
                })
            )}
          </SaveModalHash>
          <BuyButton onClick={() => setIsSave(false)} sell>
            Close
          </BuyButton>
        </SaveModal>
      )}
      {isImport && (
        <SaveModal>
          <SaveModalHelp>
            Paste copied content below in order to load your progress.
          </SaveModalHelp>
          <SaveModalInput onChange={handleInput} />
          <SaveModalRow>
            <BuyButton
              onClick={() => {
                handleImport();
                setIsImport(false);
              }}
            >
              Load progress
            </BuyButton>
            <BuyButton onClick={() => setIsImport(false)} sell>
              Close
            </BuyButton>
          </SaveModalRow>
        </SaveModal>
      )}
      <FooterRow>
        <BuyButton onClick={handleCryptoChart} sell>
          {isChart === 2 ? "Exit" : "Your cryptos"}
        </BuyButton>
        <BuyButton onClick={handleBalanceChart}>
          {isChart === 3 ? "Exit" : "Balance history"}
        </BuyButton>
      </FooterRow>
      <FooterRow>
        <BuyButton
          onClick={() => {
            setIsSave(!isSave);
          }}
        >
          Save progress
        </BuyButton>
        <BuyButton
          onClick={() => {
            setIsImport(!isImport);
          }}
          sell
        >
          Import progress
        </BuyButton>
      </FooterRow>
    </FooterContainer>
  );
};
