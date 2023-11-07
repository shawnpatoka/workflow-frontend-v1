import { useEffect } from "react"

function CircularProgress({ value, color, statusName }) {

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var svg = document.querySelector('.donut');
      svg.classList.add('animate');
    });
  }, [])


  const valueSet = `${value} ${100 - value}`


  return (
    <>
      <div className="d-flex flex-column">
        <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
          <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>
          <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke={color} stroke-width="3" stroke-dasharray={valueSet} stroke-dashoffset="-25"></circle>

          <g class="chart-text">
            <text x="50%" y="50%" class="chart-number">
              {value}%
            </text>
          </g>
        </svg >
        <p className="text-center mb-1" style={{ color: '#50575c' }}>{statusName}</p>
      </div>
    </>
  )
}

export default CircularProgress