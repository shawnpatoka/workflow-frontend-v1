import PageTitle from '../../components/PageTitle'
import Card from '../../components/Card'
import AdminWorkOrderList from '../../components/AdminWorkOrderList'
import CircularProgress from '../../components/CircularProgress'


function AdminHome() {





  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Card>
              <h2>Work Orders by Status</h2>
              <div className="d-flex justify-content-between">
                <CircularProgress value={45} color="#ffa626" statusName="Open" />
                <CircularProgress value={35} color="#2e88bf" statusName="In Progress" />
                <CircularProgress value={20} color="#15ba95" statusName="Ready for Review" />
              </div>
            </Card>
          </div>
          <div className="col-md-5">
            <Card>
              <h2>Work Orders per Job Site</h2>
            </Card>
          </div>
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
      </div>
    </>
  )
}

export default AdminHome