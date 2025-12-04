import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage'

function App() {
  let isSignedIn = true;

  return (
    <>
      <BrowserRouter>
          {(isSignedIn)
            ?
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/NotFound" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/NotFound" replace />} />
            </Routes>
            : 
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/NotFound" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/NotFound" replace />} />
            </Routes>
          }
        </BrowserRouter>
    </>
  )
}

export default App
