import { useParams } from "react-router-dom"
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'

function WorkOrderDetail() {
  const { slug } = useParams();
  return (
    <>
      <PageTitle title="SapphireSpoon Cafe - Streeterville" />
      <div className="container mb-5" id="work-order-detail">
        <div className="row">
          <div className="col-md-8">
            <Card>
              <h2>Schedule</h2>
              <hr />
              <div className="row">
                <div className="col-md-4">
                  <label>Install Date</label>
                  <p>Thursday Nov. 3, 2023</p>
                </div>
                <div className="col-md-4">
                  <label>Scheduled Arrival</label>
                  <p>9:00am</p>
                </div>
                <div className="col-md-4">
                  <label>Estimated Complettion</label>
                  <p>12:30pm</p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <h2>Work</h2>
                  <hr />
                </div>
                <div className="col-md-4">
                  <label htmlFor="workTimeStart">Time Start</label>
                  <input type="time" className="form-control mt-2" id="workTimeStart" />
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <label htmlFor="workTimeEnd">Time End</label>
                  <input type="time" className="form-control mt-2" id="workTimeEnd" />
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <label htmlFor="updateStatus">Update Status</label>
                  <select className="form-select mt-2" defaultValue={2}>
                    <option value="1">Open</option>
                    <option value="2">In Progress</option>
                    <option value="3">Ready For Review</option>
                    <option value="4">Review Complete</option>
                  </select>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <h2>Work Information</h2>
                  <hr />
                </div>
                <div className="col-md-12">
                  <label>Job Description</label>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus impedit assumenda atque provident autem praesentium, dignissimos reiciendis quod sunt vel nostrum? Blanditiis, numquam eum. Quos dolorem assumenda animi veniam?</p>
                  <label>Job Description</label>
                  <textarea className="form-control mt-2" rows="5">
                  </textarea>
                  <label className="mt-3">Work Completed</label>
                  <textarea className="form-control mt-2" rows="5">
                  </textarea>
                  <label className="mt-3">Work Remaining</label>
                  <textarea className="form-control mt-2" rows="5">
                  </textarea>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <h2>Images</h2>
                  <hr />
                </div>
                <div className="col-md-12">
                  <label>Job Description</label>
                  <div className="input-group mt-2">
                    <input type="file" name="images2" className="form-control" accept="image/*" multiple />
                    <button type="submit" hx-encoding="multipart/form-data" className="btn btn-outline-secondary text-capitalize" id="upload-button" >Upload</button>
                  </div>
                  <div className="alert alert-info mt-3 text-center">
                    <i className="bi bi-card-image me-1"></i> No Photos Uploaded
                  </div>
                </div>

              </div>
            </Card>
          </div>
          <div className="col-md-4">
            <div className="sticky-sm-top">
              <Card>
                <div className="info-group">
                  <h2>Job Site Information</h2>
                  <hr />
                  <label>Job Site Information</label>
                  <p>Hampton Social - River North<br />
                    123 Hubbard St. Chicago, IL 60654<br />
                    312-123-4567</p>
                </div>
                <div className="info-group">
                  <h2>Work Order Details</h2>
                  <hr />
                  <label>Assigned To</label>
                  <p>Corey Trevorson</p>
                  <label>Current Status</label>
                  <div className="status-rectangle bg-status-open">Open</div>
                </div>
                <div className="info-group">
                  <h2>Activity</h2>
                  <hr />
                  <label>Created By</label>
                  <p>Corey Trevorson</p>
                  <label>Created On</label>
                  <p>09/06/2023 - 12:02 PM ET (11:02 AM CT)</p>
                  <label>Last Modified</label>
                  <p>09/06/2023 - 12:02 PM ET (11:02 AM CT)</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default WorkOrderDetail