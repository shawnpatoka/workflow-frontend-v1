import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import AlertAdminNoWorkOrders from './AlertAdminNoWorkOrders'
import { Link } from 'react-router-dom'
import StatusIndicator from '../components/StatusIndicator'


function AdminWorkOrderList({ workOrderList }) {

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
      {workOrderList.map((workOrder) =>
        <div className="work-order-row" key={workOrder.id}>
          <div className="work-order-cell work-order-cell-lg">
            {/* <div className={setStatusColor(workOrder.status)}></div> */}
            <StatusIndicator type="dot" status={workOrder.status} />
            <span style={{ fontWeight: '500' }}>{workOrder.location}</span>
          </div>
          <div className="work-order-cell">{workOrder.assignee}</div>
          <div className="work-order-cell">{workOrder.time_start} - {workOrder.time_end}</div>
          <div className="work-order-cell text-end"><Link to={"/work-order/view/" + workOrder.link} className="btn btn-regular-wide btn-light mt-2 mt-sm-0">View</Link></div>
        </div >
      )
      }
    </>
  )
}

export default AdminWorkOrderList