import { Link } from 'react-router-dom';

import "./styles/HeaderBottom.css";

function HeaderBottom(){

    return(

        <div className='wishlist-header-bottom'>

            <div className='wishlist-header-bottom-menu-center'>

                <span href='#' className='wishlist-header-bottom-menuitems-c'>
                    Home
                   <span className="wishlist-header-bottom-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </span>

                <span href='#' className='wishlist-header-bottom-menuitems-c'>
                    Jewellery
                   <span className="header-bottom-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </span>

                <span href='#' className='wishlist-header-bottom-menuitems-c'>
                    Hand Bags
                   <span className="wishlist-bottom-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </span>

                <span href='#' className='wishlist-header-bottom-menuitems-c'>
                    Accessories
                   <span className="wishlist-header-bottom-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </span>

                <span href='#' className='wishlist-header-bottom-menuitems-c'>
                     Sale
                </span>

                <span href='#' className="wishlist-header-bottom-menuitems-c">
                    About US
                </span>

                <span href='#' className="wishlist-header-bottom-menuitems-c">
                    Contact US
                </span>

                <span href='#' className="wishlist-header-bottom-menuitems-c">
                    Blogs
                </span>

            </div>

        </div>
    );
}

export default HeaderBottom;
