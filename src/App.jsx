import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
