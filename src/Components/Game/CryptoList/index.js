import { CryptoListContainer } from "../../../Layout/Game/CryptoList";

import {
  CryptoIcon,
  CryptoInfoWrapper,
  Name,
  Price,
  Raise,
} from "../../../Layout/Game/CryptoInfo";

export const CryptoList = ({
  day,
  cryptocurrencies,
  setSelectedCrypto,
  setIsChart,
}) => {
  const handleSelectCryptocurrency = (selectedCrypto) => {
    setSelectedCrypto(selectedCrypto);
    setIsChart(1);
  };

  return (
    <CryptoListContainer>
      {cryptocurrencies.map((el) => {
        return (
          el.released && (
            <CryptoInfoWrapper
              key={el.name}
              onClick={() => handleSelectCryptocurrency(el)}
            >
              <CryptoIcon src={"images/cryptoIcons/" + el.image}></CryptoIcon>
              <Name>
                {el.name} <br></br>
                {el.shortName}
              </Name>
              <Price>{el.priceHistory[day].price}$ </Price>
              {day > 0 && (
                <Raise>
                  {(
                    ((el.priceHistory[day].price -
                      el.priceHistory[day - 1].price) /
                      el.priceHistory[day - 1].price) *
                    100
                  ).toFixed(2)}
                  %
                </Raise>
              )}
            </CryptoInfoWrapper>
          )
        );
      })}
    </CryptoListContainer>
  );
};
