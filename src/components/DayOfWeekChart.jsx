import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';




function DayOfWeekChart() {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
  );

  const labels = ['Stellar Bloom', 'Sapphire Spoon', 'Zephyr Forge', 'Pinnacle Paws'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Count of work orders',
        data: [2, 10, 3, 7],
        backgroundColor: '#5aaadb',
      },
    ],
  };


  return (
    <Bar data={data} />
  )
}

export default DayOfWeekChart