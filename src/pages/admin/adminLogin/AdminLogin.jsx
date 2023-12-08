import React, { useState } from 'react';
import './AdminLogin.css'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { loginValidation } from '../../../yupSchemas/YupUserLogin';
import { adminLogin } from '../../../services/AdminApi';

const initialValues = {
  email: '',
  password: ''
}

const AdminLogin = () => {

  const Navigate = useNavigate()

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => {
        console.log(values);
      try {
        console.log(values, 'val');
        adminLogin(values).then(async (res) => {
          console.log(res.data)
          localStorage.setItem("admin", res.data.token);
          toast.success(res.data.message)
          setTimeout(() => {
            Navigate('/admin/home');
          }, 2000);
        }).catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message)
        })

      } catch (error) {
        console.log(error);
        toast.error('Error')
      }
    }
  })


  return (
    <div className='admin-full'>
      <div className="admin-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2 style={{ color: 'blue' }}>Admin Login</h2>

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
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
