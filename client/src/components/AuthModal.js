import {Fragment, useState} from 'react'
import {Dialog, DialogTitle, TextField, Button, CircularProgress} from '@mui/material'
import axios from '../api'
import {useAuth} from '../contexts/AuthContext'

const textFieldSx = {mx: 2, my: 0.5}

export default function AuthModal({open, close, register, toggleRegister}) {
  const {setIsLoggedIn, setToken, setAccount} = useAuth()

  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  }

  const clickSubmit = async () => {
    setLoading(true)
    setError('')

    try {
      const requestPath = register ? '/auth/register' : '/auth/login'
      const response = await axios.post(requestPath, formData)

      setToken(response.data.token)
      setAccount(response.data.data)
      setIsLoggedIn(true)
      close()
    } catch (error) {
      console.error(error)
      setError(error?.response?.data?.message ?? error.message)
    }

    setLoading(false)
  }

  const disabledLoginButton = !formData['username'] || !formData['password']
  const disabledRegisterButton = !formData['username'] || !formData['password']

  return (
    <Dialog open={open} onClose={close}>
      {register ? (
        <RegisterForm formData={formData} handleChange={handleChange} />
      ) : (
        <LoginForm formData={formData} handleChange={handleChange} />
      )}

      {error && <span className='error'>{error}</span>}

      {loading ? (
        <center>
          <CircularProgress color='inherit' />
        </center>
      ) : (
        <Button
          onClick={clickSubmit}
          disabled={register ? disabledRegisterButton : disabledLoginButton}>
          {register ? 'Register' : 'Login'}
        </Button>
      )}

      <Button onClick={toggleRegister}>
        {register ? 'I already have an account' : "I don't have an account"}
      </Button>
    </Dialog>
  )
}

function LoginForm({formData, handleChange}) {
  return (
    <Fragment>
      <DialogTitle>Login to your account</DialogTitle>

      <TextField
        label='Username'
        name='username'
        type='text'
        value={formData['username'] ?? ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
      <TextField
        label='Password'
        name='password'
        type='password'
        value={formData['password'] ?? ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
    </Fragment>
  )
}

function RegisterForm({formData, handleChange}) {
  return (
    <Fragment>
      <DialogTitle>Create a new account</DialogTitle>

      <TextField
        label='Username'
        name='username'
        type='text'
        value={formData['username'] ?? ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
      <TextField
        label='Password'
        name='password'
        type='password'
        value={formData['password'] ?? ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
    </Fragment>
  )
}
