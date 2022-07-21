/* eslint-disable jsx-a11y/label-has-associated-control */
import {React, useRef, useEffect, useState } from 'react';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])
  return (
    <form className="auth-form">
      <h3>Sign in</h3>
      <div className="mb-3">
        <label htmlFor="email-address">Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </div>
    </form>
  );
}

export default Login;
