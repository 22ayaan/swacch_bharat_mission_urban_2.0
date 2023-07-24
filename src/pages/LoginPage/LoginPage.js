import React from "react";
import styles from "./loginPage.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <p>LOGIN</p>
          </div>
          <div className={styles.subheading}>
            <p>Use Free Passwordless Authentication</p>
          </div>
          <div className={styles.descwrap}>
            <div className={styles.desc}>
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
          </div>
          <div className={styles.text}>
            <p>Open the Avatar App and scan this code</p>
          </div>
          <div className={styles.qrcode}>
            <Link to="/language">
              <img
                src="https://airnfts.s3.amazonaws.com/nft-images/20210909/Random_QR_code_3_1631181316556.jpeg"
                alt="qrcode"
              />
            </Link>
          </div>
          <div className={styles.gettext}>
            <p>Don't have the Avatar App?</p>
          </div>
          <div className={styles.getapp}>
            <p>Get it for free</p>
          </div>
          <div className={styles.btns}>
            <button className={styles.iosbtn} type="submit">
              iOS
            </button>
            <button className={styles.androidbtn} type="submit">
              Android
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
