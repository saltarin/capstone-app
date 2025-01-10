import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import { BookingPage } from './pages/BookingPage'
import { RootColorsProvider } from './providers/RootColorProvider'
import ConfirmedBookingPage from './pages/ConfirmedBookingPage'

function App() {

  return (
    <>
    <RootColorsProvider>
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/booking" element={<BookingPage />} />
          <Route exact path="/booking/confirmation" element={<ConfirmedBookingPage />} />
        </Routes>
      </BrowserRouter>
    </RootColorsProvider>
    </>
  )
}

export default App
