import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './assets/Login/Login'
import Signup from './assets/Signup/Signup.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      
     </Router>

    </>
  )
}

export default App
