import React from 'react';
import './UserLogin.css'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { loginValidation } from '../../../yupSchemas/YupUserLogin';
import { userLogin } from '../../../services/UserApi';

const initialValues = {
  email: '',
  password: ''
}

const UserLogin = () => {

  const Navigate = useNavigate()

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      try {
        userLogin(values).then(async (res) => {
          localStorage.setItem("user", res.data.token);
          toast.success(res?.data?.message || 'Login Success')
          setTimeout(() => {
            Navigate('/home');
          }, 2000);
        }).catch((err) => {
          toast.error(err?.response?.data?.message || 'Login Failed')
        })
      } catch (error) {
        toast.error('Error')
      }
    }
  })


  return (
    <div className='full'>
      <div className="container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2 style={{ color: 'blue' }}>Login</h2>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && touched.email && <small>{errors.email}</small>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.password && touched.password && <small>{errors.password}</small>}

          <button type="submit">Login</button>
          <h3>
            Not a member!{' '}
            <Link to={'/register'}
              className='link'>
              Register Now
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
