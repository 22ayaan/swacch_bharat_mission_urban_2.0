import React from 'react'
import "./surveyPage1.css"

const SurveyPage1 = () => {
  return (
    <>
      <div className='header'>
        <p>
          Swachh Bharat Mission Urban 2.0
        </p>
      </div>
      <div className='container'>
        <div className='content-wrapper'>
          <div className='anthem'>
            <p className='subheading'>Swachhata Anthem</p>
            <p className='description'>
              Have you heard or seen the Swachhata Anthem "Har dhadkan hai Swachh Bharat ki..."
            </p>
            <div className='btns'>
              <button type='submit' className='btn yes'>Yes</button>
              <button type='submit' className='btn no'>No</button>
            </div>
          </div>
          <div className='covid'>
            <p className='subheading'>COVID-19</p>
            <p className='description'>
              Did you know that waste is collected separately from the homes quarantined under COVID-19?
            </p>
            <div className='btns'>
              <button type='submit' className='btn yes'>Yes</button>
              <button type='submit' className='btn no'>No</button>
            </div>
          </div>
          <div className='yellow-spots'>
            <p className='subheading'>Yellow Spots</p>
            <p className='description'>
              Did you know that Open Urination Spots, also known as "Yellow Spots" can be transformed through the Swachhata App?
            </p>
            <div className='btns'>
              <button type='submit' className='btn yes'>Yes</button>
              <button type='submit' className='btn no'>No</button>
            </div>
          </div>
          <div className='public-toilets'>
            <p className='subheading'>Public Toilet Locations</p>
            <p className='description'>
              Did you know that you can locate the nearest Public Toilet on Google Maps?
            </p>
            <div className='btns'>
              <button type='submit' className='btn yes'>Yes</button>
              <button type='submit' className='btn no'>No</button>
            </div>
          </div>
          <button className='submit-btn' type='submit'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default SurveyPage1