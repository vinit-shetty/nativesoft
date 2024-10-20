import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';
import Page404 from '../pages/Page404';
import '../styles/Background.css'
import Projects from '../pages/Projects';
export default function App(){
  return(
    <div className='background'>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
