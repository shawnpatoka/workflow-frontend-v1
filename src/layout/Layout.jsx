import { Outlet } from "react-router-dom"
import TopNavBar from "./TopNavBar"
import SideNavBar from "./SideNavBar"


function Layout() {
  return (
    <>
      <TopNavBar />
      <main>
        <Outlet />
      </main>
      <SideNavBar />
    </>
  )
}
export default Layout