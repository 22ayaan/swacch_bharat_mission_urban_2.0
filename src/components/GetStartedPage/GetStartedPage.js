import React from 'react'
import './getStartedPage.module.css'
import image from './logo.png'
const GetStartedPage = () => {
  return (
    <>
      <div className='header'>
        <p>
          Swachh Bharat Mission Urban 2.0
        </p>
      </div>
      <div className='container'>
        <div className='content-wrapper'>
          <div className='glasses-img'>
            <img src='https://thewire.in/wp-content/uploads/2017/10/swach.jpg' alt='none' />
          </div>
          <div className='heading'>
            <p className='swachh'>SWACHH</p>
            <p className='survekshan'>SURVEKSHAN</p>
            <p className='year'>2023</p>
          </div>
          <div className='flag-img'>
            <img src={image} alt='none' />
          </div>
          <div className='desc'>
            <p className='top-text'>
              Ministry of Housing and Urban Affairs 
            </p>
            <p className='bottom-text'>
              Government of India
            </p>
          </div>
          <button className='start-btn' type='submit'>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default GetStartedPage