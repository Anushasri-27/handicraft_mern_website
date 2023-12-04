import React from "react";
import "../styles/signup.css";
import img1 from "../images/Handicrafts-of-India.webp";
import { Link ,useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
  .required('Required')
  .min(3, 'Too short')
  .max(15, 'Too long'),
  email: Yup.string()
  .email('Invalid email').required('Required'),
  password: Yup.string()
  .min(8, 'Too short')
  .max(20, 'Too long')
  .required('Required'),
})


const SignUp = () => {
  const navigate = useNavigate();
  //step1 : formik initialization
  const SignupForm = useFormik({
      initialValues: {
          name: '',
          email: '',
          password: '',
      },
      onSubmit: async (values, action) => {

        console.log(values);

        const res = await fetch('http://localhost:5000/user/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        console.log(res.status)
        action.resetForm();

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Signup Success',
                text: 'You have been successfully signed up!',
            })
            navigate('/login');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })

        }
    },
    validationSchema: SignupSchema
    })
  return (
    <div className="signup-wrap">
      <div className="container">
        <header className="row text-center"></header>
        <main className="main row">
          <div className="left col">
            <img className="imgs" src={img1} alt="girl-reading-a-book" />
          </div>
          <div className="right col">
            <form className="sign-up"  onSubmit={SignupForm.handleSubmit}>
              <h4>Find your next favorite Item!</h4>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={SignupForm.handleChange} 
                  value={SignupForm.values.name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={SignupForm.handleChange} 
                  value={SignupForm.values.email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  onChange={SignupForm.handleChange} 
                  value={SignupForm.values.password}
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
  );
};

export default SignUp;
