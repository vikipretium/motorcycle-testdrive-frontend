/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  React, useRef, useEffect, useState,
} from 'react';

const SignUp = () => {
  const errRef = useRef();


  useEffect(() => {
    setErrMsg('');
  }, [user, email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd, email);
    setUser('');
    setPwd('');
    setEmail('');
    setSuccess(true);
  };

  return (
    <>
      {
        success ? (
          <section>
            <h1>You are logged in</h1>
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
              <h3>Sign up</h3>
              <div className="mb-3">
                <label htmlFor="full-name">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  id="full-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email-adress">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email-address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
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
  );

export default SignUp;
