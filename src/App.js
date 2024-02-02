// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './component/maincomp/Master';
import Home from './component/maincomp/Home';
import About from './component/pages/About';
import { Blog } from './component/pages/Blog';
import { Testi } from './component/pages/Testi';
import { Gallery } from './component/pages/Gallery';
import { Service } from './component/pages/Service';
import { Team } from './component/pages/Team';
import { ontact } from './component/pages/ontact';

// import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"




function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    
  <Route path='/' element={<Master Rcf={Home}/>}></Route>
  <Route path='/about' element={<Master Rcf={About}/>}></Route>
  <Route path='/blog' element={<Master Rcf={Blog}/>}></Route>
  <Route path='/testimonial' element={<Master Rcf={Testi}/>}></Route>
  <Route path='/gallery' element={<Master Rcf={Gallery}/>}></Route>
  <Route path='/service' element={<Master Rcf={Service}/>}></Route>
  <Route path='/team' element={<Master Rcf={Team}/>}></Route>
  <Route path='/contact' element={<Master Rcf={ontact}/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
