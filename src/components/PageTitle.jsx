function PageTitle({ title }) {
  return (
    <>
      <div className="page-title-container">
        <h1>{title}</h1>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </>
  )
}

export default PageTitle