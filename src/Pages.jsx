import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import PortfolioDetails from './Components/PortfolioDetails';
import ServiceDetails from './Components/ServiceDetails';
import StarterPage from './Components/StarterPage';


export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<PortfolioDetails />} />
      <Route path="/services" element={<ServiceDetails />} />
      <Route path="/starter" element={<StarterPage />} />
    </Routes>
  );
}