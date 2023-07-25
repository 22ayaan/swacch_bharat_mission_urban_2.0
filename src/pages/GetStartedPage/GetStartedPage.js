import React from "react";
import styles from "./getStartedPage.module.css";
import image from "../../assets/logo.png";
import glasses from "../../assets/glasses.jpeg";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const GetStartedPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentwrapper}>
          <div className={styles.glassesimg}>
            <img src={glasses} alt="none" />
          </div>
          <div className={styles.heading}>
            <p className={styles.swachh}>SWACHH</p>
            <p className={styles.survekshan}>SURVEKSHAN</p>
            <p className={styles.year}>2023</p>
          </div>
          <div className={styles.flagimg}>
            <img src={image} alt="none" />
          </div>
          <div className={styles.desc}>
            <p className={styles.toptext}>
              Ministry of Housing and Urban Affairs
            </p>
            <p className={styles.bottomtext}>Government of India</p>
          </div>
          <div className={styles.startBtn}>
            <Link to="/register">
              <Button className="startBtn" text="Get Started"></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedPage;
