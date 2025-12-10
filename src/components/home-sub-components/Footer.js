import "./styles/Footer.css";
import payment_img from './../images/01-pay.png';
import footer_slide1 from './../images/01-footer-slide.png';
import footer_slide2 from './../images/02-footer-slide.png';
import footer_slide3 from './../images/03-footer-slide.png';
import footer_slide4 from './../images/04-footer-slide.png';
import footer_slide5 from './../images/05-footer-slide.png';
import footer_slide6 from './../images/06-footer-slide.png';

function Footer(){

    return( 

        <div className="Footercomponent">

            {/* <div className="footer-slide">
                <div className="footer-slide-image"><img src={footer_slide1}/></div>
                <div className="footer-slide-image"><img src={footer_slide2}/></div>
                <div className="footer-slide-image"><img src={footer_slide3}/></div>
                <div className="footer-slide-image"><img src={footer_slide4}/></div>
                <div className="footer-slide-image"><img src={footer_slide5}/></div>
                <div className="footer-slide-image"><img src={footer_slide6}/></div>
            </div> */}

            <div className="news-letter">
                <h2 className="news-letter-heading">NEWSLETTER SIGN UP</h2>
                <p className="news-letter-para">Enjoy 10% off your first order when you sign up to our newsletter</p>   
                <div className="news-letter-form">
                    <form>
                        <input type='text' name='email' placeholder="your e-mail address"/>
                        <input type='submit' value='SUBSCRIBE'/>
                    </form>
                </div>
                <div className="follow-bar">
                    <div className="follow-bar-items"><i className="fa-brands fa-twitter"></i></div>
                    <div className="follow-bar-items"><i className="fa-brands fa-instagram"></i></div>
                    <div className="follow-bar-items"><i className="fa-brands fa-facebook"></i></div>
                    <div className="follow-bar-items"><i className="fa-brands fa-pinterest"></i></div>
                </div>
            </div>

            <div className="footer-lists">
                <div className="footer-list-1">
                    <ul>
                        <li className="footer-list-heading">SERVICES</li>
                        <li>Treats Club</li>
                        <li>Piercing Parlour</li>
                        <li>Student Discount</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div className="footer-list-2">
                    <ul>
                        <li className="footer-list-heading">About</li>
                        <li>Our Brand</li>
                        <li>Charity</li>
                        <li>CSR</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer-list-3">
                    <ul>
                        <li className="footer-list-heading">DELIVERY & RETURN</li>
                        <li>Check Order</li>
                        <li>Delivery & Collection</li>
                        <li>Careers</li>
                        <li>Delivery Return</li>
                    </ul>
                </div>
                <div className="footer-list-4">
                    <ul>
                        <li className="footer-list-heading">CUSTOMER SERVICES</li>
                        <li>Terms & Policies</li>
                        <li>Contact Us</li>
                        <li>Opening Hours</li>
                        <li>Size Guides</li>
                         <button className="loginbtn">Login</button>
  
                    </ul>
                </div>
            </div>

            <div className="footer-end">
                <div className="copyright-statement">© Eastern. All Rights Reserved.</div>
                <div className="payment-img">
                    <img src={payment_img}/>
                </div>
            </div>
        
    </div>
    );
}

export default Footer;
