import React from 'react'
import styles from './languagePg.module.css'
import { Link } from 'react-router-dom'

const LanguagePg = () => {
  return (
    <>
      <div className={styles.header}>
        <p>
        Swacch Bharat Mission Urban 2.0
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.contentwrapper}>
          <div className={styles.heading}>
            <p>LANGUAGE</p>
          </div>
          <Link to='/language'>
            <button className={styles.dropdownmenubtn}><p>Select a language </p><div>&or;</div></button>
          </Link>
          <div className={styles.subtext}>
            <p>NOT SELECTED</p>
          </div>
          <div className={styles.descwrapper}>
            <p className={styles.desc}>
              Swachh Survekshan 2023 is a survey conducted
              by the Government of India's Ministry of Housing
              and Urban Affairs (MoHUA) it covers every
              single city in India. One important component of
              Swachh Survekshan 2023 is getting your
              feedback on the progress your city has made in
              acheiving SWACHHATA around your residence
              and in your neighborhood.
              <br></br>
              <br></br>
              The Ministry greatly appreciates the time you are
              taking to give us valuable feedback. Your participation in Swacch Survekshan 2023
              will help make it a great success.
              <br></br>
              <br></br>
              This survey is completely anonymous. It is
              designed to protect your identity being disclosed
              to anyone including the Ministry or any other
              government agency.
            </p>
          </div>
          <button className={styles.contbtn} type='submit' disabled>Continue</button>
        </div>
      </div>
    </>
  )
}

export default LanguagePg