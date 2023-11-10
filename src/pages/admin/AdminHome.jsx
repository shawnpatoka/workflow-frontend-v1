import PageTitle from '../../components/PageTitle'
import Card from '../../components/Card'
import AdminWorkOrderList from '../../components/AdminWorkOrderList'
import CircularProgress from '../../components/CircularProgress'
import DayOfWeekChart from '../../components/DayOfWeekChart'


function AdminHome() {





  return (
    <>
      <PageTitle title="Dashboard" />

      <div className="container">

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
                <h2>7-Day Users' Work Order Count</h2>
                <DayOfWeekChart />

              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Card>
              <h2>Today's Work Orders</h2>
              <AdminWorkOrderList />
            </Card>
          </div>
          <div className="col-md-12">
            <Card>
              <h2>Tomorrow's Work Orders</h2>
              <AdminWorkOrderList isTomorrow={true} />
            </Card>
          </div>
        </div>
      </div >

    </>
  )
}

export default AdminHome


