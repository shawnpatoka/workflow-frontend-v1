import { useState, useEffect, createContext } from 'react'
import { axiosPrivateInstance } from "../utils/axios"

export const AuthContext = createContext({
  user: {},
  setUser: () => { },
  accessToken: null,
  refreshToken: null,
  csrftoken: null,
  setAccessToken: () => { },
  setRefreshToken: () => { },
  setCSRFToken: () => { }
})

export function AuthContextProvider(props) {

  const [user, setUser] = useState({})
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [csrftoken, setCSRFToken] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState()

  useEffect(() => {
    function checkUserLoginStatus() {
      if (user.email) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    }
    checkUserLoginStatus()
  }, [user])


  const logout = async () => {
    try {
      const response = await axiosPrivateInstance.post("/logout")

      setAccessToken(null)
      setCSRFToken(null)
      setUser({})

    } catch (error) {
      console.log(error)
    }
  }


  async function getUser() {
    try {
      const { data } = await axiosPrivateInstance.get('/user')
      setUser(data)
    } catch (error) {
      console.log(error.response)
    }
  }


  return <AuthContext.Provider value={{
    user,
    accessToken,
    refreshToken,
    csrftoken,
    isLoggedIn,
    setUser,
    setAccessToken,
    setRefreshToken,
    setCSRFToken,
    logout,
    getUser
  }}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext