import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { useEffect } from 'react'
import Home from './component/Home'
import Destinations from './component/Destinations'
import Tours from './component/Tours'
import Cuisine from './component/Cuisine'
import Gallery from './component/Gallery'
import About from './component/About'
import Info from './component/Info'
import ContactUs from './component/ContactUs'
import Layout from './component/Layout'
import ScrollToTop from './component/ScrollToTop'
const App1=()=>{
    //To clear Form previous Data
    useEffect(() => {
        localStorage.removeItem('travelSubmissions');
        localStorage.removeItem('bookingSubmissions');
    }, []);

    return(
        <>
         <BrowserRouter>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tours" element={<Tours />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="cuisine" element={<Cuisine />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact-us" element={<ContactUs/>} />
          
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
      </BrowserRouter>
        </>
    )
}
export default App1;