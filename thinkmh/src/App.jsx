import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import TeamPage from "./pages/TeamPage";
import PulseTracker from "./pages/PulseTracker";
import MarketTracker from "./pages/MarketTracker";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/pulse-tracker" element={<PulseTracker />} />
        <Route path="/market-tracker" element={<MarketTracker />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;