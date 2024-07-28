import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './components/MainLanding.js';
import ToDoPage from './pages/ToDoPage.js';
import FitnessPage from './pages/FitnessPage.js';
import SleepPage from './pages/SleepPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/sleep" element={<SleepPage />} />
      </Routes>
    </Router>
  );
}

export default App;
