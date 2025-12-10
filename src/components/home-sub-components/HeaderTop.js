import "./styles/HeaderTop.css";

function HeaderTop(){

    return(

        <div className='header-top'>

            <div className="header-top-discription">
                ENJOY 10% OFF WITH THREE OR MORE ITEMS & FREE SHIPPING ON ALL ORDERS.
            </div>

            <div className='header-top-menu-right'>
 
                <a href='#' className="header-top-menuitems-r">
                    About US
                </a>

                <a href='#' className="header-top-menuitems-r">
                    Contact US
                </a>
            
                <a href='#' className='header-top-menuitems-r'>
                    English
                   <span className="header-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </a>

                <a href='#' className="header-top-menuitems-r">
                    USD
                    <span className="header-dropdown-icon">
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </a>

            </div>

        </div>
    );
}

export default HeaderTop;
