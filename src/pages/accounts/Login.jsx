import { useState, useEffect } from "react";
import { axiosInstance } from '../../utils/axios'
import useAuth from '../../hooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


const Login = () => {

  const [fieldEmail, setFieldEmail] = useState('dev@shawnpatoka.com')
  const [fieldPassword, setFieldPassword] = useState('Tech@135')
  const [loading, setLoading] = useState(false)

  const { user, setUser, setAccessToken, setCSRFToken } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const fromLocation = location?.state?.from?.pathname || '/'

  const handleLogin = async () => {

    setLoading(true)

    try {
      const response = await axiosInstance.post('/login', JSON.stringify({
        email: fieldEmail,
        password: fieldPassword
      }))
      setAccessToken(response?.data?.access_token)
      setCSRFToken(response.headers["x-csrftoken"])
      setFieldEmail('')
      setFieldPassword('')
      setLoading(false)


      window.location.href = fromLocation;
    } catch (error) {
      setLoading(false)
      // TODO: handle errors
    }
  }


  useEffect(() => {
    console.log("current user from login page:", user)
  }, [])



  return (
    <div className="container mt-4">


      <div className="container">
        <div className="row justify-content-center">

          <div className="col-lg-6">

            <div className="card">
              <div className="card-body">
                <h2>API Login</h2>
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <label>Login</label>
                  <TextField id="outlined-basic" variant="outlined" value={fieldEmail} onChange={(e) => setFieldEmail(e.target.value)} />
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <label>Password</label>
                  <TextField id="outlined-basic" variant="outlined" type="password" value={fieldPassword} onChange={(e) => setFieldPassword(e.target.value)} />
                </FormControl>
                <div className="d-flex mt-3">
                  <button onClick={handleLogin} className="btn btn-large btn-primary">Login to API</button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default Login;