import Card from '../../components/Card'
import PageTitle from '../../components/PageTitle'
import { useEffect, useState } from 'react'

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
  const [selectedClient, setSelectedClient] = useState("");
  const [filteredJobSites, setFilteredJobSites] = useState([]);

  // Function to handle client selection
  const handleClientChange = (clientId) => {
    setSelectedClient(clientId);
    const filteredSites = jobSites.filter((site) => site.clientId === clientId);
    setFilteredJobSites(filteredSites);
  };
  return (
    <>
      <PageTitle title="Create a Work Order" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Card>
              {/* start Client and Job site */}
              <h2>Client and Job Site</h2>
              <hr />
              <div className="row">
                <div className="col-md-6 mt-3 mt-md-0">
                  <label htmlFor="clientselect">Client</label>
                  <select id="clientselect" className="form-select mt-2" value={selectedClient} onChange={(e) => handleClientChange(parseInt(e.target.value))}>
                    <option value="">Select a client</option>
                    {clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <label htmlFor="jobsiteselect">Job Site</label>
                  <select id="jobsiteselect" className="form-select mt-2">
                    <option value="">Select a job site</option>
                    {filteredJobSites.map((site) => (
                      <option key={site.id} value={site.id}>
                        {site.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* start Schedule */}
                <div className="mt-5">
                  <h2>Schedule</h2>
                  <hr />
                  <div className="row">
                    <div className="col-sm-4">
                      <label>Install Date</label>
                      <input type="date" id="date" name="date" className="form-control" />
                    </div>
                    <div className="col-sm-4">
                      <label>Scheduled Arrival Time</label>
                      <input type="time" name="arrival" className="form-control" id="id_arrival" />
                    </div>
                    <div className="col-sm-4">
                      <label>Estimated Completion Time</label>
                      <input type="time" name="est_completion" className="form-control" id="id_est_completion" />
                    </div>
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