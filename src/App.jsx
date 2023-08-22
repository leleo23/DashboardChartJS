import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Dash from './Dash';
import Servers from './Servers';
import Applications from './Applications'; 
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="" element={<Dash />} />
          <Route path="/servers" element={<Servers />} /> 
          <Route path="/applications" element={<Applications />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
