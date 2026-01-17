import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ConceptPage } from './pages/ConceptPage';
import { MenuPage } from './pages/MenuPage';
import { AccessPage } from './pages/AccessPage';
import { ScrollToTop } from './components/ScrollToTop'; // Utility helper

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/concept" element={<ConceptPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/access" element={<AccessPage />} />
                {/* Contact links to footer or could be a page, for now just reuse Home since contact isn't fully defined as a page */}
                <Route path="/contact" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
