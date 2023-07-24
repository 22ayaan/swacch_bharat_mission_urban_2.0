import React from "react";
import styles from "./surveyThanksPage.module.css";
import { Link } from "react-router-dom";
const SurveyThanksPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentwrapper}>
          <div className={styles.subheading}>
            <p>Thank You!</p>
          </div>
          <div className={styles.image}>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_xixAoveZ_rgMHSKXCGs-IBhk9G8KM_YjStIXoB21T22j0ufy"
              alt="Thank You"
            />
          </div>
          <p className={styles.desc}>
            Your participation is helping to make our country cleaner and
            better.
          </p>
          <Link to="/">
            <button className={styles.closebtn} type="submit">
              Close
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SurveyThanksPage;
