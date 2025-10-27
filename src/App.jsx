import {Routes, Route,} from 'react-router'
import { HomePage } from './pages/Home/Homepage'
import { AboutUsPage } from './pages/About/AboutUsPage'
import { AdmissionPage } from './pages/Admission/AdmissionPage'
import { Dashboard } from './pages/Portal/Dashboard'
import { GalleryPage } from './pages/Gallery/GalleryPage'
import './App.css'

function App() {
 return (
  <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='about' element={<AboutUsPage />} />
      <Route path='admission' element={<AdmissionPage />} />
      <Route path='portal' element={<Dashboard />} />
      <Route path='gallery' element={<GalleryPage />} />
    </Routes>
  </>
 )
}

export default App
