import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './components/MainLanding.js';
import ToDoPage from './pages/ToDoPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/todo" element={<ToDoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
