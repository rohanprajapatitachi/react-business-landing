import "./Footer.css";

function Footer() {
    return (
        <div className="container">
            <div id="footer">
                <div className="footer-section">
                    <h3>About</h3>
                    We're passionate about designing and developing one of the best marketing apps in the market
                </div>
                <div className="footer-section rect">
                    <h3>Important Links</h3>
                    <ul>
                        <li>Our Business Partners <a href="https://startupguide.com">startupguide.com</a></li>
                        <li>Read our Terms & Conditions <a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contacts</h3>
                    <ul>
                        <li><i className="fa-solid fa-location-dot"></i> Radhe Radhe, Madhyapurthimi, Bhaktapur, Nepal</li>
                        <li><i className="fa-solid fa-envelope"></i> rohanprajapati369@gmail.com <i className="fa-solid fa-globe"></i> www.pay.com</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <hr className="light-hr" />
                <p>Copyright @ 2024 Landing Page by Rohan Prajapati</p>
            </div>
        </div>
    );
}

export default Footer;
