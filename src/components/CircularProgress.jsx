import { useEffect } from "react"

function CircularProgress({ value, color, statusName }) {

  const valueSet = `${value} ${100 - value}`


  return (
    <>
      <div className="m-0">
        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
          <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
          <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke={color} strokeWidth="3" strokeDasharray={valueSet} strokeDashoffset="-25"></circle>
          <g className="chart-text">
            <text x="50%" y="50%" className="chart-number">
              {value}%
            </text>
          </g>
        </svg >
        <p className="text-center mb-0" style={{ color: '#50575c' }}>{statusName}</p>
      </div>
    </>
  )
}

export default CircularProgress