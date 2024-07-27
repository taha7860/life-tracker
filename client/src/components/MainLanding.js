import '../index.css';
import '../styles/MainLanding.css';
import image1 from '../assets/landing-page-image.jpg';
import image2 from  '../assets/logo.png';
import { Link } from 'react-router-dom';

function MainLanding() {
    return (
        <div className="container">
            <div className="innercontainer">
                <section className="text">
                    <h1>
                        Work.
                        Eat. <br></br>
                        Sleep.
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/todo" className="link">GET STARTED NOW</Link>
                </section>
                <section className="image">
                    <img src={image1} id="image1" alt="A man typing using a laptop."></img>
                </section>
            </div>
            <img src={image2} id="image2" alt="The logo of the website."></img>
        </div>
    );
}

export default MainLanding;