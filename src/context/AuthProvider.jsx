import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || true);

  const handleSetUserInfo = (email, firstName, lastName) => {
    console.log("in the set user info function")
    setUserInfo({ email: email, firstName: firstName, lastName: lastName })
    localStorage.setItem('user', JSON.stringify({ email: email, firstName: firstName, lastName: lastName }))
  }

  const handleUserLogout = () => {
    localStorage.removeItem('user')
    setUserInfo(null)
  }

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('user'))
    if (storedUserInfo) {
      setUserInfo(storedUserInfo)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      auth, setAuth,
      persist, setPersist,
      userInfo, handleSetUserInfo,
      handleUserLogout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;