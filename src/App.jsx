import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Outputs from './components/output';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/output" element={<Outputs />} />
      </Routes>
    </Router>
  );
}

export default App;