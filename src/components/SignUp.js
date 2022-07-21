/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const NAME_REGEX = /^[a-zA-Z]+$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


const SignUp = () => (
  <form className="auth-form">
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
