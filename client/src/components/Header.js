import '../styles/Header.css';
import image from  '../assets/logo.png';

function Header() {
    return (
      <header>
        <img src={image} id="image3" alt="The logo of the website."></img>
      </header>
    );
  }
  
  export default Header;