import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Cases } from './pages/Cases';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cases" element={<Cases />} />
      </Routes>
    </Router>
  );
}
