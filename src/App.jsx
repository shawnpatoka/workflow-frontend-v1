
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavBar from "./layout/TopNavBar"
import AdminHome from "./pages/admin/AdminHome";
import WorkOrderDetail from "./pages/WorkOrderDetail";
import ScrollToTop from "./utils/ScrollToTop";


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
