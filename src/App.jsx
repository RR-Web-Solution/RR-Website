import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import ScrollManager from './components/layout/ScrollManager'
import LandingPage from './pages/LandingPage'
import PartnerPage from './pages/PartnerPage'

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/partner" element={<PartnerPage />} />
        {/* URL apa pun yang tidak dikenal
            → render Landing, biar ScrollManager yang gulir ke section-nya.
            Sekaligus menghapus halaman putih untuk URL apa pun. */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  )
}