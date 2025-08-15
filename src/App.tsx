import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Events from './Events';
import Gallery from './Gallery';
import Programs from './Programs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
          <Routes>
          <Route path="/" element={<div className="flex items-center justify-center"><p>Start prompting (or editing) to see magic happen :)</p></div>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/programs" element={<Programs />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
