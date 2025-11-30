import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Boilerplate from './pages/Boilerplate'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Boilerplate />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
