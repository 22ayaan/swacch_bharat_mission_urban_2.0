import React from 'react'
import "./style.css"

const RegisterPage = () => {
  return (
    <>
      <h3 className="header-register">Swacch Bharat Mission Urban 2.0</h3>
      <div className="register-container">
        <div className="register-wrap">
          <div className='top-wrap'>
            <div className="register">
              <p className='heading'>REGISTER</p>
              <p className='sub-heading'>Get Free Passwordless Authentication</p>
            </div>
            <div className="register-paragraph-description">
              <p>
                The Avatar App gives you free access to a secure and private passwordless authentication system. You can use the Avatar app to register without a password on any compatible service. 
                To learn more, visit{" "}
                <a href="https://avatar.me" target="_blank" rel='noreferrer'>https://avatar.me</a>
              </p>
            </div>
            <button className='avatar-app-continue-btn'>Continue with Avatar App</button>      
          </div>
          <hr className='register-partition'></hr>
          <div className='bottom-wrap'>
            <div className='sub-heading'>
              <p>
                Or use the traditional system
              </p>
            </div>
            <div className='otp-wrap'>
              <p className='otp-desc'>
                Share your mobile number with us and we will send you an OTP
                to verify your number.
              </p>
            </div>
            <div className='form'>
              <div className='contact-input-wrap'>
                <label htmlFor='mobilenum' className='contact-input-label'>
                  Mobile Number
                </label>
                <input 
                  type='tel'
                  id='mobilenum'
                  className='contact-input-field'
                  minLength={10}
                  maxLength={12}
                  required
                />
              </div>
            </div>
            <button className='validate-btn'>
              Validate
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage