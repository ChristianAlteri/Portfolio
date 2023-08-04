// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import  Home  from './pages/Home';
import  Contact  from './pages/Contact';
import  Portfolio  from './pages/Portfolio';
import  About  from './pages/About';
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { useState, useEffect } from "react";
const fetchProjects = require('./utils/githubFetch'); 

// import { fetchProjects }  from "./utils/githubFetch";




// const projects = [
//   {
//       id: '0',
//       title: "E-Commerce Web Store",
//       about: "A full e-shopping experience for an art gallery",
//       url: "https://e-commerce-art-application.herokuapp.com",
//       image: "./images/art-gallery.png"
//   },
//   {
//       id: '1',
//       title: "Howzat Cricket Game",
//       about: "A game to play for cricket high scores",
//       url: "https://howzat-cricket.herokuapp.com",
//       image: "./images/react-cricket.png"
//   },
//   {
//       id: '2',
//       title: "Movie Night",
//       about: "An app to find a great movie to watch",
//       url: "https://yoko-cyer.github.io/Movie-Generator/",
//       image: "./images/frontend_img.png"
//   },
//   {
//       id: '3',
//       title: "Weather Dashboard",
//       about: "An app to check the weather in different cities",
//       url: "https://timmobrien.github.io/challenge-06-weather-dashboard/",
//       image: "./images/weather.png"
//   },
//   {
//       id: '4',
//       title: "Philips Hue Discord Bot",
//       about: "A bot which interacts in discord to change the colours of your lights",
//       url: "https://github.com/timmobrien/hue-discord-bot",
//       image: "./images/hue.jpeg"
//   },
//   {
//       id: '5',
//       title: "Javascript Quiz",
//       about: "A quiz to test yor javascript knowledge",
//       url: "https://github.com/timmobrien/Javascript-Quiz",
//       image: "./images/quiz.png"
//   },

// ]

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then((projects) => {
        setProjects(projects); 
        console.log(projects);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    // Footer
    <>
    <Layout>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio projects={projects} />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </Layout>  
    </>
  )
}

export default App;
