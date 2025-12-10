import { getProducts , deleteProduct } from '../../services/api-products';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import HeaderTop from '../cart-sub-components/HeaderTop';
import HeaderCenter from '../cart-sub-components/HeaderCenter';
import HeaderBottom from '../cart-sub-components/HeaderBottom';
import Footer from '../cart-sub-components/Footer';
import "./styles/AllProducts.css";

const AllProducts = () => {

    const navigate = useNavigate();
    const adminEmail = localStorage.getItem('email');
    console.log(adminEmail)
    useEffect(() => {
        if (adminEmail === 'saqibmarwat44965@gmail.com') {
            
        } else {
        navigate('/loginuser');
        }
    }, [adminEmail, navigate]);
  

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getAllProducts();
    }, []);

    const getAllProducts = async() => {
        let response = await getProducts();
        console.log(response)
         setProducts(response.data);
    }  

    const deleteProductDetails = async (id) =>{
        await deleteProduct(id);
        getAllProducts();
    }

    let sno = "1";

    return (
        <>
            <HeaderTop />
            <HeaderCenter />
            <HeaderBottom />

            <div className='allproducts-main'>
            <table>
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
                            <td><Link to={`/editproduct/product/${product._id}`}><span className='allproducts-edit-link'>Edit</span></Link>
                                <button onClick={() => deleteProductDetails(product._id)}  className='allproducts-delete-link'>Delete</button>
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

export default AllProducts;