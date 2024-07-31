import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './components/MainLanding.js';
import ToDoPage from './pages/ToDoPage.js';
import FitnessPage from './pages/FitnessPage.js';
import SleepPage from './pages/SleepPage.js';
import ProgressPage from './pages/ProgressPage.js';
import SettingsPage from './pages/SettingsPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/sleep" element={<SleepPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
