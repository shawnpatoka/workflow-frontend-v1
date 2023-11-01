import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import AlertAdminNoWorkOrders from './AlertAdminNoWorkOrders'

function AdminWorkOrderList({ isTomorrow }) {
  const [workOrderList, setWorkOrderList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [ifTomorrow, setifTomorrow] = useState(true)

  const temporaryState = [
    {
      "id": "1",
      "status": "open",
      "location": "StellarBloom Bistro - Cape Coral",
      "assignee": "Corey Trevorson",
      "time_start": "9:00am",
      "time_end": "12:30pm",
      "link": "#"
    },
    {
      "id": "2",
      "status": "in_progress",
      "location": "QuantumGrove Tavern - Fort Myers",
      "assignee": "Bob Vila",
      "time_start": "9:00am",
      "time_end": "12:30pm",
      "link": "#"
    },
    {
      "id": "3",
      "status": "in_progress",
      "location": "SapphireSpoon Cafe - Streeterville",
      "assignee": "Randy Lahey",
      "time_start": "9:00am",
      "time_end": "12:30pm",
      "link": "#"
    },
    {
      "id": "4",
      "status": "open",
      "location": "ZephyrForge Grillhouse - River North",
      "assignee": "Rick Sanchez",
      "time_start": "9:00am",
      "time_end": "12:30pm",
      "link": "#"
    },
    {
      "id": "5",
      "status": "ready_for_review",
      "location": "PinnaclePaws Pub & Grill - Naples",
      "assignee": "Corey Trevorson",
      "time_start": "9:00am",
      "time_end": "12:30pm",
      "link": "#"
    },
  ]

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 1500) + 250;

    setTimeout(() => {
      if (isTomorrow) {
        setIsLoading(false)
        return
      }
      setWorkOrderList(temporaryState)
      setIsLoading(false)

    }, randomNumber)
  }, [])


  const statusClassMap = {
    open: 'bg-status-open',
    in_progress: 'bg-status-in-progress',
    ready_for_review: 'bg-status-ready-for-review'
  }


  const setStatusColor = (status) => {
    return `status-circle ${statusClassMap[status] || ''}`;
  }



  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && workOrderList.map((workOrder) =>
        <div className="work-order-row" key={workOrder.id}>
          <div className="work-order-cell work-order-cell-lg">
            <div className={setStatusColor(workOrder.status)}></div>
            <span style={{ fontWeight: '500' }}>{workOrder.location}</span>
          </div>
          <div className="work-order-cell">{workOrder.assignee}</div>
          <div className="work-order-cell">{workOrder.time_start} - {workOrder.time_end}</div>
          <div className="work-order-cell text-end"><a href="" class="btn btn-regular btn-light">View</a></div>
        </div>
      )}
      {(isTomorrow && !isLoading) && <AlertAdminNoWorkOrders />}

    </>
  )
}

export default AdminWorkOrderList