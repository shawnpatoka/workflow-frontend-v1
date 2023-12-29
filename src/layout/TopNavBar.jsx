import { Link } from "react-router-dom"
import Logo from "../assets/Logo"

function TopNavBar() {


  return (
    <nav className="container-fluid top-bar fixed-top d-flex justify-content-between align-items-center">

      <button className="btn btn-transparent" style={{ margin: '0 0 0 0', padding: '.15rem .5rem 0 .5rem' }} data-bs-toggle="offcanvas" data-bs-target="#sideNavBar" aria-controls="sideNavBar">
        <i className="bi bi-list" style={{ fontSize: '1.25rem' }}></i>
      </button>

      <Link to='/'><Logo isDarkMode={false} /></Link>


      <div data-bs-toggle="dropdown" aria-expanded="false" className="profile-icon"><i className="bi bi-person-circle"></i></div>
      <ul className="dropdown-menu">
        <li>
          <h6 className="dropdown-header">test@test.com</h6>
        </li>
        <li><a className="dropdown-item" href="#">Sign Out</a></li>
      </ul>

    </nav>
  )

}

export default TopNavBar




