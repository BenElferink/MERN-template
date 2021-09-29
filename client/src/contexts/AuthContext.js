import {createContext, useContext, useState, useEffect} from 'react'
import axios from '../api'

// init context
const AuthContext = createContext()

// export the consumer
export function useAuth() {
  return useContext(AuthContext)
}

// export the provider (handle all the logic here)
export function AuthProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [account, setAccount] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  const register = (formData = {}) =>
    new Promise((resolve, reject) => {
      axios
        .post('/auth/register', formData)
        .then(({data: {data, token}}) => {
          setAccount(data)
          setToken(token)
          setIsLoggedIn(true)
          resolve(true)
        })
        .catch((error) => {
          console.error(error)
          reject(error?.response?.data?.message || error.message)
        })
    })

  const login = (formData = {}) =>
    new Promise((resolve, reject) => {
      axios
        .post('/auth/login', formData)
        .then(({data: {data, token}}) => {
          setAccount(data)
          setToken(token)
          setIsLoggedIn(true)
          resolve(true)
        })
        .catch((error) => {
          console.error(error)
          reject(error?.response?.data?.message || error.message)
        })
    })

  const logout = () => {
    setIsLoggedIn(false)
    setAccount(null)
    setToken(null)
  }

  const getAccount = async () => {
    try {
      const headers = {headers: {authorization: `Bearer ${token}`}}
      const response = await axios.get('/auth/account', headers)

      setAccount(response.data.data)
      setIsLoggedIn(true)
    } catch (error) {
      console.error(error)
      if (error?.response?.statusCode === 401) setToken(null)
    }
  }

  // This side effect keeps local storage updated with recent token value,
  // making sure it can be re-used upon refresh or re-open browser
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  // This side effect runs only if we have a token, but no account or logged-in boolean.
  // This "if" statement is "true" only when refreshed, or re-opened the browser,
  // if true, it will then ask the backend for the account information (and will get them if the token hasn't expired)
  useEffect(() => {
    if (!isLoggedIn && !account && token) getAccount()
  }, [isLoggedIn, account, token]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        account,
        token,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
