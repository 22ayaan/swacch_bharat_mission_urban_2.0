import React from 'react'
import styles from "./languagePageStyle.module.css"
import { Link } from 'react-router-dom'


const LanguagePage = () => {
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
          <button className={styles.dropdownmenubtn}>
            Select a language <div>&or;</div>
          </button>
          <div className={styles.optbox}>
            <div>
              <input type='checkbox' id='english' name='lang' value='english' />
              <label for='english'   >English</label>
            </div>
            <div>
              <input type='checkbox' id='gujarati' name='lang' value='gujarati' />
              <label for='gujarati'>Gujarati</label>
            </div>
            <div  >
              <input type='checkbox' id='hindi' name='lang' value='hindi' />
              <label for='hindi'>Hindi</label>
            </div>
            <div  >
              <input type='checkbox' id='kannada' name='lang' value='kannada' />
              <label for='kannada'>Kannada</label>
            </div>
            <div  >
              <input type='checkbox' id='malayalam' name='lang' value='malayalam' />
              <label for='malayalam'>Malayalam</label>
            </div>
            <div  >
              <input type='checkbox' id='marathi' name='lang' value='marathi' />
              <label for='marathi'>Marathi</label>
            </div>
            <div  >
              <input type='checkbox' id='odiya' name='lang' value='odiya' />
              <label for='odiya'>Odiya</label>
            </div>
            <div  >
              <input type='checkbox' id='punjabi' name='lang' value='punjabi' />
              <label for='punjabi'>Punjabi</label>
            </div>
          </div>
          <Link to='/geo'>
            <button className={styles.contbtn} type='submit'>Continue</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LanguagePage