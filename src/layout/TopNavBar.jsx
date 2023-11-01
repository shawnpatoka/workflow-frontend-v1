import Logo from "../assets/Logo"

function TopNavBar() {
  return (
    <nav className="navbar bg-white-full fixed-top p-0" style={{ height: '50px' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a href="#">
          <Logo isDarkMode={false} />
        </a>

        <i className="bi bi-person-circle"></i>
      </div>
    </nav>
  )
}

export default TopNavBar