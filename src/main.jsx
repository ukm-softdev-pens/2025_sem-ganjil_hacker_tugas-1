import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profiles from './Profiles.jsx';
import AntCounter from './AntCounter.jsx';
import App from './component/App.jsx';
import './index.css';

function RouterApp() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-blue-200 flex gap-4 items-center justify-center">
        <Link to="/">Home</Link>
        <Link to="/profiles">Profiles</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/shop">Shop</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1 className="text-2xl p-6 text-center bg">This is home page, pls navigate to another page on the navbar above</h1>} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/counter" element={<AntCounter />} />
        <Route path="/shop" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>
);
