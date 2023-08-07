

const Header = ({ image }) => {
    return ( 
        // <div className="logo-header">
        <a className="logo-header" href="https://www.linkedin.com/in/christian-alteri-79a2aa1ba/">
            <img  src={image} style={{ maxWidth: "50px", maxHeight: "auto" }} alt="Logo" />
        </a>            
        // </div>

    );
}
 
export default Header;
