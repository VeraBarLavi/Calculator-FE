import React from 'react';
import './App.css';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <div className="App">
      <h3 style={{color: '#ff0000', marginTop: '20px' }}>Calculator</h3>
      <div style={{ maxWidth: '90%', margin: 'auto' }}>
        <div style={{ textAlign: 'left' }}>
          <MainPage />
        </div>
      </div>
    </div>
  );
}

export default App;
