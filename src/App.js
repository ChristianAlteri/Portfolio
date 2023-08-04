// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import  Home  from './pages/Home';
import  Contact  from './pages/Contact';
import  Portfolio  from './pages/Portfolio';
import  About  from './pages/About';
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";



const App = () => {
  return (
    // Footer
    <>
    <Layout>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </Layout>  
    </>
  )
}

export default App;
