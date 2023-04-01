import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const dataToUse = [30, 40, 50, 20, 50, 80, 90];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataToUse,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: dataToUse,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function FirstChart() {
  return <Bar options={options} data={data} />;
}
