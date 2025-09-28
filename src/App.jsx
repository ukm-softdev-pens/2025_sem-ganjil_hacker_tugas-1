import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, Link } from 'react-router-dom';
import HelloWorld from "./HelloWorld";
import Counter from "./counter";


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
                <br/>
                
              </div>              
            } />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
        <Routes>
          <Route path="/"
          element = {
            <div>
              <Link to="/counter" style={{ color: "red", textDecoration: "underline" }}>
              Counter
              </Link>
            </div>
          } />
            <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App