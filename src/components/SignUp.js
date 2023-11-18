import React from 'react'
import "../styles/signup.css"
import img1 from  '../images/Handicrafts-of-India.webp';
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='signup-wrap'>
      <div className="container">
  <header className="row text-center">
 
  </header>
  <main className="main row">
    <div className="left col">
      <img
      className='imgs'
       src={img1}
        alt="girl-reading-a-book"
      />
    </div>
    <div className="right col">
      <form className="sign-up">
        <h4>Find your next favorite Item!</h4>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Create a password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Confirm password"
          />
        </div>
        <button type="submit" className="btn submit-btn">
          Create account
        </button>
      </form>
      <p className="hr-lines"> OR </p>
     
      <div className="sign-in">
        <p>
          Already have an account? <Link to={"/login"}>Log in</Link>
        </p>
      </div>
    </div>
  </main>
</div>

    </div>
  )
}

export default SignUp
