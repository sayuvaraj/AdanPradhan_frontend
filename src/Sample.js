import React, { useState } from 'react';
import { Typography, Tabs, Tab, TextField, Button } from '@mui/material';

const LoginPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Student" />
        <Tab label="College" />
        <Tab label="Admin" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LoginForm userType="student" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoginForm userType="college" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LoginForm userType="admin" />
      </TabPanel>
    </div>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

const LoginForm = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting login form:', { email, password, userType });
    // Add login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Login as {userType}</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  );
};

const RegistrationPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Student" />
        <Tab label="College" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <RegistrationForm userType="student" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegistrationForm userType="college" />
      </TabPanel>
    </div>
  );
};

const RegistrationForm = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting registration form:', { email, password, userType });
    // Add registration logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Registration form for {userType}</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  );
};

export { LoginPage, RegistrationPage };
