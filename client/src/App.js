// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Announcements = lazy(() => import('./pages/Announcements'));
const Events = lazy(() => import('./pages/Events'));
const Activities = lazy(() => import('./pages/Activities'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

// Context
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router> {/* Only one router remains here */}
      <AuthProvider>
        <div className="App">
          <Navbar />
          <main>
            <Suspense fallback={
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <Spinner animation="border" variant="primary" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/events" element={<Events />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;