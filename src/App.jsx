
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, Routes } from 'react-router-dom'
import Watchhistory from './pages/Watchhistory'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Landingpage/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/watchhistory' element={<Watchhistory/>}/>
    </Routes>
    <Footer/>
   

   </>
      
       
   
  )
}

export default App
