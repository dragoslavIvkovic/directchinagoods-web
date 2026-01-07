import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import DocumentsPage from './pages/DocumentsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
