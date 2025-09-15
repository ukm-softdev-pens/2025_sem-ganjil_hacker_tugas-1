import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, Link } from 'react-router-dom';
import HelloWorld from "./HelloWorld";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element = {
              <div>
                <Link to="/hello" style={{ color: "blue", textDecoration: "underline" }}>
                  FYN
                </Link>
              </div>              
            } />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App