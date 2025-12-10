import React, { useState, useEffect } from "react";
import "./styles/FeatureProduct.css";
import { getProducts } from "../../services/api-products"; // Import the API function to retrieve products

const FeatureProduct = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []); 

  const fetchProducts = async () => {
    try {
      const response = await getProducts(); // Call the API function to get products
      const products = response.data; // Extract the product data from the response
      setItems(products);
    } catch (error) {
      console.log('Error while fetching products:', error);
    }
  };

    return(
        <>
        <div className='feature-products-main-box'>

            <div className="feature-products">

                {items.map(({ id, status, discount, title, price, img }) => {

                    return (
        
                            <div key={id} className="feature-product-box">

                                <div className="feature-product-upper">

                                    {status != " " ? (
                                        <>
                                            <div className="feature-product-status"> {status} </div>
                                        </>
                                    ) : null}

                                    {discount != " " ? (
                                        <>
                                            <div className="feature-product-discount"> {discount} </div>
                                        </>
                                    ) : null}

                                    <div className="feature-product-interact">
                                        <div className="feature-wishlist">
                                            <span className="feature-wishlist-icon"><i class="fa-regular fa-heart"></i></span>
                                            <span className="feature-wishlist-title">Wishlist</span>
                                        </div>
                                        <div className="feature-quickview">
                                            <span className="feature-quickview-icon"><i class="fa-solid fa-search"></i></span>
                                            <span className="feature-quickview-title">Quick Look</span>
                                        </div>
                                        <div className="feature-compare">
                                            <span className="feature-compare-icon"><i class="fa-solid fa-code-compare"></i></span>
                                            <span className="feature-compare-title">Compare</span>
                                        </div>
                                    </div>
                                    <div className="feature-product-interact-hidder"></div>

                                    <div className="feature-product-img" >
                                        
                                        <img src={`http://localhost:5000/product-images/${img}`} />
                                        
                                    </div>

                                    <div className="feature-quicklook">
                                        <span className="feature-look-text">ADD TO CART</span>
                                    </div>

                                </div>
                                <div className="feature-quicklook-hidder"></div>

                                <div className="feature-product-lower">
                                     
                                    <div className="feature-product-title"> {title} </div>
                                    
                                    <p className="feature-product-price">{price}</p>
                                    
                                </div>

                            </div>

                    );
                })}

            </div>

        </div>
        </>
    );
}

export default FeatureProduct;
