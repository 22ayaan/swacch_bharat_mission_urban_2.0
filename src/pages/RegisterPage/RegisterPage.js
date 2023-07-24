import React from "react";
import styles from "./registerPage.module.css";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <>
      <div className={styles.registercontainer}>
        <div className={styles.registerwrap}>
          <div className={styles.topwrap}>
            <div className={styles.register}>
              <p className={styles.heading}>REGISTER</p>
              <p className={styles.subheading}>
                Get Free Passwordless Authentication
              </p>
            </div>
            <div className={styles.registerparagraphdescription}>
              <p>
                The Avatar App gives you free access to a secure and private
                passwordless authentication system. You can use the Avatar app
                to register without a password on any compatible service. To
                learn more, visit{" "}
                <a href="https://avatar.me" target="_blank" rel="noreferrer">
                  https://avatar.me
                </a>
              </p>
            </div>
            <Link to="/login">
              <button className={styles.avatarappcontinuebtn}>
                Continue with Avatar App
              </button>
            </Link>
          </div>
          <hr className={styles.registerpartition}></hr>
          <div className={styles.bottomwrap}>
            <div className={styles.subheading}>
              <p>Or use the traditional system</p>
            </div>
            <div className={styles.otpwrap}>
              <p className={styles.otpdesc}>
                Share your mobile number with us and we will send you an OTP to
                verify your number.
              </p>
            </div>
            <div className={styles.form}>
              <div className={styles.contactinputwrap}>
                <label htmlFor="mobilenum" className={styles.contactinputlabel}>
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobilenum"
                  className={styles.contactinputfield}
                  minLength={10}
                  maxLength={12}
                  required
                />
              </div>
            </div>
            <button className={styles.validatebtn}>Validate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
