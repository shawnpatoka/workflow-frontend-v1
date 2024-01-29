import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import useRefreshToken from "../../hooks/useRefreshToken";


const LOGIN_URL = '/login'

const Login = () => {
  const { setAuth, persist, handleSetUserInfo } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('dev@shawnpatoka.com');
  const [pwd, setPwd] = useState('Tech@135');
  const [errMsg, setErrMsg] = useState('');

  const refresh = useRefreshToken()

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      // console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const { accessToken, roles, firstName, lastName } = response?.data
      setAuth({ user, pwd, firstName, lastName, roles, accessToken });
      handleSetUserInfo(user, firstName, lastName)
      setUser('');
      setPwd('');

      navigate(from, { replace: true });

    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }


  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist])


  return (
    <div className="container mt-4">


      <div className="container">
        <div className="row justify-content-center">

          <div className="col-lg-6">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h2>API Login</h2>
                  <FormControl fullWidth sx={{ mt: 1 }}>
                    <label htmlFor="username">Username</label>
                    <TextField
                      variant="outlined"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <label htmlFor="password">Password</label>
                    <TextField
                      variant="outlined"
                      type="password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                    />
                  </FormControl>
                  <div className="d-flex mt-3">
                    <button className="btn btn-large btn-primary">Login to API</button>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default Login;