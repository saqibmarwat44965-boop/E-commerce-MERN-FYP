import "./styles/HeaderTop.css";

function HeaderTop(){

    return(

        <div className='wishlist-header-top'>

            <div className="wishlist-header-top-discription">
                ENJOY 15% OFF WITH TWO OR MORE ITEMS & FREE SHIPPING ON ALL ORDERS.
            </div>
             
            <div className='wishlist-header-top-menu-right'>

                <a href='#' className='wishlist-header-top-menuitems-r'>
                    English
                   <span className="wishlist-header-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </a>

                <a href='#' className="wishlist-header-top-menuitems-r">
                    USD
                    <span className="wishlist-header-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </a>

            </div>

        </div>
    );
}

export default HeaderTop;