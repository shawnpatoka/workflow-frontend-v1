import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';
import LoadingBar from '../components/LoadingBar'

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      }
      catch (err) {
        console.error("Server Error");
      }
      finally {
        isMounted && setIsLoading(false);
      }
    }

    !auth?.accessToken && localStorage.getItem('user') ? verifyRefreshToken() : setIsLoading(false);

    return () => isMounted = false;
  }, [])

  useEffect(() => {
    // console.log(`isLoading: ${isLoading}`)
    // console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
  }, [isLoading])

  return (
    <>
      {!persist
        ? <Outlet />
        : isLoading
          ? <LoadingBar />
          : <Outlet />
      }
    </>
  )
}

export default PersistLogin