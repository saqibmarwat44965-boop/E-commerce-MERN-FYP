import React, { useState, useEffect } from "react";
import { getProductsCart , deleteProductCart } from '../services/api-productscart';

import HeaderTop from "./cart-sub-components/HeaderTop";
import HeaderCenter from "./cart-sub-components/HeaderCenter";
import HeaderBottom from "./cart-sub-components/HeaderBottom";
import Footer from "./cart-sub-components/Footer";

import "./cart-sub-components/styles/Cart.css";
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

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
      const response = await getProductsCart();
      const filteredProducts = response.data.filter(product => product.productbuyer === email);
      setProducts(filteredProducts);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  const [shippingMethod, setShippingMethod] = useState(null);
  const [shippingCharges, setShippingCharges] = useState(0);

  const calculateShippingCharges = () => {
    if (shippingMethod === 'flat') {
      setShippingCharges(10);
    } else if (shippingMethod === 'local') {
      setShippingCharges(5);
    } else {
      setShippingCharges(10);
    }
  };

  const getTotalPriceWithShipping = () => {
    let total = 0;
    products.forEach((item) => {
      const price = Number(item.price.replace(/[^0-9.-]+/g, ""));
      const quantity = quantities[item._id] || 1; // Default to 1 if quantity is undefined
  
      console.log("Item ID:", item._id);
      console.log("Price:", price);
      console.log("Quantity:", quantity);
      console.log("Subtotal:", price * quantity);
  
      total += price * quantity;
    });
  
    console.log("Total without Shipping:", total);
    console.log("Shipping Charges:", shippingCharges);
    console.log("Total with Shipping:", total + shippingCharges);
  
    return total + shippingCharges;
  };

  const [quantities, setQuantities] = useState({});

  const incrementQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
  };
  
  const decrementQuantity = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  const removeItemFromCart = async (itemId) => {
    try {
      await deleteProductCart(itemId);
  
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== itemId)
      );
  
      setQuantities((prevQuantities) => {
        const { [itemId]: _, ...rest } = prevQuantities;
        return rest;
      });
    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
  };
  
  const removeItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const calculateItemTotal = (item) => {
    const quantity = quantities[item._id] || 1; // Check if quantity exists, default to 1 if not
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return price * quantity;
  };

  const getTotalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      const price = Number(item.price.replace(/[^0-9.-]+/g, ""));
      const quantity = quantities[item._id] || 1; // Default to 1 if quantity is undefined
  
      console.log("Item ID:", item._id);
      console.log("Price:", price);
      console.log("Quantity:", quantity);
      console.log("Subtotal:", price * quantity);
  
      total += price * quantity;
    });
  
    console.log("Total:", total);
    return total;
  };

  console.log(products);
  if(products.length !== 0 ){

  return (
    <div className="Cart-component">
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />

      

      <div className="cart-items">

        <div className='cart-items-heading'>
          <div className="cart-items-heading-product">Product</div>
          <div className="cart-items-heading-price">Price</div>
          <div className="cart-items-heading-quantity">Quantity</div>
          <div className="cart-items-heading-subtotal">Subtotal</div>
        </div>

      {products.map((item) => {
      const image = './images/' + item.img;
      return (
        <div key={item._id} className="cart-item">
          <img src={image} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
          <div className="quantity-button">
            <button
              className="product-increament"
              onClick={() => incrementQuantity(item._id)}
            >
              +
            </button>
            <div className="product-quantity">
              {quantities[item._id] !== undefined ? quantities[item._id] : 1}
            </div>
            <button
              className="product-decreament"
              onClick={() => decrementQuantity(item._id)}
            >
              -
            </button>
          </div>
          <div className="cart-item-total">
            <p>${calculateItemTotal(item)}</p>
          </div>
          <div className="cart-item-remove">
            <i className="fa-solid fa-x" onClick={() => removeItem(item._id)}></i>
          </div>
        </div>
      );
    })}

      </div>

      <div className="cart-totals-card">
        <div className="cart-totals-card-heading">
          <h2>Cart totals</h2>
        </div>
        <div className="cart-totals-card-subtotals">
          <div className="cart-totals-card-subtotals-heading">Subtotal</div>
          <div className="cart-totals-card-subtotals-price">${getTotalPrice()}</div>
        </div>
        <div className="cart-totals-card-shipping">
          <div className="cart-totals-card-shipping-heading">Shipping</div>
          <div className="cart-totals-card-shipping-details">
            <div className="cart-totals-card-shipping-flat">
              <input type='radio' name='shippingCharges' onChange={() => setShippingMethod('flat')} />Flat rate: $10.00
            </div>
            <div className="cart-totals-card-shipping-local">
              <input type='radio' name='shippingCharges' onChange={() => setShippingMethod('local')} />Local pickup: $5.00
            </div>
            <div className="cart-totals-card-shipping-discription">
              Shipping options will be updated<br />during checkout.
            </div>
            <div className="cart-totals-card-shipping-calculate" onClick={calculateShippingCharges}>
              <i className="fa-solid fa-truck-fast"></i>CALCULATE SHIPPING
            </div>
          </div>
          <div className="cart-totals-card-total">
            <div className="cart-totals-card-total-heading">Total</div>
            <div className="cart-totals-card-total-price">${getTotalPriceWithShipping().toFixed(2)}</div>
          </div>
        </div>
        <div className="cart-totals-card-button">
            PROCEED TO CHECKOUT
        </div>
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
          <p>your Cart is currently empty</p>
          <Link to="../" className="browse-products-button">Browse Products</Link>
        </div>
  
        <Footer />
      </div>
    );
    }
}

export default Cart;