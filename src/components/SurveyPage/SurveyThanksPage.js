import React from 'react'
import "./surveyThanksPage.css"
const SurveyThanksPage = () => {
  return (
    <>
      <div className='header'>
        <p>
          Swachh Bharat Mission Urban 2.0
        </p>
      </div>
      <div className='container'>
        <div className='content-wrapper'>
          <div className='subheading'>
            <p>Thank You!</p>
          </div>
          <div className='image'>
            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_xixAoveZ_rgMHSKXCGs-IBhk9G8KM_YjStIXoB21T22j0ufy' alt='Thank You' />
          </div>
          <p className='desc'>
            Your participation is helping to make our country cleaner and better.
          </p>
          <button className='close-btn' type='submit'>Close</button>
        </div>
      </div>
    </>
  )
}

export default SurveyThanksPage