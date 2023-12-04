import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import useUserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css"

const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string().required('Password is required')


});

const Login = () => {

  const navigate = useNavigate();


  const { setLoggedIn } = useUserContext();

  //initialization formik
  const loginForm = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: async (values, action) => {
        console.log(values);

        const res = await fetch('http://localhost:5000/user/authenicate', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.status);
        action.resetForm();

        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
          });
          navigate('/');

          const data = await res.json();
          sessionStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);

        }
        else if (res.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Email Nd Password is inCorrect'
          });
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong'
          });
        }

      },
      validationSchema: LoginSchema
    });

  return (
    <div className="login-wrap">
      <div className="login-box">
        <h2>Login</h2>
        <form  onSubmit={loginForm.handleSubmit}>
          <div className="user-box">
            <input type="text" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" onChange={loginForm.handleChange} value={loginForm.values.password}/>
            <label htmlFor="">Password</label>
          </div>
          <button type='submit'>
            <span />
            <span />
            <span />
            <span />
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
