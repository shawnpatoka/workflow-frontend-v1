import { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Logo from "../assets/Logo"
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";

function TopNavBar() {
  const navigate = useNavigate();
  const logout = useLogout();
  const { auth, userInfo } = useAuth()

  const handleSignOut = async () => {
    await logout();
    navigate('/login');
  }

  let isLoggedIn = !!userInfo?.email

  return (
    <nav className={`container-fluid top-bar fixed-top d-flex ${isLoggedIn ? 'justify-content-between' : 'justify-content-center'} align-items-center `}>

      {isLoggedIn &&
        <button className="btn btn-transparent" style={{ margin: '0 0 0 0', padding: '.15rem .5rem 0 .5rem' }} data-bs-toggle="offcanvas" data-bs-target="#sideNavBar" aria-controls="sideNavBar">
          <i className="bi bi-list" style={{ fontSize: '1.25rem' }}></i>
        </button>
      }


      <Link to='/'><Logo isDarkMode={false} /></Link>



      {isLoggedIn &&
        <>
          <div data-bs-toggle="dropdown" aria-expanded="false" className="profile-icon"><i className="bi bi-person-circle"></i></div>
          <ul className="dropdown-menu">
            <li>
              <h6 className="dropdown-header">{userInfo?.email}</h6>
            </li>
            <li><a className="dropdown-item" onClick={handleSignOut}>Sign Out</a></li>
          </ul>
        </>
      }

    </nav>
  )

}

export default TopNavBar




