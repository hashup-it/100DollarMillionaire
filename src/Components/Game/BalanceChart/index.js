import { ChartContainer } from "../../../Layout/Game/Chart";
import { Line } from "react-chartjs-2";
import { balanceHistory } from "../ScoreBoard/balanceHistory";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

export const BalanceChart = ({ day, selectedCrypto, setIsChart, period }) => {
  const data = {
    labels: selectedCrypto.priceHistory
      .filter((e, i) => {
        return i >= day - period - 1 && i <= day - 2;
      })
      .map((element) => {
        return element["Date"];
      }),
    datasets: [
      {
        pointStyle: "rect",
        label: "Balance",
        data: balanceHistory.slice(-period),
        // .filter((e, i) => {
        //   return i >= day - 31 && i <= day;
        // })
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    animation: false,
    fontFamily: "Press Start 2P",
    scales: {
      yAxes: {
        grid: {
          drawBorder: true,
          color: "black",
          font: "Press Start 2P",
        },
        ticks: {
          beginAtZero: true,
          color: "black",
          fontSize: 12,
          font: "Press Start 2P",
        },
      },
      xAxes: {
        grid: {
          drawBorder: true,
          color: "black",
          font: "Press Start 2P",
        },
        ticks: {
          beginAtZero: true,
          color: "black",
          fontSize: 12,
          font: "Press Start 2P",
        },
      },
    },
  };
  // console.log(defaults.font.family);

  // defaults.font.family = "Press Start 2P";

  return (
    <ChartContainer onClick={() => setIsChart(false)}>
      <Line data={data} options={options} />
    </ChartContainer>
  );
};
