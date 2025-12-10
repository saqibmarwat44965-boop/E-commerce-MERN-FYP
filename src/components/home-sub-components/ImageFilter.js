import React, { useState, useEffect } from "react";
import "./styles/ImageFilter.css";
import { getProducts } from "../../services/api-products";
import { addProductCart } from "../../services/api-productscart";
import { addProductWishlist } from "../../services/api-productswishlist";

const ImageFilter = (props) => {
  const [productBuyer, setProductBuyer] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
 
  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      const products = response.data;
      setItems(products);
    } catch (error) {
      console.log('Error while fetching products:', error);
    }
  };

  const [Items, setProducts] = useState([]);

  useEffect(() => {
    const buyer = localStorage.getItem("email");
    setProductBuyer(buyer);
    setProducts(items);
  }, [items]);

  const filterItem = (cateProduct) => {
    const updatedProducts = items.filter((curElem) => {
      return curElem.category === cateProduct;
    });
    setProducts(updatedProducts);
  };

  const handleAddToCart = async (item) => {
    try {
      console.log('item:', item);
      console.log('productBuyer:', productBuyer);
      const product = { ...item, productbuyer: productBuyer , quantity: 1 };
      const response = await addProductCart(product);
      if (response.status === 201) {
        // Product successfully added to the cart
        // You can show a success message or perform any other action
      } else {
        // There was an error adding the product to the cart
        // You can show an error message or perform any other action
      }
    } catch (error) {
      console.log('Error while adding to cart:', error);
    }
  };

  const handleAddToWishlist = async (item) => {
    try {
      console.log('item:', item);
      console.log('productBuyer:', productBuyer);
      const product = { ...item, productwisher: productBuyer , quantity: 1 };
      const response = await addProductWishlist(product);
      if (response.status === 201) {
        // Product successfully added to the cart
        // You can show a success message or perform any other action
      } else {
        // There was an error adding the product to the cart
        // You can show an error message or perform any other action
      }
    } catch (error) {
      console.log('Error while adding to wishlist:', error);
    }
  };


    return(
        <>
        <div className='ProductsFilter'>

            <div className='category-menu'>
                <a className="category-menuitems" onClick={() => filterItem('Earrings')}>Earrings</a>
                <a className="category-menuitems" onClick={() => filterItem('handbags')}>Handbags</a>
                <a className="category-menuitems" onClick={() => filterItem('Bracelets')}>Bracelets</a>
                <a className="category-menuitems" onClick={() => filterItem('Anklets')}>Anklets</a>
                <a  className="category-menuitems" onClick={() => filterItem('Necklaces')}>Necklaces</a>
                <a className="category-menuitems" onClick={() => filterItem('Rings')}>Rings</a>
            </div>

            <div className="products">

                {Items.map(({ id, productname, category, status,  discount, title, color, brand, materials, style,
                              price, quantity, img, productUploader, productbuyer , productwisher}) => {

                    return (
                        
        
                            <div key={id} className="product-box">

                                <div className="product-upper">
                        
                                    {status != " " ? (
                                        <>
                                            <div className="product-status"> {status} </div>
                                        </>
                                    ) : null}

                                    {discount != " " ? (
                                        <>
                                            <div className="product-discount"> {discount} </div>
                                        </>
                                    ) : null}

                                    <div className="product-interact">
                                        <div className="wishlist">
                                            <span className="wishlist-icon" onClick={() => handleAddToWishlist({id,
                                                                                                                productname,
                                                                                                                category,
                                                                                                                status,
                                                                                                                discount,
                                                                                                                title,
                                                                                                                color,
                                                                                                                brand,
                                                                                                                materials,
                                                                                                                style,
                                                                                                                price,
                                                                                                                quantity,
                                                                                                                img,
                                                                                                                productUploader,
                                                                                                                productwisher})}>
                                                <i class="fa-regular fa-heart"></i>
                                            </span>
                                            <span className="wishlist-title">Wishlist</span>
                                        </div>
                                        <div className="quickview">
                                            <span className="quickview-icon"><i class="fa-solid fa-search"></i></span>
                                            <span className="quickview-title">Quick Look</span>
                                        </div>
                                        <div className="compare">
                                            <span className="compare-icon"><i class="fa-solid fa-code-compare"></i></span>
                                            <span className="compare-title">Compare</span>
                                        </div>
                                    </div>
                                    <div className="product-interact-hidder"></div>

                                    <div className="product-img" >
                                        
                                        <img src={`http://localhost:5000/product-images/${img}`} />
                                        
                                    </div>

                                    <div className="quicklook" onClick={() => handleAddToCart({id,
                                                                                                productname,
                                                                                                category,
                                                                                                status,
                                                                                                discount,
                                                                                                title,
                                                                                                color,
                                                                                                brand,
                                                                                                materials,
                                                                                                style,
                                                                                                price,
                                                                                                quantity,
                                                                                                img,
                                                                                                productUploader,
                                                                                                productbuyer})}>
                                        <span className="look-text">ADD TO CART</span>
                                    </div>

                                </div>
                                <div className="quicklook-hidder"></div>

                                <div className="product-lower">
                                     
                                    <div className="product-title"> {title} </div>
                                    
                                    <p className="product-price">{price}</p>
                                    
                                </div>

                            </div>

                        
                    );
                })}

            </div>

        </div>
        </>
    );
}

export default ImageFilter;
