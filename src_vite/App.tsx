import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Benefits from './pages/Benefits';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-cloud-100">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Footer />
        
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#0B1E2C',
              color: '#fff',
              border: 'none',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
