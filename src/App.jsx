import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndCondition from './TermsAndCondition'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
        <Link to="/terms-condition">Terms & Condition</Link>
      </nav>

      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App