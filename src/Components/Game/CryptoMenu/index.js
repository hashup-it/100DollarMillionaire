import { useEffect, useState } from "react";

import { Chart } from "../Chart/index";
import {
  CryptoMenuContainer,
  PeriodChoice,
} from "../../../Layout/Game/CryptoMenu";

import { CryptoList } from "../CryptoList";
import { Pie } from "react-chartjs-2";
import { BalanceChart } from "../BalanceChart";
import { BuyButton } from "../../../Layout/Game/GameController";

export const CryptoMenu = ({
  day,
  cryptocurrencies,
  crypto,
  setSelectedCrypto,
  isChart,
  setIsChart,
  wallet,
}) => {
  const [period, setPeriod] = useState(31);
  const [balancePeriod, setBalancePeriod] = useState(31);

  const checkIfCrypto = () => {
    for (let c in wallet) {
      if (wallet[c.valueOf()] > 0) return true;
    }
    return false;
  };

  const [ifCrypto, setIfCrypto] = useState(checkIfCrypto());

  useEffect(() => {
    setIfCrypto(checkIfCrypto());
  }, [Object.values(wallet), period]);

  const data = {
    labels: cryptocurrencies.map((c) => {
      return c.name;
    }),
    datasets: [
      {
        label: "% of cryptos",
        data: cryptocurrencies.map((c) => {
          return wallet[c.shortName] * c.priceHistory[day].price;
        }),
        backgroundColor: cryptocurrencies.map((c) => {
          return c.color;
        }),
        borderColor: "black",
        borderWidth: 3,
      },
    ],
  };

  return (
    <CryptoMenuContainer>
      {!isChart && (
        <CryptoList
          day={day}
          setSelectedCrypto={setSelectedCrypto}
          cryptocurrencies={cryptocurrencies}
          setIsChart={setIsChart}
        />
      )}
      {isChart === 1 && (
        <>
          <Chart
            day={day}
            selectedCrypto={crypto}
            setIsChart={setIsChart}
            period={period}
          />
          <PeriodChoice>
            <BuyButton onClick={() => setPeriod(7)}>1 week</BuyButton>
            <BuyButton onClick={() => setPeriod(31)}>1 month</BuyButton>
            <BuyButton onClick={() => setPeriod(182)}>6 months</BuyButton>
            <BuyButton onClick={() => setPeriod(365)}>1 year</BuyButton>
            <BuyButton onClick={() => setPeriod(day)}>Max</BuyButton>
          </PeriodChoice>
        </>
      )}
      {isChart === 2 && ifCrypto && (
        <div style={{ height: "80%" }}>
          <Pie data={data} />
        </div>
      )}
      {isChart === 2 && !ifCrypto && "No crypto owned:("}
      {isChart === 3 && (
        <>
          <BalanceChart
            day={day}
            selectedCrypto={crypto}
            setIsChart={setIsChart}
            isChart={isChart}
            period={balancePeriod}
          />
          <PeriodChoice>
            <BuyButton onClick={() => setBalancePeriod(7)}>1 week</BuyButton>
            <BuyButton onClick={() => setBalancePeriod(31)}>1 month</BuyButton>
            <BuyButton onClick={() => setBalancePeriod(182)}>
              6 months
            </BuyButton>
            <BuyButton onClick={() => setBalancePeriod(365)}>1 year</BuyButton>
            <BuyButton onClick={() => setBalancePeriod(day)}>Max</BuyButton>
          </PeriodChoice>
        </>
      )}
    </CryptoMenuContainer>
  );
};
