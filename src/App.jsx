import {Routes, Route} from 'react-router'
import { HomePage } from './pages/Homepage'
import './App.css'

function App() {
 return (
  <>
    <Routes>
      <Route link='/' element={<HomePage />} />
    </Routes>
  </>
 )
}

export default App
