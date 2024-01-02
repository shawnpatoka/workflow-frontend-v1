
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavBar from "./layout/TopNavBar"
import AdminHome from "./pages/admin/AdminHome";
import WorkOrderDetail from "./pages/WorkOrderDetail";
import ScrollToTop from "./utils/ScrollToTop";
import WorkOrderCreate from "./pages/admin/WorkOrderCreate";
import SideNavBar from "./layout/SideNavBar";
import Login from "./pages/accounts/Login";
import AuthMiddleware from "./middleware/Auth";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {


  return (
    <>
      <BrowserRouter >
        <AuthContextProvider>
          <ScrollToTop />
          <TopNavBar />
          <main>
            <Routes>
              <Route path='/' element={<PrivateRoute />}>
                <Route element={<AuthMiddleware />}>
                  <Route index element={<AdminHome />} />
                  <Route path="/work-order/view/:slug" element={<WorkOrderDetail />} />
                  <Route path="/work-order/create/" element={<WorkOrderCreate />} />
                </Route>
              </Route>
              <Route path="/login/" element={<Login />} />
            </Routes>
            <SideNavBar />
          </main>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
