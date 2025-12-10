import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import "./styles/HeaderBottom.css";

import logo from "./../../logo.png";
import home_link_dropdown_image1 from "./../images/home-link-dropdown-image1.png";
import home_link_dropdown_image2 from "./../images/home-link-dropdown-image2.png";
import handbags_link_dropdown_image1 from "./../images/main-product1-img.jpg";
import handbags_link_dropdown_image2 from "./../images/main-product2-img.jpg";
import handbags_link_dropdown_image3 from "./../images/main-product3-img.jpg";
import accessories_link_dropdown_image1 from "./../images/accessories-dropdown-image1.jpg";
import LogoutUser from "./../users/LogoutUser";
 
function HeaderBottom() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    setIsLoggedIn(!!token); // Check if token exists
    setIsNotLoggedIn(!token); // Check if token exists

    return () => {
        
    };
  }, []);

    return(

        <div className='header-bottom'>
            <div className='logo'>
                <img src={logo} />
            </div>

            <div className='header-bottom-menu-right'>

                <span href='#' className='header-bottom-menuitems-r home-link'>
                <Link to="/" >Home</Link>
                   <span className="header-bottom-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <div className='home-link-dropdown'>
                        <div className='home-link-dropdown-images'>
                            <div className='home-link-dropdown-image1'>
                                <img src={home_link_dropdown_image1} />
                            </div>
                            <div className='home-link-dropdown-image2'>
                                <img src={home_link_dropdown_image2} />
                            </div>
                        </div>
                        <div className='home-link-dropdown-lists'>
                            <div className='home-link-dropdown-list'>
                                <ul>
                                   <li className='home-link-dropdown-list-heading'>Shop</li>
                                   <li>Filter Dropdown</li>
                                   <li>Filter Sidebar</li>
                                   <li>Floating Sidebar</li>
                                   <li>Shop Sidebar</li>
                                   <li>Load More Button</li>
                                   <li>Infinity Scroll</li>
                                   <li>Ajax Pagination</li>
                                </ul>
                            </div>
                            <div className='home-link-dropdown-list'>
                                <ul>
                                    <li className='home-link-dropdown-list-heading'>Product</li>
                                    <li>Vertical Thumbnails</li>
                                    <li>Horizontal Thumbnails</li>
                                    <li>Grid Thumbnails</li>
                                    <li>Slider Thumbnails</li>
                                    <li>Tabs Inside Summary</li>
                                    <li>Variable Product</li>
                                    <li>Variation Thumbnails</li>
                                    <li>Attribute Dropdown</li>
                                    <li>Size Guide</li>
                                    <li>Discounted Product</li>
                                </ul>
                            </div>
                            <div className='home-link-dropdown-list'>
                                <ul>
                                    <li className='home-link-dropdown-list-heading'>Other</li>
                                    <li>Blog</li>
                                    <li>Blog 2 Columns</li>
                                    <li>Blog Post 1</li>
                                    <li>Blog Post 2</li>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>404</li>
                                    <li>Coming Soon</li>
                                    <li>Track Order</li>
                                    <li>Typography</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </span>

                <span href='#' className='header-bottom-menuitems-r jewelry-link'>
                <Link to="/categories?category=Jewelery" >Jewellery</Link>
                   <span className="header-bottom-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <div className='jewelry-link-dropdown'>
                        <div className='jewelry-link-dropdown-lists'>
                            <div className='jewelry-link-dropdown-list'>
                                <ul>
                                   <li className='jewelry-link-dropdown-list-heading'>New in</li>
                                   <li>Jewelry</li>
                                   <li>Watches</li>
                                   <li>Handbags</li>
                                   <li>Accessories</li>
                                </ul>
                                <div className='jewelry-link-dropdown-image1'>
                                    <img src={home_link_dropdown_image1} />
                                </div>
                            </div>
                            <div className='jewelry-link-dropdown-list'>
                                <ul>
                                    <li className='jewelry-link-dropdown-list-heading'>Curated Shops</li>
                                    <li>Earrings</li>
                                    <li>Piercings</li>
                                    <li>Bracelets</li>
                                    <li>Rings</li>
                                    <li>Necklaces</li>
                                    <li>Pendants</li>
                                    <li>Link Chain</li>
                                    <li>Diamonds</li>
                                </ul>
                            </div>
                            <div className='jewelry-link-dropdown-list'>
                                <ul>
                                    <li className='jewelry-link-dropdown-list-heading'>Accessories</li>
                                    <li>Hair Accessory</li>
                                    <li>Other accessories</li>
                                    <li>Perfumes</li>
                                    <li>Scarves & others</li>
                                    <li>Sunglasses</li>
                                    <li>Toiletry bags</li>
                                    <li>Wallets & Purses</li>
                                </ul>
                            </div>
                            <div className='jewelry-link-dropdown-list'>
                                <ul>
                                    <li className='jewelry-link-dropdown-list-heading'>Bags</li>
                                    <li>Backpacks & luggage</li>
                                    <li>Basics</li>
                                    <li>Crossbody bags</li>
                                    <li>Daily Basics</li>
                                    <li>Large-sized handbags</li>
                                    <li>Medium-sized handbags</li>
                                    <li>Small-sized handbags</li>
                                </ul>
                            </div>
                            <div className='jewelry-link-dropdown-list'>
                                <ul>
                                    <li className='jewelry-link-dropdown-list-heading'>Watches</li>
                                    <li>For her</li>
                                    <li>For kids & baby</li>
                                    <li>For man</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </span>

                <span href='#' className='header-bottom-menuitems-r handbags-link'>
                    <Link to="/categories?category=handbags" >Hand Bags</Link>
                   <span className="header-bottom-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <div className='handbags-link-dropdown'>
                        <div className='handbags-link-dropdown-lists'>
                            <div className='handbags-link-dropdown-list'>
                                <ul>
                                    <li className='handbags-link-dropdown-list-heading'>Shop By Product</li>
                                    <li>Earrings</li>
                                    <li>Necklaces</li>
                                    <li>Rings</li>
                                    <li>Bracelets</li>
                                    <li>Anklets</li>
                                    <li>Body Jewelry</li>
                                </ul>
                            </div>
                            <div className='handbags-link-dropdown-list'>
                                <ul>
                                    <li className='handbags-link-dropdown-list-heading'>Shop By Collection</li>
                                    <li>Sterling silver</li>
                                    <li>Accessories</li>
                                    <li>Gold Vermeil</li>
                                    <li>Wedding & Bridal jewellery</li>
                                    <li>Pearl jewellery</li>
                                    <li>Healing stone jewellery</li>
                                    <li>Hoop earrings</li>
                                    <li>Initials jewellery</li>
                                </ul>
                            </div>
                            <div className='handbags-link-dropdown-images'>
                                <div className='handbags-link-dropdown-image'>
                                    <img src={handbags_link_dropdown_image1} />
                                </div>
                                <div className='handbags-link-dropdown-image'>
                                    <img src={handbags_link_dropdown_image2} />
                                </div>
                                <div className='handbags-link-dropdown-image'>
                                    <img src={handbags_link_dropdown_image3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </span>

                <span href='#' className='header-bottom-menuitems-r accessories-link'>
                    <Link to="/categories?category=Accessories" >Accessories</Link>
                   <span className="header-bottom-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <div className='accessories-link-dropdown'>
                        <div className='accessories-link-dropdown-lists'>
                            <div className='accessories-link-dropdown-list'>
                                <ul>
                                   <li className='accessories-link-dropdown-list-heading'>Shop By Product</li>
                                    <li>Earrings</li>
                                    <li>Necklaces</li>
                                    <li>Rings</li>
                                    <li>Bracelets</li>
                                    <li>Anklets</li>
                                    <li>Body Jewelry</li>
                                </ul>
                            </div>
                            <div className='accessories-link-dropdown-list'>
                                <ul>
                                    <li className='accessories-link-dropdown-list-heading'>Shop By Collection</li>
                                    <li>Sterling silver</li>
                                    <li>Accessories</li>
                                    <li>Gold Vermeil</li>
                                    <li>Wedding & Bridal jewellery</li>
                                    <li>Pearl jewellery</li>
                                </ul>
                            </div>
                            <div className='accessories-link-dropdown-list'>
                                <ul>
                                    <li className='accessories-link-dropdown-list-heading'>Curated Shops</li>
                                    <li>Gifts for Her</li>
                                    <li>Most Popular Jewelry</li>
                                    <li>New Jewelry</li>
                                    <li>High Jewelry</li>
                                    <li>Bold Silver Jewelry</li>
                                    <li>Stacking Rings</li>
                                </ul>
                            </div>
                        </div>
                        <div className='accessories-link-dropdown-images'>
                            <div className='accessories-link-dropdown-image'>
                                <img src={accessories_link_dropdown_image1} />
                            </div>
                        </div>
                    </div>
                </span>

                <span href='#' className='header-bottom-menuitems-r'>
                    <Link to="/categories" >Super Sale</Link>
                   <span className="header-bottom-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </span>

                <span href='#' className='header-bottom-menuitems-r'>
                   <span className="header-bottom-Search-icon">
                        <i className="fa-solid fa-search"></i>
                    </span>
                    Search
                </span>

               
                <span href='#' className='header-bottom-menuitems-r-icon'>

                    {isNotLoggedIn && <span className="header-bottom-user-icon">
                        <Link to={"/loginuser"}><i className="fa-regular fa-user"></i></Link>
                    </span>}
                
                    {isLoggedIn &&
                    <span className="header-bottom-user-icon">
                        <Link to={"/userprofile"}><i className="fa-regular fa-user"></i></Link>
                    </span>}
                    
                    {isLoggedIn &&
                        <span className='active-user-indicator'><LogoutUser /></span>
                    }
                </span>

                <span href='#' className='header-bottom-menuitems-r-icon'>
                   <span className="header-bottom-favourite-icon">
                    <Link to="wishlist" ><i className="fa-regular fa-heart"></i></Link>
                    </span>
                </span>

                <span href='#' className='header-bottom-menuitems-r-icon'>
                   <span className="header-bottom-cart-icon">
                        <Link to="cart-main" ><i className="fa-solid fa-cart-shopping"></i></Link>
                    </span>
                </span>

            </div>

        </div>
    );
}

export default HeaderBottom;
