import React from "react";
import "../Footer/Footer.css";
import {FiFacebook , FiTwitter , FiInstagram} from "react-icons/fi";

function Footer() {
    return (
        <div className="Footer">
            <p> contact me : nawrsbibi.nb@gmail.com </p>
            <p>Social media:</p>
            <ul className='buttons'>
                <li>
                    <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"><FiFacebook /></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/?hl=en" target="_blank"><i className="fab fa-instagram"><FiInstagram /></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/?lang=en" target="_blank"><i className="fab fa-twitter"><FiTwitter /></i></a>
                </li>

            </ul>
        </div>

    )
}


export default Footer;