import React from 'react'
import styles from './getStartedPage.module.css'
import image from './logo.png'
import { Link } from 'react-router-dom'

const GetStartedPage = () => {
  return (
    <>
      <div className={styles.header}>
        <p>
          Swachh Bharat Mission Urban 2.0
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.contentwrapper}>
          <div className={styles.glassesimg}>
            <img src='https://thewire.in/wp-content/uploads/2017/10/swach.jpg' alt='none' />
          </div>
          <div className={styles.heading}>
            <p className={styles.swachh}>SWACHH</p>
            <p className={styles.survekshan}>SURVEKSHAN</p>
            <p className={styles.year}>2023</p>
          </div>
          <div className={styles.flagimg}>
            <img src={image} alt='none' />
          </div>
          <div className={styles.desc}>
            <p className={styles.toptext}>
              Ministry of Housing and Urban Affairs 
            </p>
            <p className={styles.bottomtext}>
              Government of India
            </p>
          </div>
          <Link to='/register'>
            <button className={styles.startbtn} type='submit'>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default GetStartedPage