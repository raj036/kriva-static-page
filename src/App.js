import './App.css';
import Header from './Homepage Components/Header';
import { Routes , Route } from 'react-router-dom';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import SwiperPart from './Homepage Components/SwiperPart';
import Footer from './Homepage Components/Footer';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<SwiperPart />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
