import React, { useState, useEffect } from 'react'
import { RegistrationPage } from './pages/registration-page'
import { StepOnePage } from './pages/step-one-page'
import { StepTwoPage } from './pages/step-two-page'
import { StepThreePage } from './pages/step-three-page'
import { StepFourPage } from './pages/step-four-page'


function App() {
  const [curentPage, setCurentPage] = useState(0)

  switch (curentPage) {
    case 0:
      return <RegistrationPage />
    case 1:
      return <StepOnePage />
    case 2:
      return <StepTwoPage />
    case 3:
        return <StepThreePage />
    case 4:
      return <StepFourPage />  
    default:
      return <RegistrationPage />
  }
}

export default App;
