import React from 'react'
import RegisterPage from './components/RegisterPage/RegisterPage.js'
import LanguagePage from './components/LanguagePage/LanguagePage.js'
import GeographicInfoPage from './components/GeographicInfoPage/GeographicInfoPage.js'
import SurveyPage1 from './components/SurveyPage/SurveyPage1'
import SurveyThanksPage from './components/SurveyPage/SurveyThanksPage'
import GetStartedPage from './components/GetStartedPage/GetStartedPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <LanguagePage /> } />
        <Route path='../GeographicInfoPage' element={ <GeographicInfoPage /> } />
      </Routes>
    </>
  )
}

export default App
