function Spinner() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="spinner-border" style={{ color: '#2e88bf' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>

  )
}

export default Spinner