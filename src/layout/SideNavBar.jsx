import UserCardH from "../components/UserCardH"
import { useAuth } from "../context/AuthContext";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

function SideNavBar() {
  const { user } = useAuth()

  return (
    <div className="offcanvas sidenavbar" tabIndex="-1" id="sideNavBar" aria-labelledby="sideNavBarLabel">
      <div className="offcanvas-header d-flex justify-content-end" style={{ backgroundColor: '#2e88bf' }}>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body pt-0">
        {user && (<UserCardH fullName={user.firstName + " " + user.lastName} emailAddress={user.emailAddress} />)}
        {!user && (
          <div className="alert alert-info mt-3">
            You are not logged in.<br />
            <a href="/login">Login</a>
          </div>
        )}
        <ul>
          <li data-bs-dismiss="offcanvas">
            <a href="/" exact="true">
              <HomeRoundedIcon sx={{ fontSize: '1.2rem', marginBottom: '4px', marginRight: '3px' }} /> Dashboard
            </a>
          </li>
          <li data-bs-dismiss="offcanvas">
            <a href="/work-order/create/" exact="true">
              <FeedRoundedIcon sx={{ fontSize: '1.2rem', marginBottom: '4px', marginRight: '3px' }} /> Work Orders
            </a>
          </li>
          <li data-bs-dismiss="offcanvas">
            <a href="" exact="true">
              <StoreRoundedIcon sx={{ fontSize: '1.2rem', marginBottom: '4px', marginRight: '3px' }} /> Clients & Job Sites
            </a>
          </li>
          <li data-bs-dismiss="offcanvas">
            <a href="" exact="true">
              <AdminPanelSettingsRoundedIcon sx={{ fontSize: '1.2rem', marginBottom: '4px', marginRight: '3px' }} /> Admin
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default SideNavBar