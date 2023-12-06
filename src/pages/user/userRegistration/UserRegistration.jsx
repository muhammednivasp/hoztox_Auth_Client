import React, { useEffect, useState } from 'react';
import './UserRegistration.css'
import { useFormik } from 'formik'
import toast from 'react-hot-toast';

import { registerValidation } from '../../../yupSchemas/YupUserRegistraion';
import { userSignup } from '../../../services/UserApi';
import ModalOtp from '../../../components/userComponents/modalOtp/ModalOtp';

// const {UserBaseUrl} = BaseUrl

const initialValues = {
  username: '',
  email: '',
  password: '',
  cPassword: ''
}
const UserRegistration = () => {

  const [user,SetUser] = useState('')
  const [otpModal,SetOtpModal] = useState(false)

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: registerValidation,
    onSubmit: (values) => {
      try {
        userSignup(values).then(async(data) =>{ console.log(data)
          SetUser(data.data.userId)
        toast.success(data.data.message)
           await new Promise((resolve) => {
            setTimeout(() => {
              SetOtpModal(true);
              resolve()
            }, 2000)})
        }).catch((err) => {
          console.log(err.message);
        })
        console.log(user,'user');

      } catch (error) {
        console.log(error);
        toast.error('Error')
      }
    }
  })


  const handleModal = ()=>{
    SetOtpModal(false)
  }

  return (
    <div className='full'>
    <div className={`container ${otpModal ? 'blur-background' : ''}`}>
      {!otpModal&&<form className="registration-form " onSubmit={handleSubmit}>
        <h2 style={{ color: 'blue', margin: 2 }}>Register</h2>
        <label htmlFor="username">User-Name</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.username && touched.username && <small>{errors.username}</small>}

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


        <label htmlFor="cPassword">Confirm Password</label>
        <input
          type="password"
          id="cPassword"
          name="cPassword"
          value={values.cPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.cPassword && touched.cPassword && <small>{errors.cPassword}</small>}


        <button type="submit">Register</button>
      </form>
      }
      {otpModal&&<ModalOtp style={{ zIndex:12}} closeModal={handleModal} user={user}/>}
    </div>
    </div>
  );
};

export default UserRegistration;
