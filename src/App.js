// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import  Home  from './pages/Home';
import  ContactForm  from './pages/ContactForm';
import  Portfolio  from './pages/Portfolio';
import  About  from './pages/About';
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import insomniaDemoImg from "./images/insomnia-demo.png";
// import { useState, useEffect } from "react";
// const fetchProjects = require('./utils/githubFetch'); 

// import { fetchProjects }  from "./utils/githubFetch";




const projects = [
  {
      id: '0',
      title: "Airbnb Clone",
      about: "A full recreation of the famous Airbnb app",
      url: "https://github.com/ChristianAlteri/airbnb-clone",
      image: insomniaDemoImg
  },
  {
      id: '1',
      title: "Family Vault",
      about: "A web app that stores family history data",
      url: "https://github.com/ChristianAlteri/Family-Vault",
      image: insomniaDemoImg
  },
  {
      id: '2',
      title: "NoSQL social network backend",
      about: "An example of a modern social media backend",
      url: "https://github.com/ChristianAlteri/Social-Network-API-NoSql",
      image: insomniaDemoImg
  },
  {  
      id: '3',
      title: "Tech blog",
      about: "An example of a full stack tech blog",
      url: "https://github.com/ChristianAlteri/Tech-Blog-Full-Stack",
      image: insomniaDemoImg
  },
  {
      id: '4',
      title: "Juptyer notebook to use Meshroom",
      about: "This notebook allows you to use the Meshroom via google Colab",
      url: "https://github.com/ChristianAlteri/Meshroom-Cloud-google-collab",
      image: insomniaDemoImg
  },
  {
      id: '5',
      title: "Other github repos",
      about: "My github profile",
      url: "https://github.com/ChristianAlteri",
      image: insomniaDemoImg
  },

]

const App = () => {
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetchProjects()
  //     .then((projects) => {
  //       setProjects(projects); 
  //       console.log(projects);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, []);

  return (
    // Header
    <>
    <Layout>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio projects={projects} />}></Route>
          <Route path='/contact' element={<ContactForm />}></Route>
        </Routes>
    </Layout>  
    <Footer />
    </>
  )
}

export default App;
