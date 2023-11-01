function AlertAdminNoWorkOrders() {
  return (
    <div className="alert alert-primary d-flex flex-wrap flex-column flex-sm-row justify-content-between align-items-center mt-3">
      Currently No Work Orders
      <button className="btn btn-large btn-primary mt-2 mt-sm-0">Create a Work Order</button>
    </div>
  )
}

export default AlertAdminNoWorkOrders