import React from 'react';

const Login = () => (
  <form>
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
    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkout"
          className="form-control"
          id="customcheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </div>
  </form>
);

export default Login;
