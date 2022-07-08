import { ChartContainer } from "../../../Layout/Game/Chart";
import { Line } from "react-chartjs-2";

export const Chart = ({ day, selectedCrypto, setIsChart, isChart, period }) => {
  const data = {
    labels: selectedCrypto.priceHistory
      .filter((e, i) => {
        return i >= day - period + 1 && i <= day;
      })
      .map((element) => {
        return element["Date"];
      }),
    datasets: [
      {
        pointStyle: "rect",
        label: selectedCrypto.name,
        data: selectedCrypto.priceHistory
          .filter((e, i) => {
            return i >= day - period && i <= day;
          })
          .map((element) => {
            return element["price"];
          }),
        backgroundColor: selectedCrypto.color,
        borderColor: selectedCrypto.color,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    animation: false,
  };

  // console.log(defaults.font.family);

  // defaults.font.family = "Press Start 2P";

  return (
    <ChartContainer onClick={() => setIsChart(false)}>
      <Line data={data} options={options} />
    </ChartContainer>
  );
};
