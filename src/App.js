import { Routes, Route } from "react-router-dom";
import  Home  from './pages/Home';
import  ContactForm  from './pages/ContactForm';
import  Portfolio  from './pages/Portfolio';
import  About  from './pages/About';
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
// All the photos
import familyVault from "./images/family-vault.png";
import github from "./images/github.png";
import meshroom from "./images/meshroom.png";
import NoSQL from "./images/Nosql-social.png";
import airbnb from "./images/airbnb.png";
import techBlog from "./images/tech-blog.jpeg";






const projects = [
  {
      id: '0',
      title: "Airbnb Clone",
      about: "A full recreation of the famous Airbnb app",
      url: "https://github.com/ChristianAlteri/airbnb-clone",
      image: airbnb
  },
  {
      id: '1',
      title: "Family Vault",
      about: "A web app that stores family history data",
      url: "https://github.com/ChristianAlteri/Family-Vault",
      image: familyVault
  },
  {
      id: '2',
      title: "NoSQL social network backend",
      about: "An example of a modern social media backend",
      url: "https://github.com/ChristianAlteri/Social-Network-API-NoSql",
      image: NoSQL
  },
  {  
      id: '3',
      title: "Tech blog",
      about: "An example of a full stack tech blog",
      url: "https://github.com/ChristianAlteri/Tech-Blog-Full-Stack",
      image: techBlog
  },
  {
      id: '4',
      title: "Juptyer notebook to use Meshroom",
      about: "This notebook allows you to use the Meshroom via google Colab",
      url: "https://github.com/ChristianAlteri/Meshroom-Cloud-google-collab",
      image: meshroom
  },
  {
      id: '5',
      title: "Other github repos",
      about: "My github profile",
      url: "https://github.com/ChristianAlteri",
      image: github
  },

]

const App = () => {

  return (
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
