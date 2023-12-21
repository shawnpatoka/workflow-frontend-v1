
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavBar from "./layout/TopNavBar"
import AdminHome from "./pages/admin/AdminHome";
import WorkOrderDetail from "./pages/WorkOrderDetail";
import ScrollToTop from "./utils/ScrollToTop";
import WorkOrderCreate from "./pages/admin/WorkOrderCreate";

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
            <Route path="create/work-order" element={<WorkOrderCreate />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
