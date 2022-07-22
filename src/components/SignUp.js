/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */

import {
  React, useRef, useEffect, useState,
} from 'react';

import { useNavigate, NavLink } from 'react-router-dom';

import axios from '../context/api/axios';

const REGISTER_URL = '/api/v1/register';

const SignUp = () => {
  const errRef = useRef();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg('');
  }, [name, email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify({ full_name: name, email, password: pwd }),
        {
          headers: { 'Content-Type': 'application/Json' },
        });
      console.log(response.data);
      console.log(response.token);
      console.log(JSON.stringify(response));
      setSuccess(true);
      setName('');
      setPwd('');
      setEmail('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response');
      } else if (err.response?.status === 409) {
        setErrMsg('name taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {
        success ? (
          navigate('/homepage')
        ) : (
          <div className="wrapper">
            {/* Put all other content in this div  */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <NavLink className="navbar-brand" to="/sign-in">
                  MotorHub
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/sign-in">
                        login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/sign-up">
                        sign up
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <section>
                  <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                    {errMsg}
                  </p>
                  <form className="auth-form" onSubmit={handleSubmit}>
                    <h3>Sign up</h3>
                    <div className="mb-3">
                      <label htmlFor="full-name">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Enter your name"
                        id="full-name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email-adress">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter email"
                        id="email-address"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        placeholder="Enter password"
                        id="password"
                        required
                      />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Sign up
                      </button>
                    </div>
                    <p className="forgot-password text-right">
                      Already have an account?
                      {' '}
                      <a href="/sign-in">sign in</a>
                    </p>
                  </form>
                </section>
        )
}
    </>
  );
};

export default SignUp;
