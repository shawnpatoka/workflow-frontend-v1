import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/Logo"
import useAuth from "../hooks/useAuth"

function TopNavBar() {
  const { isLoggedIn, user, logout } = useAuth()


  async function handleLogout() {
    await logout()
  }


  return (
    <nav className={`container-fluid top-bar fixed-top d-flex align-items-center ${isLoggedIn ? 'justify-content-between' : 'justify-content-center'}`}>
      {isLoggedIn &&
        <>
          <button className="btn btn-transparent" style={{ margin: '0 0 0 0', padding: '.15rem .5rem 0 .5rem' }} data-bs-toggle="offcanvas" data-bs-target="#sideNavBar" aria-controls="sideNavBar">
            <i className="bi bi-list" style={{ fontSize: '1.25rem' }}></i>
          </button>
        </>
      }

      <Link to='/'><Logo isDarkMode={false} /></Link>

      {isLoggedIn &&
        <>
          <div data-bs-toggle="dropdown" aria-expanded="false" className="profile-icon"><i className="bi bi-person-circle"></i></div>
          <ul className="dropdown-menu">
            <li>
              <h6 className="dropdown-header">{user?.email}</h6>
            </li>
            <li><a className="dropdown-item" onClick={handleLogout}>Sign Out</a></li>
          </ul>
        </>
      }

    </nav>
  )

}

export default TopNavBar




