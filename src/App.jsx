import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import { RootColorsProvider } from './providers/RootColorProvider'

function App() {

  return (
    <RootColorsProvider>
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </RootColorsProvider>
  )
}

export default App
