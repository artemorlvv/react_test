import './footer.scss';
import logo from '../../images/footer_logo.png';

function Footer () {
    return(
        <div id="footer">
            <div id="footer_wrap">
                <div id="footer_up">
                    <div id="footer_img">
                        <a href="#"><img src={logo} /></a>
                    </div>
                    <div id="footer_up_text">
                        <a href="#">Login</a>
                        <input type="button" value="Get API Keys" />
                    </div>
                </div>
                <div id="footer_mid">
                    <div>
                        <ul>
                            <span>Product</span>
                            <li><a href="#">Emission Calculations</a></li>
                            <li><a href="#">Diverse Offset Portfolio</a></li>
                            <li><a href="#">Matching the Offset</a></li>
                            <li><a href="#">Transparent Reporting</a></li>
                            <li><a href="#">Flexible API Integration</a></li>
                            <li><a href="#">Verified Carbon Offsets</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <span>Use Cases</span>
                            <li><a href="#">Ecommerce</a></li>
                            <li><a href="#">Rideshare</a></li>
                            <li><a href="#">Flights</a></li>
                            <li><a href="#">Enterprise Resource Planning</a></li>
                            <li><a href="#">Energy</a></li>
                            <li><a href="#">Supply Chain</a></li>
                            <li><a href="#">Fintech</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <span>Developers</span>
                            <li><a href="#">API Docs</a></li>
                            <li><a href="#">Ask Cloverly</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <span>About</span>
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#">Offset Projects</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">News & Press</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <br></br>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div id="footer_down">
                    <span>© 2020 Cloverly</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;