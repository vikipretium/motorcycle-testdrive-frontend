/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  React, useRef, useEffect, useState, useContext,
} from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../context/api/axios';

const LOGIN_URL = '/api/v1/login';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ email: user, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
        });
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      setAuth({ user, pwd, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unathorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>you are logged in</h1>
          <br />
          <p>
            <a href="/">go to home</a>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>
          <form className="auth-form" onSubmit={handleSubmit}>
            <h3>Sign in</h3>
            <div className="mb-3">
              <label htmlFor="email-address">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email-address"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter your email"
                value={user}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
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
        </section>
      )}
    </>
  );
};

export default Login;
