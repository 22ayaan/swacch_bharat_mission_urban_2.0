import React from 'react'
import styles from "./languagePageStyle.module.css"
import { Link } from 'react-router-dom'

let btnholder = document.getElementById('btn-holder')

const disabledButtonElement = 
<Link to='../GeographicInfoPage'>
  <button 
    type='submit'
    id='cont-btn'
    disabled
    className={styles.contbtn}>
      Continue
  </button>
</Link>


btnholder = disabledButtonElement

const enabledButtonElement =
`<Link to='../GeographicInfoPage'>
  <button
    type='submit'
    id='cont-btn'
    className='cont-btn'
    style='background-color: rgb(93, 115, 212);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 20px 135px;
    font-size: 14px;
    font-weight: bold;
    margin: 20px 15px 10px 15px;
    text-align: center;
    cursor: pointer;'>
      Continue
  </button>
</Link>`

function swapDisplay() {
  display = langOptions
  document.querySelector('.display-el').innerHTML = display
  document.querySelector('.btn-holder').innerHTML = enabledButtonElement
}

const langOptions = `<div className='lang-opt' >
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px; cursor: pointer;">
    <input type='checkbox' id='english' name='lang' value='english' />
    <label for='english' style="cursor: pointer;">English</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px; cursor: pointer;">
    <input type='checkbox' id='gujarati' name='lang' value='gujarati' />
    <label for='gujarati' style="cursor: pointer;">Gujarati</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px; cursor: pointer;">
    <input type='checkbox' id='hindi' name='lang' value='hindi' />
    <label for='hindi' style="cursor: pointer;">Hindi</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px; cursor: pointer;">
    <input type='checkbox' id='kannada' name='lang' value='kannada' />
    <label for='kannada' style="cursor: pointer;">Kannada</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px; cursor: pointer;">
    <input type='checkbox' id='malayalam' name='lang' value='malayalam' />
    <label for='malayalam' style="cursor: pointer;">Malayalam</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px; cursor: pointer;">
    <input type='checkbox' id='marathi' name='lang' value='marathi' />
    <label for='marathi' style="cursor: pointer;">Marathi</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px; cursor: pointer;">
    <input type='checkbox' id='odiya' name='lang' value='odiya' />
    <label for='odiya' style="cursor: pointer;">Odiya</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px; cursor: pointer;">
    <input type='checkbox' id='punjabi' name='lang' value='punjabi' />
    <label for='punjabi' style="cursor: pointer;">Punjabi</label>
  </div>
</div>`

const desc = <div className='replacable'>
  <p className={styles.subtext}>NOT SELECTED</p>
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
</div>

let display = desc

const LanguagePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          Swacch Bharat Mission Urban 2.0
        </div>
        <div className={styles.languagecontainer}>
          <div className={styles.contentwrapper}>
            <div className={styles.header}>
              <p>LANGUAGE</p>
            </div>
            <button 
              className={styles.dropdownmenubtn}
              onClick= {swapDisplay}>
                Select a language <div>&or;</div>
            </button>
            <div className='display-el'>
              { display }
            </div>
            <div className='btn-holder'>
              { btnholder }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LanguagePage