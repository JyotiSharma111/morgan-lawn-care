import { Routes, Route } from "react-router-dom";
import { PageWrapper } from "./components/layout/PageWrapper.jsx";
import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { FloatingCTA } from "./components/layout/FloatingCTA.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import ServiceAreas from "./pages/ServiceAreas.jsx";

function App() {
  return (
    <PageWrapper>
      <Navbar />
      <main className="min-h-screen bg-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </PageWrapper>
  );
}

export default App;
