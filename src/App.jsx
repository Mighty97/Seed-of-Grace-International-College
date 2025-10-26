import {Routes, Route,} from 'react-router'
import { HomePage } from './pages/Home/Homepage'
import { Dashboard } from './pages/Portal/Dashboard'
import './App.css'

function App() {
 return (
  <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='E-portal' element={<Dashboard />} />
    </Routes>
  </>
 )
}

export default App
