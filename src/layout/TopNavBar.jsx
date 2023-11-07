import { Link } from "react-router-dom"
import Logo from "../assets/Logo"

function TopNavBar() {
  return (
    <nav className="navbar bg-white-full fixed-top p-0" style={{ height: '50px' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <button className="btn btn-regular btn-transparent">
          <i className="bi btn-small bi-list" style={{ fontSize: '1.25rem' }}></i>
        </button>

        <Link to='/'><Logo isDarkMode={false} /></Link>


        <button className="btn btn-regular btn-transparent">
          <i className="bi bi-person-circle" style={{ fontSize: '1.25rem', color: '#a3a3a3' }}></i>
        </button>
      </div>
    </nav>
  )
}

export default TopNavBar