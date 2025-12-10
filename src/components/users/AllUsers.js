import { getUsers , deleteUser } from '../../services/api-users';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import HeaderTop from '../cart-sub-components/HeaderTop';
import HeaderCenter from '../cart-sub-components/HeaderCenter';
import HeaderBottom from '../cart-sub-components/HeaderBottom';
import Footer from '../cart-sub-components/Footer';
import "./styles/AllUsers.css";

const AllUsers = () => {

    const navigate = useNavigate();
    const adminEmail = localStorage.getItem('email');
    console.log(adminEmail)
    useEffect(() => {
        if (adminEmail === 'saqibmarwat44965@gmail.com') {
            
        } else {
        navigate('/loginuser');
        }
    }, [adminEmail, navigate]);

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    }, []);

    const getAllUsers = async() => {
        let response = await getUsers();
        setUsers(response.data);
    }  

    const deleteUserDetails = async (id) =>{
        await deleteUser(id);
        getAllUsers();
    }

    let sno = "1";

    return (
        <>
            <HeaderTop />
            <HeaderCenter />
            <HeaderBottom />

            <div className='allusers-main'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                        <tr key={user._id}>
                            <td>{sno++}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><Link to={`/edituser/user/${user._id}`}><span className='allusers-edit-link'>Edit</span></Link>
                                <button onClick={() => deleteUserDetails(user._id)}  className='allusers-delete-link'>Delete</button>
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

export default AllUsers;