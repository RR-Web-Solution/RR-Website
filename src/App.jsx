import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import ScrollManager from './components/layout/ScrollManager'
import LandingPage from './pages/LandingPage'
import PartnerPage from './pages/PartnerPage'
import JabodetabekPage from './pages/JabodetabekPage'
import StorySlidesPage from './pages/StorySlidesPage'
import KitPage from './pages/KitPage'
import SolusiPage from './pages/SolusiPage'
import AuditPage from './pages/AuditPage'
import BarbershopPage from './pages/BarbershopPage'
import SiteMovePage from './pages/SiteMovePage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/jabodetabek" element={<JabodetabekPage />} />
        <Route path="/story-slides" element={<StorySlidesPage />} />
        <Route path="/kit" element={<KitPage />} />
        <Route path="/solusi" element={<SolusiPage />} />
        <Route path="/audit/:slug" element={<AuditPage />} />
        <Route path="/barbershop" element={<BarbershopPage />} />
        <Route path="/portofolio/digital-printing" element={<SiteMovePage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
