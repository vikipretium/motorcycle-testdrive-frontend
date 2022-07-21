/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  React, useRef, useEffect, useState,
} from 'react';

const SignUp = () => {
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

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
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
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
