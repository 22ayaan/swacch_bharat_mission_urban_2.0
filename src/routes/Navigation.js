import React from 'react'
import RegisterPage from '../pages/RegisterPage/RegisterPage.js'
import LanguagePage from '../pages/LanguagePage/LanguagePage.js'
import GeographicInfoPage from '../pages/GeographicInfoPage/GeographicInfoPage.js'
import SurveyPage1 from '../pages/SurveyPage/SurveyPage1.js'
import SurveyThanksPage from '../pages/SurveyPage/SurveyThanksPage.js'
import GetStartedPage from '../pages/GetStartedPage/GetStartedPage.js'
import LoginPage from '../pages/LoginPage/LoginPage.js'
import { Routes, Route } from 'react-router-dom'


const Navigation = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <GetStartedPage /> } />
        <Route exact path='/register' element={ <RegisterPage /> } />
        <Route exact path='/login' element={ <LoginPage /> } />
        <Route exact path='/language' element={ <LanguagePage /> } />
        <Route exact path='/geo' element={ <GeographicInfoPage /> } />
        <Route exact path='/survey' element={ <SurveyPage1 /> } />
        <Route exact path='/thanks' element={ <SurveyThanksPage /> } />
      </Routes>
    </>
  )
}

export default Navigation