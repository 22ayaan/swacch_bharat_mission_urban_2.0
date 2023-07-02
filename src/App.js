import React from 'react'
import RegisterPage from './components/RegisterPage/RegisterPage.js'
import LanguagePage from './components/LanguagePage/LanguagePage.js'
import GeographicInfoPage from './components/GeographicInfoPage/GeographicInfoPage.js'
import SurveyPage1 from './components/SurveyPage/SurveyPage1'
import SurveyThanksPage from './components/SurveyPage/SurveyThanksPage'
import GetStartedPage from './components/GetStartedPage/GetStartedPage'
import LoginPage from './components/LoginPage/LoginPage.js'
import LanguagePg from './components/LanguagePg/LanguagePg.js'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <GetStartedPage /> } />
        <Route exact path='/register' element={ <RegisterPage /> } />
        <Route exact path='/login' element={ <LoginPage /> } />
        <Route exact path='/languagePg' element={ <LanguagePg /> } />
        <Route exact path='/language' element={ <LanguagePage /> } />
        <Route exact path='/geo' element={ <GeographicInfoPage /> } />
        <Route exact path='/survey' element={ <SurveyPage1 /> } />
        <Route exact path='/thanks' element={ <SurveyThanksPage /> } />
      </Routes>
    </>
  )
}

export default App
