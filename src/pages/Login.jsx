import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


const Login = () => {
  const [emailAddress, setEmailAddress] = useState('')
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    const userData = {
      id: 1,
      emailAddress: emailAddress,
      firstName: 'Corey',
      lastName: 'Trevorson'
    }
    login(userData)
  };

  return (
    <div className="container mt-4">


      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className={user ? 'alert alert-success' : 'alert alert-info'}>
              {user ? 'You are logged in' : 'You are logged out.'}
            </div>
            <div className="card">
              <div className="card-body">
                <h2>Login</h2>
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <label>Login</label>
                  <TextField id="outlined-basic" variant="outlined" onChange={(e) => setEmailAddress(e.target.value)} />
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <label>Password</label>
                  <TextField id="outlined-basic" variant="outlined" type="password" />
                </FormControl>
                <div className="d-flex mt-3">
                  <button onClick={handleLogin} className="btn btn-large btn-primary">Login</button>
                  <button onClick={logout} className="btn btn-large btn-outline-secondary ms-2">Logout</button>
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