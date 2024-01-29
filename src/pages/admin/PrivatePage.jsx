import { useState, useEffect } from 'react'
import { axiosPrivate } from '../../utils/axios';


function PrivatePage() {
  const [user, setUser] = useState({})
  const [errMsg, setErrMsg] = useState("")


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosPrivate('/user');

        if (response.status === 200) {
          const data = await response.data
          setUser(data);
          setErrMsg("")
        }

      } catch (error) {
        setErrMsg(`${error.message}`)
      }
    };

    fetchUser();
  }, []);



  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2>Private page</h2>
          <hr />
          {errMsg && (
            <div className="alert alert-danger">
              {errMsg}
            </div>
          )}
          Message: {user && user?.message}
        </div>
      </div>
    </div>
  )
}
export default PrivatePage;
