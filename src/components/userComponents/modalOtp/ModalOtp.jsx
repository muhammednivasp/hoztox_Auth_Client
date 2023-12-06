import React, { useState } from 'react';
import './ModalOtp.css';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

import { verifyOtp } from '../../../services/UserApi';


function ModalOtp({ closeModal, user }) {

const Navigate = useNavigate()

  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [userId,SetUserId] = useState(user)

  const handleOtpChange = (index, value) => {
    if (/^\d$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otpValues.includes('')) {
      toast.error('Fill all the Four Digits');
    } else {
      try {
        const otpCode = otpValues.join('');
        console.log('Submitted OTP:', otpCode);

        const verify = await verifyOtp({ otp: otpCode, userId: userId });
        console.log(verify);
        toast.success('Verification Success');
        setTimeout(() => {
        closeModal();
          Navigate('/');
        }, 2000);

      } catch (error) {
        console.log(error);
        toast.error('OTP Does Not Match');
        setOtpValues(['', '', '', '']);
      }
    }
  };

  return (
    <div className="otp-container">
      <div className="close-button" onClick={closeModal}>
        <span>&times;</span>
      </div>
      <h2>Enter OTP</h2>
      <form onSubmit={handleOtpSubmit}>
        <div className="otp-input-container">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              name={`otpDigit${index}`}
              id={`otpDigit${index}`}
              className="otp-input"
              value={otpValues[index]}
              onChange={(e) => handleOtpChange(index, e.target.value)}
            />
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ModalOtp;
