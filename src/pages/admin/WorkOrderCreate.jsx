import Card from '../../components/Card'
import PageTitle from '../../components/PageTitle'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import ButtonSuccess from '../../components/ButtonSuccess';

function WorkOrderCreate() {
  // Sample data for clients and job sites
  const clients = [
    { id: 1, name: 'Coastal Bites' },
    { id: 2, name: 'Fusion Flavors' },
    { id: 3, name: 'Savory Haven' },
  ];

  const jobSites = [
    { id: 1, clientId: 1, name: 'Chicago - River North' },
    { id: 2, clientId: 1, name: 'Chicago - Streeterville' },
    { id: 3, clientId: 1, name: 'Chicago - Lincoln Park' },
    { id: 4, clientId: 2, name: 'Fort Myers - North' },
    { id: 5, clientId: 2, name: 'Fort Myers - South' },
    { id: 6, clientId: 2, name: 'Bonita Springs' },
    { id: 7, clientId: 3, name: 'Bonita Springs' },
    { id: 8, clientId: 3, name: 'Naples' },
    { id: 9, clientId: 3, name: 'Miami - North' },
  ];

  // State to manage selected client and job sites
  const [selectedClient, setSelectedClient] = useState("")
  const [selectedJobSite, setSelectedJobSite] = useState("")
  const [filteredJobSites, setFilteredJobSites] = useState([])
  const [personName, setPersonName] = useState([])
  const [age, setAge] = useState('')


  // Function to handle client selection
  const handleClientChange = (clientId) => {
    setSelectedJobSite("")
    setSelectedClient(clientId);
    const filteredSites = jobSites.filter((site) => site.clientId === clientId)
    setFilteredJobSites(filteredSites)
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Bob Vila',
    'Corey Lahey',
    'Corey Trevorson',
    'Randy Trevor',
    'Trevor Lahey'
  ];


  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));


  return (
    <>

      <PageTitle title="Create a Work Order" />
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-12">
            <Card>
              {/* start Client and Job site */}
              <h2>Client and Job Site</h2>
              <hr />
              <div className="row">
                <div className="col-md-6 mt-3 mt-md-0">
                  <FormControl fullWidth sx={{ mt: 1 }} size="small">
                    <label>Client</label>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedClient}
                      onChange={(e) => handleClientChange(parseInt(e.target.value))}
                    >
                      {clients.map((client) => (
                        <MenuItem key={client.id} value={client.id}>{client.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <FormControl fullWidth sx={{ mt: 1 }} size="small">
                    <label>Job Site</label>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedJobSite}
                      onChange={(e) => setSelectedJobSite(e.target.value)}
                    >
                      {!selectedClient && <MenuItem value="000">
                        Select a client first.
                      </MenuItem>}
                      {filteredJobSites.map((site) => (
                        <MenuItem key={site.id} value={site.id}>
                          {site.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {/* start Schedule */}
                <div className="mt-5">
                  <h2>Schedule</h2>
                  <hr />
                  <div className="row">
                    <div className="col-sm-4">
                      <FormControl fullWidth sx={{ mt: 1 }}>
                        <label>Install Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
                        </LocalizationProvider>
                      </FormControl>
                    </div>
                    <div className="col-sm-4">
                      <FormControl fullWidth sx={{ mt: 1 }}>
                        <label>Scheduled Arrival Time</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <TimePicker sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
                        </LocalizationProvider>
                      </FormControl>
                    </div>
                    <div className="col-sm-4">
                      <FormControl fullWidth sx={{ mt: 1 }}>
                        <label>Estimated Completion Time</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <TimePicker sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
                        </LocalizationProvider>
                      </FormControl>
                    </div>
                  </div>
                </div>
                {/* start details */}
                <div className="mt-5">
                  <h2>Worker Details</h2>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <FormControl sx={{ mt: 1, width: '100%' }} size="small">
                        <HtmlTooltip
                          placement="top-start"
                          title={
                            <>
                              <Typography color="inherit">Assign To:</Typography>
                              Choosing multiple users will create individual work orders for each person selected.
                            </>
                          }
                        >
                          <label>Assign To <InfoIcon sx={{ fontSize: '1rem' }} /></label>
                        </HtmlTooltip>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput />}
                          renderValue={(selected) => selected.join(', ')}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox checked={personName.indexOf(name) > -1} />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>

                {/* start work info */}
                <div className="mt-5">
                  <h2>Work Info</h2>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <FormControl sx={{ mt: 1, width: '100%' }} size="small">
                        <label>Description</label>
                        <TextField
                          id="outlined-multiline-flexible"
                          multiline
                          maxRows={7}
                        />
                      </FormControl>
                      <FormControl sx={{ mt: 3, width: '100%' }} size="small">
                        <label>Parts Used</label>
                        <TextField
                          id="outlined-multiline-flexible"
                          multiline
                          maxRows={7}
                        />
                      </FormControl>
                      <FormControl sx={{ mt: 3, width: '100%' }} size="small">
                        <label>Work Completed</label>
                        <TextField
                          id="outlined-multiline-flexible"
                          multiline
                          maxRows={7}
                        />
                      </FormControl>
                      <FormControl sx={{ mt: 3, width: '100%' }} size="small">
                        <label>Work Remaining / Additional Parts Needed</label>
                        <TextField
                          id="outlined-multiline-flexible"
                          multiline
                          maxRows={7}
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <hr />
                  <div className="d-sm-flex d-grid d-sm-grid-0">
                    <ButtonSuccess text="Create Work Order" size="large" />
                    <button className='btn btn-large btn-outline-secondary ms-sm-2 mt-3 mt-sm-0'>Save for Later</button>
                  </div>
                </div>


              </div>
            </Card>
          </div>
        </div >
      </div >
    </>
  )
}

export default WorkOrderCreate