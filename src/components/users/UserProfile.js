import { getProducts , deleteProduct } from '../../services/api-products';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import HeaderTop from '../cart-sub-components/HeaderTop';
import HeaderCenter from '../cart-sub-components/HeaderCenter';
import HeaderBottom from '../cart-sub-components/HeaderBottom';
import Footer from '../cart-sub-components/Footer';
import Cart from '../Cart';
import Admin from './Admin';
import "./styles/AllUsers.css";

const UserProfile = ({ cartItems,setCartItems }) => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');
    
    useEffect(() => {
        getAllProducts();
        if (!token) {
            navigate('/loginuser');
        }
    }, [token, navigate]);

    const getAllProducts = async () => {
        try {
          const response = await getProducts();
          const filteredProducts = response.data.filter(product => product.productUploader === email);
          setProducts(filteredProducts);
        } catch (error) {
          console.log('Error fetching products:', error);
        }
      };
    
      const deleteProductDetails = async (id) => {
        await deleteProduct(id);
        getAllProducts();
      };

      let sno = 1;

      if(role === 'seller'){
            return (
                <>
                    <HeaderTop />
                    <HeaderCenter />
                    <HeaderBottom />

                    <div className='admin-allusers-main'>
                    <table className='admin-allusers-table'>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>ProductName</th>
                        <th>Email</th>
                        <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                                products.map(product => (
                                <tr key={product._id}>
                                    <td>{sno++}</td>
                                    <td>{product.productname}</td>
                                    <td>{product.title}</td>
                                    <td><Link to={`/editproduct/product/${product._id}`}><span className='admin-allproducts-edit-link'>Edit</span></Link>
                                        <a onClick={() => deleteProductDetails(product._id)}  className='admin-allproducts-delete-link'>
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                                ))
                            }
                    </tbody>
                    </table>
                </div>

                    <Footer />
                </>
                )

                }
                else if(role === 'buyer'){
                    
                    return (
                        <>
                            <Cart cartItems={cartItems} setCartItems={setCartItems}/>
                        </>
                        )
                }
                else if(role === 'admin'){
                    
                    return (
                        <>
                            <Admin />
                        </>
                        )
                }
            }

export default UserProfile;