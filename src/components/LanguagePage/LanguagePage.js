import React from 'react'
import "./languagePageStyle.css"

let btnholder = document.getElementById('btn-holder')

const disabledButtonElement = 
<button 
  type='submit'
  id='cont-btn'
  disabled
  className='cont-btn'>
    Continue
</button>

btnholder = disabledButtonElement

const enabledButtonElement =
`<button
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
  text-align: center;'>
    Continue
</button>`

function swapDisplay() {
  display = langOptions
  document.querySelector('.display-el').innerHTML = display
  document.querySelector('.btn-holder').innerHTML = enabledButtonElement
}

const langOptions = `<div className='lang-opt' >
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px;">
    <input type='checkbox' id='english' name='lang' value='english' />
    <label for='english'>English</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px;">
    <input type='checkbox' id='gujarati' name='lang' value='gujarati' />
    <label for='gujarati'>Gujarati</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px;">
    <input type='checkbox' id='hindi' name='lang' value='hindi' />
    <label for='hindi'>Hindi</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px;">
    <input type='checkbox' id='kannada' name='lang' value='kannada' />
    <label for='kannada'>Kannada</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px;">
    <input type='checkbox' id='malayalam' name='lang' value='malayalam' />
    <label for='malayalam'>Malayalam</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px;">
    <input type='checkbox' id='marathi' name='lang' value='marathi' />
    <label for='marathi'>Marathi</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px;">
    <input type='checkbox' id='odiya' name='lang' value='odiya' />
    <label for='odiya'>Odiya</label>
  </div>
  <div style="display: block; background-color: rgba(228, 245, 250, 0.627); margin: 5px 15px; padding: 15px 10px; border: none; border-radius: 5px;">
    <input type='checkbox' id='punjabi' name='lang' value='punjabi' />
    <label for='punjabi'>Punjabi</label>
  </div>
</div>`

const desc = <div className='replacable'>
  <p className='subtext'>NOT SELECTED</p>
  <div className='desc-wrapper'>
    <p className='desc'>
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
      <div className='container'>
        <div className='heading'>
          Swacch Bharat Mission Urban 2.0
        </div>
        <div className='language-container'>
          <div className='content-wrapper'>
            <div className='header'>
              <p>LANGUAGE</p>
            </div>
            <button 
              className='dropdown-menu-btn' 
              onClick= {swapDisplay}>
                Select a language &or;
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