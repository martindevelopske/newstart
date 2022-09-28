import react from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'

function App(){
  return(
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutPage />}> </Route>
      <Route path='/contact' element={<ContactPage />}></Route>
    </Routes>
    
    <Footer />
    </BrowserRouter>
    
    </>
  )
}
export default App