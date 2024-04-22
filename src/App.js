import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Industries from './pages/Industry'
import Cybersecurity from './pages/CyberSecurity'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import ContactUs from './pages/ContactUs'
import DataCompass from './pages/solutions/DataCompass';
import DigitalCompass from './pages/solutions/DigitalCompass'
import PaymentCompass from './pages/solutions/PaymentCompass'
import HireResource from './pages/HireResource'


function App() {
  return (
    <div className="AppBody px-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/about" element={<About /> } />
              <Route path="/amber-data-compass" element={<DataCompass /> } />
              <Route path="/amber-digital-compass" element={<DigitalCompass /> } />
              <Route path="/amber-payment-compass" element={<PaymentCompass /> } />
              <Route path="/industries" element={<Industries /> } />
              <Route path="/cybersecurity" element={<Cybersecurity /> } />
              <Route path="/blog" element={<Blog /> } />
              <Route path="/careers" element={<Careers /> } />
              <Route path="/contact-us" element={<ContactUs /> } />
              <Route path="/hire-resource" element={<HireResource /> } />
          </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;
