import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import "./styles/HeaderCenter.css";

import logo from "./../../logo.png";

function HeaderBottom(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      console.log(token)
      setIsLoggedIn(!!token); // Check if token exists
  
      return () => {
          
      };
    }, []);

    return(

        <div className='wishlist-header-center'>

            <div className='wishlist-header-center-menu-left'>

                <a href='#' className='wishlist-header-bottom-menuitems-l'>
                   <span className="wishlist-header-bottom-Search-icon">
                        <i className="fa-solid fa-search"></i>
                    </span>
                    Search
                </a>

                <a href='#' className='wishlist-header-center-menuitems-l'>
                   <span className="wishlist-header-bottom-location-icon">
                        <i className="fa-solid fa-location"></i>
                    </span>
                    Find a Store
                </a>

            </div>

            <div className='wishlist-logo'>
                    <img src={logo} />
            </div>

            <div className='wishlist-header-center-menu-right'>

                <a href='#' className='wishlist-header-center-menuitems-r'>
                    <span className='wishlist-header-center-help'>NEED HELP?</span>
                    <span className="wishlist-header-center-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </a>

                <a href='#' className='wishlist-header-center-menuitems-r-icon'>
                   <span className="wishlist-header-center-user-icon">
                         <i className="fa-regular fa-user"></i>
                    </span>
                    {isLoggedIn && <span className='active-user-indicator'></span>}
                </a>

                <a href='#' className='wishlist-header-center-menuitems-r-icon'>
                   <span className="wishlist-header-center-favourite-icon">
                        <i className="fa-regular fa-heart"></i>
                    </span>
                </a>

                <a href='#' className='wishlist-header-center-menuitems-r-icon'>
                   <span className="wishlist-header-center-cart-icon">
                        <Link to="wishlist-main" ><i className="fa-solid fa-cart-shopping"></i></Link>
                    </span>
                </a>

            </div>

        </div>
    );
}

export default HeaderBottom;
