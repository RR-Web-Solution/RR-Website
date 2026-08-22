import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import ScrollManager from './components/layout/ScrollManager'
import LandingPage from './pages/LandingPage'
import PartnerPage from './pages/PartnerPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/partner" element={<PartnerPage />} />
      </Routes>
    </BrowserRouter>
  )
}