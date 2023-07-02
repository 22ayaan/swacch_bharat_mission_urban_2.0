import React from 'react'
import styles from './GeographicInfoPage.module.css'
import { Link } from 'react-router-dom'

const GeographicInfoPage = () => {
  return (
    <>
      <div className={styles.header}>
        <p>
          Swacch Bharat Mission Urban 2.0
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.contentwrapper}>
          <div className={styles.geosection}>
            <div className={styles.statesect}>
              <p className={styles.subheading}>Location</p>
              <label for={styles.stateel}>
                <select id='stateel' className={styles.stateel}>
                  <option value=''>State</option>
                  <option value='bihar'>Bihar</option>
                  <option value='up'>Uttar Pradesh</option>
                  <option value='mp'>Madhya Pradesh</option>
                  <option value='delhi'>Delhi</option>
                  <option value='punjab'>Punjab</option>
                  <option value='haryana'>Haryana</option>
                  <option value='rajasthan'>Rajasthan</option>
                  <option value='wb'>West Bengal</option>
                </select>
              </label>
            </div>
            <div className={styles.districtsect}>
              <label for='district el'>
                <select id='district el' className={styles.districtel}>
                  <option value=''>District</option>
                  <option value='patna'>Patna</option>
                  <option value='gaya'>Gaya</option>
                  <option value='muzaffarpur'>Muzaffarpur</option>
                  <option value='bhagalpur'>Bhagalpur</option>
                  <option value='darbhanga'>Darbhanga</option>
                </select>
              </label>
            </div>
              <div className={styles.citysect}>
              <label for='city el'>
                <select id='city el' className={styles.cityel}>
                  <option value=''>City</option>
                  <option value='patna'>Patna</option>
                  <option value='gaya'>Gaya</option>
                  <option value='muzaffarpur'>Muzaffarpur</option>
                  <option value='bhagalpur'>Bhagalpur</option>
                  <option value='darbhanga'>Darbhanga</option>
                </select>
              </label>
            </div>
            <div className={styles.neighborhoodsect}>
              <label for='neighborhood el'>
                <select id='neighborhood el' className={styles.neighborhoodel}>
                  <option value=''>Neighborhood</option>
                  <option value='entally'>Entally</option>
                  <option value='ballygunge'>Ballygunge</option>
                  <option value='tollygunge'>Tollygunge</option>
                  <option value='newtown'>Newtown</option>
                  <option value='saltlake'>Salt Lake</option>
                </select>
              </label>
            </div>
          </div>
          <div className={styles.agesection}>
            <p className={styles.subheading}>Age Range</p>
            <div className={styles.btns}>
              <button className={styles.less60} type='submit'  >Below 60</button>
              <button className={styles.more60} type='submit' >Above 60</button>
            </div>
          </div>
          <div className={styles.consentsection}>
            <label for='consent-btn'>
              <input type='radio' id='consent-btn' className={styles.consentbtn} value='consent-btn' required/>
              <span className={styles.consenttext}>I am at least 15 years old.</span>
            </label>
          </div>
          <div className={styles.startsurveybtn}>
            <Link to="/survey">
             <button type='submit' className={styles.startbtn} >Start Survey</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default GeographicInfoPage