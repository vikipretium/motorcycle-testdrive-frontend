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
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
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
  );
}

export default Login;
