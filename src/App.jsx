import {Routes, Route,} from 'react-router'
import { HomePage } from './pages/Home/Homepage'
import { AboutUsPage } from './pages/About/AboutUsPage'
import { AdmissionPage } from './pages/Admission/AdmissionPage'
import { Dashboard } from './pages/Portal/Dashboard'
import { GalleryPage } from './pages/Gallery/GalleryPage'
import { ContactPage } from './pages/Contact/ContactUsPage'
import { BlogPage } from './pages/Blog/BlogPage'
import './App.css'

function App() {
 return (
  <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='about' element={<AboutUsPage />} />
      <Route path='admission' element={<AdmissionPage />} />
      <Route path='portal' element={<Dashboard />} />
      <Route path='blog' element={<BlogPage />} />
      <Route path='gallery' element={<GalleryPage />} />
      <Route path='contact' element={<ContactPage />} />
    </Routes>
  </>
 )
}

export default App
