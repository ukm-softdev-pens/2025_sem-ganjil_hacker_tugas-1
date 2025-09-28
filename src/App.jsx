import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, Link } from 'react-router-dom';
import HelloWorld from "./HelloWorld";
import CounterNaufal from './counter';
import ProfileCard from './ProfileCard';

function App() {
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
                  Minggu 1 - Tugas Hello World
                </Link>
              </div>              
            } />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element = {
              <div>
                <Link to="/counter" style={{ color: "blue", textDecoration: "underline" }}>
                  Minggu 2 - Tugas Counter
                </Link>
              </div>
            } />
          <Route path="/counter" element={<CounterNaufal />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element = {
              <div>
                <Link to="/ProfileCard" style={{ color: "blue", textDecoration: "underline" }}>
                  Minggu 2 - Tugas Profile Card
                </Link>
              </div>
            } />
          <Route path="/ProfileCard" element={<ProfileCard />} />
        </Routes>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Kumpulan Tugas Softdev Naufal CE 24
      </p>
    </>
  )
}

export default App
