import "./styles/MainProducts.css";

import main_product1_img from "./../images/main-product1-img.jpg";
import main_product2_img from "./../images/main-product2-img.jpg";
import main_product3_img from "./../images/main-product3-img.jpg";

function Slider(){
   
    return(
 
        <div className="main-products">

                <div className="main-product1">
                    
                    <div className="main-product-img">
        
                        <img src={main_product1_img} />

                    </div>

                    <div className="main-product-text">
               
                        <h2 className="main-product-heading">Earrings</h2>

                        <p className="main-product-para">shop now
                        <span className="main-product-arrow">
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </span>
                        </p>
                     
                    </div>

                </div>

                <div className="main-product2">
                 
                    <div className="main-product-img">
        
                        <img src={main_product2_img} />

                    </div>

                    <div className="main-product-text">
                
                        <h2 className="main-product-heading">Neklaces</h2>

                        <p className="main-product-para">shop now
                        <span className="main-product-arrow">
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </span>
                        </p>
                    
                    </div>

                </div>

                <div className="main-product3">
                    
                    <div className="main-product-img">
        
                        <img src={main_product3_img} />

                    </div>

                    <div className="main-product-text">
                   
                        <h2 className="main-product-heading">Bracelets</h2>

                        <p className="main-product-para">shop now
                        <span className="main-product-arrow">
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </span>
                        </p>
                 
                    </div>

                </div>
                    
        </div>

    );
}

export default Slider;
