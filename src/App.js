
import Home from './pages/Home';
import Navbar from './componets/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './pages/About';
import Projectpage from './pages/Projectpage';

import "./App.css"
import Footer from './componets/Footer';
import Coverletter from './Coverletter';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='all'>


      <BrowserRouter>
      <Routes >
        <Route path=''  element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Projectpage/>}/>
        <Route path='/resume'  element={<Coverletter/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
     
    </div>
  );
}

export default App;
