import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

// If you ever reference PUBLIC_URL, make sure it's process.env.PUBLIC_URL in JS or %PUBLIC_URL% in static HTML!

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            {/* Optionally keep branding or remove Template Button */}
            <button className="btn">DineDiscover</button>
          </div>
        </div>
      </nav>

      <main>
        <MainContainer />
      </main>
    </div>
  );
}

export default App;