import React, { useState , useEffect } from "react";
import { getProductsWishlist , deleteProductWishlist } from '../services/api-productswishlist';

import HeaderTop from "./wishlist-sub-components/HeaderTop";
import HeaderCenter from "./wishlist-sub-components/HeaderCenter";
import HeaderBottom from "./wishlist-sub-components/HeaderBottom";
import Footer from "./wishlist-sub-components/Footer";

import "./wishlist-sub-components/styles/Wishlist.css";
import { Link , useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate;

  const [products, setProducts] = useState([]);

  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  useEffect(() => {
    getAllProducts();
    if (!token) {
        navigate('/loginuser');
    }
}, [token, navigate]);

  const getAllProducts = async () => {
    try {
      const response = await getProductsWishlist();
      const filteredProducts = response.data.filter(product => product.productwisher === email);
      setProducts(filteredProducts);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

    const removeItemFromWishlist = async (itemId) => {
      try {
        // Call the deleteProductWishlist function to remove the item from the database
        await deleteProductWishlist(itemId);
    
        // Remove the item from the local state
        setProducts((prevProducts) =>
          prevProducts.filter((item) => item._id !== itemId)
        );
      } catch (error) {
        console.log('Error removing item from Wishlist:', error);
      }
    };
  
    const removeItem = (itemId) => {
      console.log(itemId);
      removeItemFromWishlist(itemId);
    };

  console.log(products);
  if(products != 0 ){


  return (
    <div className="Wishlist-componenet">
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
      <div className="wishlist-items">

        <div className='wishlist-items-heading'>
          <div className="wishlist-items-heading-product">Product</div>
          <div className="wishlist-items-heading-price">Price</div>
          <div className="wishlist-items-heading-quantity">Quantity</div>
          <div className="wishlist-items-heading-subtotal">Subtotal</div>
        </div>

        {products.map((item) => {
      const image = './images/' + item.img;
      return (
          <div key={item._id} className="wishlist-item">
            <img src={image} alt={item.title} />
            <div className="wishlist-item-details">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>

            <div className="wishlist-item-remove">
              <i className="fa-solid fa-x" onClick={() => removeItem(item._id)}></i>
            </div>
          </div>

        )})}

      </div>

      <Footer />
    </div>
  
  );
  }else{

    return (
      <div className="Cart-componenet">
        <HeaderTop />
        <HeaderCenter />
        <HeaderBottom />
  
        <div className="cart-empty-message">
          <p>your Wishlist is currently empty</p>
          <Link to="../" className="browse-products-button">Browse Products</Link>
        </div>
  
        <Footer />
      </div>
    );
    }
}

export default Wishlist;