
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavBar from "./layout/TopNavBar"
import AdminHome from "./pages/admin/AdminHome";
import WorkOrderDetail from "./pages/WorkOrderDetail";
import ScrollToTop from "./utils/ScrollToTop";
// import './static/dist/css/bootstrap.min.css'
import './static/icons/bootstrap-icons.css'
import './static/dist/js/bootstrap.bundle.min.js'

import './static/dist/css/bootstrap.min.css'
// import bootstrap from 'bootstrap'

function App() {

  return (
    <>
      <BrowserRouter >
        <ScrollToTop />
        <TopNavBar />
        <main>
          <Routes>
            <Route path="/" index element={<AdminHome />} />
            <Route path="/work-order/:slug" element={<WorkOrderDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
