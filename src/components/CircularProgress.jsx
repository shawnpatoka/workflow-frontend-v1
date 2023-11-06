import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function CircularProgress({ value, color, statusName }) {


  ChartJS.register(ArcElement, Tooltip, Legend);


  const data = {
    labels: ['Filled', 'Empty'],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, '#ccc'],
        borderWidth: 2,
        cutout: 85,
      }
    ]
  };


  const options = {
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        display: false
      },
      onHover: null // Disable hover interactions
    }
  };

  // Custom plugin to draw text in the center
  const centerTextPlugin = {
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const width = chart.canvas.width;
      const height = chart.canvas.height;

      ctx.restore();
      const fontSize = (height / 115).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      const text = `${value}%`; // Add your desired text here
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillStyle = '#575b62';
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  };


  return (
    <>

      <div className="mt-2" style={{ width: '30%', height: 'auto' }}>
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
        <p className="text-center mt-3 mb-1" style={{ color: '#50575c' }}>{statusName}</p>
      </div>

    </>
  )
}

export default CircularProgress