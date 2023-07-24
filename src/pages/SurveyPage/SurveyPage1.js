import React from "react";
import styles from "./surveyPage1.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const SurveyPage1 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentwrapper}>
          <div className={styles.anthem}>
            <p className={styles.subheading}>Swachhata Anthem</p>
            <p className={styles.description}>
              Have you heard or seen the Swachhata Anthem "Har dhadkan hai
              Swachh Bharat ki..."
            </p>
            <div className={styles.btns}>
              <button type="submit" className={styles.btnyes}>
                Yes
              </button>
              <button type="submit" className={styles.btnno}>
                No
              </button>
            </div>
          </div>
          <div className={styles.covid}>
            <p className={styles.subheading}>COVID-19</p>
            <p className={styles.description}>
              Did you know that waste is collected separately from the homes
              quarantined under COVID-19?
            </p>
            <div className={styles.btns}>
              <button type="submit" className={styles.btnyes}>
                Yes
              </button>
              <button type="submit" className={styles.btnno}>
                No
              </button>
            </div>
          </div>
          <div className={styles.yellowspots}>
            <p className={styles.subheading}>Yellow Spots</p>
            <p className={styles.description}>
              Did you know that Open Urination Spots, also known as "Yellow
              Spots" can be transformed through the Swachhata App?
            </p>
            <div className={styles.btns}>
              <button type="submit" className={styles.btnyes}>
                Yes
              </button>
              <button type="submit" className={styles.btnno}>
                No
              </button>
            </div>
          </div>
          <div className={styles.publictoilets}>
            <p className={styles.subheading}>Public Toilet Locations</p>
            <p className={styles.description}>
              Did you know that you can locate the nearest Public Toilet on
              Google Maps?
            </p>
            <div className={styles.btns}>
              <button type="submit" className={styles.btnyes}>
                Yes
              </button>
              <button type="submit" className={styles.btnno}>
                No
              </button>
            </div>
          </div>
          <Link to="/thanks">
            <button className={styles.submitbtn} type="submit">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SurveyPage1;
