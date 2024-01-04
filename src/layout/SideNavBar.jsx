import UserCardH from "../components/UserCardH"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import { Link } from "react-router-dom";


function SideNavBar() {

  return (
    <div className="offcanvas sidenavbar" tabIndex="-1" id="sideNavBar" aria-labelledby="sideNavBarLabel">
      <div className="offcanvas-header d-flex justify-content-end" style={{ backgroundColor: '#2e88bf' }}>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body pt-0">
        <UserCardH fullName="Shawn Patoka" emailAddress="blah@sasdf.com" />
        <br />
        <ul>
          <li data-bs-dismiss="offcanvas">
            <Link to="/" exact="true">
              <HomeRoundedIcon sx={{ fontSize: '1.2rem', marginBottom: '4px', marginRight: '3px' }} /> Dashboard
            </Link>
          </li>
          <li data-bs-dismiss="offcanvas">
            <Link to="/work-order/create" exact="true">
              <FeedRoundedIcon sx={{ fontSize: '1.2rem', marginBottom: '4px', marginRight: '3px' }} /> Work Orders
            </Link>
          </li>
          <li data-bs-dismiss="offcanvas">
            <Link to="" exact="true">
              <StoreRoundedIcon sx={{ fontSize: '1.2rem', marginBottom: '4px', marginRight: '3px' }} /> Clients & Job Sites
            </Link>
          </li>
          <li data-bs-dismiss="offcanvas">
            <Link to="" exact="true">
              <AdminPanelSettingsRoundedIcon sx={{ fontSize: '1.2rem', marginBottom: '4px', marginRight: '3px' }} /> Admin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default SideNavBar