import useAuth from "../../hooks/useAuth";

function Unauthorized() {
  const { auth } = useAuth();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h2>Unauthorized</h2>
              <p>{auth?.roles}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Unauthorized