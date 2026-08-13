import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
               
        <nav className="navbar">
          <Link to="/" className="logo">
            <img 
              src="/HashimAutoParts.jpg" 
              alt="HASHIM Auto Parts"
              style={{
                height: "50px",
                width: "auto",
                padding: "5px",
                border: "2px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "white"
              }}
            />
          </Link>

          <div className="nav-links">
            <Link to="/" className="nav-links">Home</Link>
            <Link to="/products" className="nav-links">Products</Link>
            <Link to="/about" className="nav-links">About</Link>
            <Link to="/contact" className="nav-links">Contact</Link>
          </div>
        </nav>

          
        <div className="offer-bar">
          <span>🔥 Special Offer: Save up to 25% on Auto Parts & Old Motor Spares! Limited Time Only! 🔥</span>
        </div>
        
       

         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         
         <footer className="footer">
  <div className="brands">
    <p>Our Tyre Partners:</p>
    <div className="brand-logos">
      <a href="https://wandatyre.cn/" target="_blank" rel="noopener noreferrer">
        <img src="/Wanda.jpeg" alt="Wanda" />
      </a>

      <a href="https://www.kendatire.com/en-us/" target="_blank" rel="noopener noreferrer">
        <img src="/Kenda_Logo.jpeg" alt="Kenda" />
      </a>

      <a href="https://www.powermaxtyre.com/Bike-Tyres.html" target="_blank" rel="noopener noreferrer">
        <img src="/powermax.jpeg" alt="PowerMax" />
      </a>

      <a href="https://leao-tyres.com/" target="_blank" rel="noopener noreferrer">
        <img src="/Leao.jpeg" alt="Leao" />
      </a>
    </div>
  </div>

  <p>&copy; Hashim Auto Parts - In Memory of the Old Shop</p>
  <p>Kulasekharam Road, Keezh Pammam, Marthandam - 629 165</p>
</footer>
      </div>
    </Router>
  );
}

export default App;