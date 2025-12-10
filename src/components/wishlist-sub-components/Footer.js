import "./styles/Footer.css";
import payment_img from './../images/01-pay.png';

function Footer(){

    return(

        <div className="Wishlist-Footercomponent">

            <div className="wishlist-news-letter">
                <h2 className="wishlist-news-letter-heading">NEWSLETTER SIGN UP</h2>
                <p className="wishlist-news-letter-para">Enjoy 15% off* your first order when you sign up to our newsletter</p>   
                <div className="wishlist-news-letter-form">
                    <form>
                        <input type='text' name='email' placeholder="your e-mail address"/>
                        <input type='submit' value='SUBSCRIBE'/>
                    </form>
                </div>
                <div className="wishlist-follow-bar">
                    <div className="wishlist-follow-bar-items"><i className="fa-brands fa-twitter"></i></div>
                    <div className="wishlist-follow-bar-items"><i className="fa-brands fa-instagram"></i></div>
                    <div className="wishlist-follow-bar-items"><i className="fa-brands fa-facebook"></i></div>
                    <div className="wishlist-follow-bar-items"><i className="fa-brands fa-pinterest"></i></div>
                </div>
            </div>

            <div className="wishlist-footer-lists">
                <div className="wishlist-footer-list-1">
                    <ul>
                        <li className="wishlist-footer-list-heading">SERVICES</li>
                        <li>Treats Club</li>
                        <li>Piercing Parlour</li>
                        <li>Student Discount</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div className="wishlist-footer-list-2">
                    <ul>
                        <li className="wishlist-footer-list-heading">About</li>
                        <li>Our Brand</li>
                        <li>Charity</li>
                        <li>CSR</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="wishlist-footer-list-3">
                    <ul>
                        <li className="wishlist-footer-list-heading">DELIVERY & RETURN</li>
                        <li>Check Order</li>
                        <li>Delivery & Collection</li>
                        <li>Careers</li>
                        <li>Delivery Return</li>
                    </ul>
                </div>
                <div className="wishlist-footer-list-4">
                    <ul>
                        <li className="wishlist-footer-list-heading">CUSTOMER SERVICES</li>
                        <li>Terms & Policies</li>
                        <li>Contact Us</li>
                        <li>Opening Hours</li>
                        <li>Size Guides</li>
                        <div><button className="Loginbtn">Login</button></div>
                    </ul>
                </div>
            </div>

            <div className="wishlist-footer-end">
                <div className="wishlist-copyright-statement">© Jaroti. All Rights Reserved.</div>
                <div className="wishlist-payment-img">
                    <img src={payment_img}/>
                </div>
            </div>
        
    </div>
    );
}

export default Footer;
