import PageTitle from '../../components/PageTitle'
import Card from '../../components/Card'
import AdminWorkOrderList from '../../components/AdminWorkOrderList'
import CircularProgress from '../../components/CircularProgress'
import DayOfWeekChart from '../../components/DayOfWeekChart'
import { useState, useEffect } from 'react'
import { axiosPrivate } from '../../utils/axios'
import AdminWorkOrderListToday from '../../components/AdminWorkOrderListToday'
import AdminWorkOrderListTomorrow from '../../components/AdminWorkOrderListTomorrow'

function AdminHome() {
  const [workOrdersToday, setWorkOrdersToday] = useState([])
  const [workOrdersTomorrow, setWorkOrdersTomorrow] = useState([])
  const [errMsg, setErrMsg] = useState("")


  useEffect(() => {

    const getTomorrowWorkOrders = async () => {
      try {
        const response = await axiosPrivate('http://127.0.0.1:8000/api/v1/work-orders/tomorrow');

        if (response.status === 200) {
          const data = await response.data
          setWorkOrdersTomorrow(data);
          setErrMsg("")
        }

      } catch (error) {
        setErrMsg(`${error.message}`)
      }
    }

    getTomorrowWorkOrders()

  }, [])



  return (
    <>
      <PageTitle title="Dashboard" />

      <div className="container mb-4">

        <div className="row mt-3">
          <div className="col-12 col-md-7 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <h2>Work Orders by Status</h2>
                <div className="row">
                  <div className="col-4"><CircularProgress value={45} color="#ffa626" statusName="Open" /></div>
                  <div className="col-4"><CircularProgress value={35} color="#2e88bf" statusName="In Progress" /></div>
                  <div className="col-4"><CircularProgress value={20} color="#15ba95" statusName="Ready for Review" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex mt-3 mt-md-0">
            <div className="card flex-fill">
              <div className="card-body">
                <h2>7-Day Work Order Count</h2>
                <DayOfWeekChart />

              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Card>
              <h2>Today's Work Orders</h2>
              <AdminWorkOrderListToday />
            </Card>
          </div>
          <div className="col-md-12">
            <Card>
              <h2>Tomorrow's Work Orders</h2>
              <AdminWorkOrderListTomorrow />
            </Card>
          </div>
        </div>
      </div >

    </>
  )
}

export default AdminHome


