import React from 'react'
import './GeographicInfoPage.module.css'

const GeographicInfoPage = () => {
  return (
    <>
      <div className='header'>
        <p>
          Swacch Bharat Mission Urban 2.0
        </p>
      </div>
      <div className='container'>
        <div className='content-wrapper'>
          <div className='geo-section'>
            <div className='state sect'>
              <p className='subheading'>Location</p>
              <label for='state el'>
                <select id='state el' className='state el'>
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
            <div className='district sect'>
              <label for='district el'>
                <select id='district el' className='district el'>
                  <option value=''>District</option>
                  <option value='patna'>Patna</option>
                  <option value='gaya'>Gaya</option>
                  <option value='muzaffarpur'>Muzaffarpur</option>
                  <option value='bhagalpur'>Bhagalpur</option>
                  <option value='darbhanga'>Darbhanga</option>
                </select>
              </label>
            </div>
            <div className='city sect'>
              <label for='city el'>
                <select id='city el' className='city el'>
                  <option value=''>City</option>
                  <option value='patna'>Patna</option>
                  <option value='gaya'>Gaya</option>
                  <option value='muzaffarpur'>Muzaffarpur</option>
                  <option value='bhagalpur'>Bhagalpur</option>
                  <option value='darbhanga'>Darbhanga</option>
                </select>
              </label>
            </div>
            <div className='neighborhood sect'>
              <label for='neighborhood el'>
                <select id='neighborhood el' className='neighborhood el'>
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
          <div className='age-section'>
            <p className='subheading'>Age Range</p>
            <div className='btns'>
              <button className='less-60' type='submit'>Below 60</button>
              <button className='more-60' type='submit'>Above 60</button>
            </div>
          </div>
          <div className='consent-section'>
            <label for='consent-btn'>
              <input type='radio' id='consent-btn' className='consent-btn' value='consent-btn' required onClick={() => {
                  document.querySelector('.start-btn').disabled = false;                
              }}/>
              <span className='consent-text'>I am at least 15 years old.</span>
            </label>
          </div>
          <div className='start-survey-btn'>
            <button type='submit' className='start-btn' disabled>Start Survey</button>
          </div>
        </div>
      </div>
    </>
  )
}
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.start-btn').disabled = true;
})

export default GeographicInfoPage