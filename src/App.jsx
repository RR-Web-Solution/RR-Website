import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import ScrollManager from './components/layout/ScrollManager'
import LandingPage from './pages/LandingPage'
import PartnerPage from './pages/PartnerPage'
import JabodetabekPage from './pages/JabodetabekPage'
import StorySlidesPage from './pages/StorySlidesPage'


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
        {/* URL apa pun yang tidak dikenal
            → render Landing, biar ScrollManager yang gulir ke section-nya.
            Sekaligus menghapus halaman putih untuk URL apa pun. */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}