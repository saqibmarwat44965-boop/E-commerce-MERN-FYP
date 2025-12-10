import { getUsers, deleteUser } from '../../services/api-users';
import { getProducts , deleteProduct } from '../../services/api-products';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Link, useNavigate } from 'react-router-dom';

import HeaderBottom from './../cart-sub-components/HeaderCenter';
import HeaderTop from './../cart-sub-components/HeaderTop';
import Footer from './Footer';

import './styles/Admin.css';
import 'react-calendar/dist/Calendar.css';
import logo_white from './../images/logo-white.png';


const Admin = () => {

  const navigate = useNavigate();
  const adminEmail = localStorage.getItem('email');
  console.log(adminEmail)
  useEffect(() => {
    if (adminEmail === 'saqibmarwat44965@gmail.com') {
      navigate('/admin-panel');
    } else {
      navigate('/loginuser');
    }
  }, [adminEmail, navigate]);

  // Active section state
  const [activeSection, setActiveSection] = useState('dashboard');

  // All Users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  let sno = "1";
  // All Users

  //ALL PRODUCTS
  const [products, setProducts] = useState([]);

    useEffect(()=>{
        getAllProducts();
    }, []);

    const getAllProducts = async() => {
        let response = await getProducts();
         setProducts(response.data);
    }  

    const deleteProductDetails = async (id) =>{
        await deleteProduct(id);
        getAllProducts();
    }
  //ALL PRODUCTS

  // Calender
  const [value, onChange] = useState(new Date());
  // Calender

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Filter users registered in the last month
  const getLastMonthUsers = () => {
    const currentDate = new Date();
    const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
    console.log(users);
    return users.filter(user => new Date(user.registrationDate) >= lastMonthDate);
  };

  const lastMonthUsers = getLastMonthUsers();


  // Filter products registered in the last month
  const getLastMonthProducts = () => {
    const currentDate = new Date();
    const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
    return products.filter(product => new Date(product.registrationDate) >= lastMonthDate);
  };

  const lastMonthProducts = getLastMonthProducts();

  return (
    <div className='admin-panel-main'>
      <HeaderTop />
      <HeaderBottom />
      <div className='admin-sidebar'>
        <div className='admin-sidebar-logo'>
          <img src={logo_white} alt='Logo' />
        </div>
        <div className='admin-sidebar-dashboard' onClick={() => handleSectionClick('dashboard')}>
          <Link to='/admin-panel' className='link-sidebar'>
            Dashboard
          </Link>
        </div>
        <div className='admin-sidebar-users-table' onClick={() => handleSectionClick('users')}>
          Users
        </div>
        <div className='admin-sidebar-products-table' onClick={() => handleSectionClick('products')}>products</div>
        <div className='admin-sidebar-adduser'>
          <Link to='/adduser' className='link-sidebar'>
            AddUser
          </Link>
        </div>
        <div className='admin-sidebar-addproduct'>
          <Link to='/addproduct' className='link-sidebar'>
            AddProduct
          </Link>
        </div>
        <div className='admin-sidebar-calender' onClick={() => handleSectionClick('calendar')}>
          Calender
        </div>
      </div>
      <div className='admin-menu'>
        <div className='admin-menu-dashboard' onClick={() => handleSectionClick('dashboard')}>
          <Link to='/admin-panel' className='link'>
            Dashboard
          </Link>
        </div>
        <div className='admin-menu-users-table' onClick={() => handleSectionClick('users')}>
          Users
        </div>
        <div className='admin-menu-products-table' onClick={() => handleSectionClick('products')}>
            products
        </div>
        <div className='admin-menu-adduser'>
          <Link to='/adduser' className='link'>
            Add User
          </Link>
        </div>
        <div className='admin-menu-addproduct'>
          <Link to='/addproduct' className='link'>
            Add Product
          </Link>
        </div>
        <div className='admin-menu-calender' onClick={() => handleSectionClick('calendar')}>
          Calender
        </div>
      </div>
      <div className='admin-result'>
        {activeSection === 'dashboard' && <div className='admin-dashboard'>Hello Admin</div>}

        {activeSection === 'users' && (
          <div className='admin-allusers-main'>
            <table className='admin-allusers-table'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{sno++}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link to={`/edituser/user/${user._id}`}>
                        <span className='admin-allusers-edit-link'>Edit</span>
                      </Link>
                      <a onClick={() => deleteUserDetails(user._id)} className='admin-allusers-delete-link'>
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

{activeSection === 'products' && (
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
        )}

        {activeSection === 'calendar' && (
          <div className='admin-calender'>
            <Calendar onChange={onChange} value={value} />
          </div>
        )}
      </div>
      <div className='admin-calculations'>
        <div className='admin-calculations-users'>
          <i className='fa-solid fa-users'></i>
          <br />
          Total Users
          <br />
            {users.length}
        </div>
        <div className='admin-calculations-products'>
          <i className='fa-solid fa-tags'></i>
          <br />
          Total Products
          <br />
            {products.length}
        </div>
        <div className='admin-calculations-currentmonthusers'>
          <i className='fa-solid fa-user-group'></i>
          <br />
          Current Month<br />Users: {lastMonthUsers.length}
        </div>
        <div className='admin-calculations-currentmonthproducts'>
          <i className='fa-solid fa-tags'></i>
          <br />
          Current Month<br />Products: {lastMonthProducts.length}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;