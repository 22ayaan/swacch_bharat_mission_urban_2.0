import React from "react";
import styles from "./Style.module.css";

const DescriptionSection = () => {
  return (
    <>
      <div className={styles.subHeading}>
        <p>NOT SELECTED</p>
      </div>
      <div className={styles.descWrapper}>
        <div className={styles.desc}>
          <p>
            Swachh Survekshan 2023 is a survey conducted by the Government of
            India's Ministry of Housing and Urban Affairs (MoHUA) it covers
            every single city in India. One important component of Swachh
            Survekshan 2023 is getting your feedback on the progress your city
            has made in acheiving SWACHHATA around your residence and in your
            neighborhood.
            <br></br>
            <br></br>
            The Ministry greatly appreciates the time you are taking to give us
            valuable feedback. Your participation in Swacch Survekshan 2023 will
            help make it a great success.
            <br></br>
            <br></br>
            This survey is completely anonymous. It is designed to protect your
            identity being disclosed to anyone including the Ministry or any
            other government agency.
          </p>
        </div>
      </div>
    </>
  );
};

export default DescriptionSection;
