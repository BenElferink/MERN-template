import { Fragment, useState } from 'react';
import { Dialog, DialogTitle, TextField, Button, CircularProgress, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const textFieldSx = { mx: 2, my: 0.5 };

export default function AuthModal({ open, close, isRegisterMode, toggleRegister }) {
  const { login, register } = useAuth();

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState('user'); // Default role is 'user'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  }

  const clickSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      if(isRegisterMode) {
        // Add the selected role to the formData before calling register()
        formData.role = selectedRole;
        await register(formData);
      } else {
        await login(formData);
      }
      close();
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  const disabledLoginButton = !formData['username'] || !formData['password'];
  const disabledRegisterButton = !formData['username'] || !formData['password'];

  return (
    <Dialog open={open} onClose={close}>
      {isRegisterMode ? (
        <Fragment>
          <RegisterForm formData={formData} handleChange={handleChange} />
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup row aria-label="role" name="role" value={selectedRole} onChange={handleRoleChange}>
              <FormControlLabel value="user" control={<Radio />} label="User" />
              <FormControlLabel value="admin" control={<Radio />} label="Admin" />
            </RadioGroup>
          </FormControl>
        </Fragment>
      ) : (
        <LoginForm formData={formData} handleChange={handleChange} />
      )}

      {error && <span className="error">{error}</span>}

      {loading ? (
        <center>
          <CircularProgress color="inherit" />
        </center>
      ) : (
        <Button
          onClick={clickSubmit}
          disabled={isRegisterMode ? disabledRegisterButton : disabledLoginButton}
        >
          {isRegisterMode ? 'Register' : 'Login'}
        </Button>
      )}

      <Button onClick={toggleRegister}>
        {isRegisterMode ? 'I already have an account' : "I don't have an account"}
      </Button>
    </Dialog>
  );
}

/////////////////////////////////////////////////////////////////////////

function LoginForm({formData, handleChange}) {
  return (
    <Fragment>
      <DialogTitle>Login to your account</DialogTitle>

      <TextField
        label='Username'
        name='username'
        type='text'
        value={formData['username'] || ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
      <TextField
        label='Password'
        name='password'
        type='password'
        value={formData['password'] || ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
    </Fragment>
  )
}
/////////////////////////////////////////////////////////////////
function RegisterForm({formData, handleChange}) {
  return (
    <Fragment>
      <DialogTitle>Create a new account</DialogTitle>

      <TextField
        label='Username'
        name='username'
        type='text'
        value={formData['username'] || ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
      <TextField
        label='Password'
        name='password'
        type='password'
        value={formData['password'] || ''}
        onChange={handleChange}
        variant='filled'
        sx={textFieldSx}
        required
      />
    </Fragment>
  )
}
