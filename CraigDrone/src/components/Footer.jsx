import './Footer.css';
import youtubeIcon from '../assets/youtubeIcon.svg';
import facebookIcon from '../assets/facebookLogo.svg';
import instagramIcon from '../assets/instagramIcon.svg';


const Footer = () => {
    return (

        <footer>
            <div className="footer">
                <div className="row">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/"><img src={youtubeIcon}/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61565934830066"><img src={facebookIcon}/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61565934830066"><img src={instagramIcon}/></a>

                </div>

                <div className="row">
                    <p>{"Contact Us: 253)389-8009"}</p>
                    <p>{"CraigLogerwell@CloudlineImagery.com"}</p>
                </div>

                <div className="row">
                    CloudLine Imagery LLC || Website Designed By: Web Frontier Solutions
                </div>
            </div>
        </footer>

    );
}

export default Footer;



