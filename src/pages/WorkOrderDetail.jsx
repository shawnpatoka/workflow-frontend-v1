import { useParams } from "react-router-dom"
import { useState } from "react"
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import StatusIndicator from "../components/StatusIndicator";
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


function WorkOrderDetail() {
  const { slug } = useParams();
  const [newStatus, setNewStatus] = useState('in_progress')
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
                  <FormControl fullWidth sx={{ mt: 1 }}>
                    <label>Scheduled Arrival Time</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <FormControl fullWidth sx={{ mt: 1 }}>
                    <label>Estimated Completion Time</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <FormControl fullWidth sx={{ mt: 1 }} size="small">
                    <label>Status</label>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                    >
                      <MenuItem value="open"><div style={{ display: 'inline-block', marginBottom: '1px' }}><StatusIndicator type="dot" status="open" /></div>Open</MenuItem>
                      <MenuItem value="in_progress"><div style={{ display: 'inline-block', marginBottom: '1px' }}><StatusIndicator type="dot" status="in_progress" /></div>In Progress</MenuItem>
                      <MenuItem value="ready_for_review"><div style={{ display: 'inline-block', marginBottom: '1px' }}><StatusIndicator type="dot" status="ready_for_review" /></div>Ready for Review</MenuItem>
                    </Select>
                  </FormControl>
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
                  <FormControl sx={{ mt: 1, width: '100%' }} size="small">
                    <label>Parts Used</label>
                    <TextField
                      id="outlined-multiline-flexible"
                      multiline
                      maxRows={15}
                    />
                  </FormControl>
                  <FormControl sx={{ mt: 3, width: '100%' }} size="small">
                    <label>Work Completed</label>
                    <TextField
                      id="outlined-multiline-flexible"
                      multiline
                      maxRows={15}
                    />
                  </FormControl>
                  <FormControl sx={{ mt: 3, width: '100%' }} size="small">
                    <label>Work Remaining</label>
                    <TextField
                      id="outlined-multiline-flexible"
                      multiline
                      maxRows={15}
                    />
                  </FormControl>
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
                  <StatusIndicator type="rectangle" status={newStatus} />
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