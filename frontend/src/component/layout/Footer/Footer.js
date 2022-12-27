import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">

            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="Appstore" />
            </div>

            <div className="midFooter">
                <h1>AGSCart</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2022 &copy; AGSCart</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a
                    href="https://www.linkedin.com/in/ashok-kumar-b58606195/"
                    target="blank"
                >
                    <LinkedInIcon className="LinkedInSvgIcon" />
                </a>

                <a href="https://www.instagram.com/ashok_kumar70/" target="blank">
                    <InstagramIcon className="instagramSvgIcon" />
                </a>
                <a href="https://www.facebook.com/ashokkumar.kumar.752861/" target="blank">
                    <FacebookIcon className="FacebookSvgIcon" />
                </a>
            </div>

        </footer>
    );
};

export default Footer;