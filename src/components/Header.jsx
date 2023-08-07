// import './Header.css'; 

// const Header = ({ image }) => {
//     return ( 
//         <a className="logo-header" href="https://www.linkedin.com/in/christian-alteri-79a2aa1ba/">
//             <img  src={image} style={{ maxWidth: "50px", maxHeight: "auto" }} alt="Logo" />
//         </a>            

//     );
// }
 
// export default Header;
// Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ image }) => { 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage(true);
      setTimeout(() => {
        setShowSecondImage(false);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length); 
      }, 1000);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [image]); 

  return (
    <a className="logo-header" href="https://www.linkedin.com/in/christian-alteri-79a2aa1ba/">
      <img
        src={image[currentImageIndex]} 
        className={`logo-image ${showSecondImage ? 'hidden' : ''}`}
        alt="Logo"
      />
      <img
        src={image[(currentImageIndex + 1) % image.length]} 
        className={`logo-image ${showSecondImage ? '' : 'hidden'}`}
        alt="Logo"
      />
    </a>
  );
};

export default Header;
