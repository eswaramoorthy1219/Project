import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Appointment from './Component/Saloon Franchise';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/book-appointment' element={<Appointment/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
