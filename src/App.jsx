import { Routes, Route } from "react-router-dom";
import AdminHome from "./pages/admin/AdminHome";
import WorkOrderDetail from "./pages/WorkOrderDetail";
import WorkOrderCreate from "./pages/admin/WorkOrderCreate";
import Login from "./pages/accounts/Login";
import Unauthorized from "./pages/accounts/Unauthorized";
import PrivateRoute from './utils/PrivateRoute'
import Layout from "./layout/Layout";
import PersistLogin from "./utils/PersisLogin";

const ROLES = {
  'admin': 12345
}


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route element={<PersistLogin />}>
            <Route element={<PrivateRoute allowedRoles={[ROLES.admin]} />}>
              <Route index element={<AdminHome />} />
              <Route path="/work-order/view/:slug" element={<WorkOrderDetail />} />
              <Route path="/work-order/create" element={<WorkOrderCreate />} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
