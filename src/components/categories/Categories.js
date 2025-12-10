import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import HeaderTop from "./../cart-sub-components/HeaderTop";
import HeaderCenter from "./../cart-sub-components/HeaderCenter";
import HeaderBottom from "./../cart-sub-components/HeaderBottom";
import Footer from "./../cart-sub-components/Footer";
import { getProducts } from "../../services/api-products"; // Import the API function to retrieve products

import "./categories-style/Categories.css";
 
function Categories(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const curElem = category;

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
      console.log("Error while fetching products:", error);
    }
  };

  useEffect(() => {
    filterItem(curElem);
  }, [curElem]);

  const filterItem = (cateProduct) => {
    const updatedProduct = items.filter((curElem) => {
      return curElem.category === cateProduct;
    });
    setItems(updatedProduct);
  };

  const handleAddToCart = (item) => {
    props.addToCart(item);
  };

  const handleAddToWishlist = (item) => {
    props.addToWishlist(item);
  };


  return (
    <div className="Categories-componenet">
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />

      <div className='Categories-ProductsFilter'>

            <div className='category-products-menu'>
                <div className="category-product-basic-list">
                    <span className="cate-categories">Categories</span>
                    <div className="list-categories">
                        <li><a className="category-menuitems" onClick={() => filterItem('Earrings')}>Earrings</a></li>
                        <li><a  className="category-menuitems" onClick={() => filterItem('handbags')}>Handbags</a></li>
                        <li><a  className="category-menuitems" onClick={() => filterItem('Necklaces')}>Necklaces</a></li>
                        <li><a className="category-menuitems" onClick={() => filterItem('Rings')}>Rings</a></li>
                        <li><a className="category-menuitems" onClick={() => filterItem('Bracelets')}>Bracelets</a></li>
                        <li><a className="category-menuitems" onClick={() => filterItem('Anklets')}>Anklets</a></li>
                        <li><a className="category-menuitems" onClick={() => filterItem('Jewelery')}>Jewelery</a></li>
                    </div>
                </div>
                <div className="category-product-menu-main-list">

                    <div className="cate-color">
                        Color
                        <ul className="category-product-menu-main-list list-color">
                            <li>Black</li>
                            <li>Brown</li>
                            <li>Pink</li>
                            <li>Cream</li>
                            <li>Offwhite</li>
                        </ul>
                    </div>
                    <div className="cate-brand">
                        Brand
                        <ul className="category-product-menu-main-list list-brand">
                            <li>Addidas</li>
                            <li>Gucci</li>
                            <li>Chenal</li>
                        </ul>
                    </div>
                    <div className="cate-materials">
                        Materials
                        <ul className="category-product-menu-main-list list-materials">
                            <li>Fabric</li>
                            <li>Leather</li>
                            <li>Oxhide</li>
                        </ul>
                    </div>
                    <div className="cate-style">
                        Style
                        <ul className="category-product-menu-main-list list-style">
                            <li>90's Flashback</li>
                            <li>Fashion</li>
                            <li>Classics</li>
                        </ul>
                    </div>


                </div>

            </div>

            <div className="category-products">

                {items.map(({ id, status, discount, title, price, img }) => {

                    const image = './../images/' + img;

                    return (
                        
        
                            <div key={id} className="category-product-box">

                                <div className="category-product-upper">

                                    {status != " " ? (
                                        <>
                                            <div className="category-product-status"> {status} </div>
                                        </>
                                    ) : null}

                                    {discount != " " ? (
                                        <>
                                            <div className="category-product-discount"> {discount} </div>
                                        </>
                                    ) : null}

                                    <div className="category-product-interact">
                                        <div className="category-wishlist">
                                            <span className="category-wishlist-icon" onClick={() => handleAddToWishlist({title, img, id})}>
                                                <i class="fa-regular fa-heart"></i>
                                            </span>
                                            <span className="category-wishlist-title">Wishlist</span>
                                        </div>
                                        <div className="category-quickview">
                                            <span className="category-quickview-icon"><i class="fa-solid fa-search"></i></span>
                                            <span className="category-quickview-title">Quick Look</span>
                                        </div>
                                        <div className="category-compare">
                                            <span className="category-compare-icon"><i class="fa-solid fa-code-compare"></i></span>
                                            <span className="category-compare-title">Compare</span>
                                        </div>
                                    </div>
                                    <div className="category-product-interact-hidder"></div>

                                    <div className="category-product-img" >
                                        
                                        <img src={image} />
                                        
                                    </div>

                                    <div className="category-quicklook" onClick={() => handleAddToCart({title, price, img, id})}>
                                        <span className="category-look-text">ADD TO CART</span>
                                    </div>

                                </div>
                                <div className="category-quicklook-hidder"></div>

                                <div className="category-product-lower">
                                     
                                    <div className="category-product-title"> {title} </div>
                                    
                                    <p className="category-product-price">{price}</p>
                                    
                                </div>

                            </div>

                        
                    );
                })}

            </div>

        </div>

      <Footer />
    </div>
  );
}

export default Categories;