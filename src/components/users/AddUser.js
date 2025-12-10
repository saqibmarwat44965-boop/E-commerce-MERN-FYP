import { useState, useEffect } from 'react';
import { addUser } from './../../services/api-users';
import { useNavigate } from 'react-router-dom';
//import sendEmail from '../../backend/emailSender';

import HeaderTop from '../cart-sub-components/HeaderTop';
import HeaderCenter from '../cart-sub-components/HeaderCenter';
import HeaderBottom from '../cart-sub-components/HeaderBottom';
import Footer from '../cart-sub-components/Footer';
import "./styles/AddUser.css";

const defaultValue = {
    username: "",
    email: "",
    password: "",
    role: ""
}

const AddUser = () => {
    
    const navigate = useNavigate();

    const [user , setUser] = useState(defaultValue);


    const onValueChange = (e) => {
        if (e.target.name === 'role') {
          setUser({ ...user, role: e.target.value });
        } else {
          setUser({ ...user, [e.target.name]: e.target.value });
        }
      };

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/');
    }

    
   // const sendWelcomeEmail = () => {
     //   const recipientEmail = user.email;
       // const subject = "Welcome to Our Website";
       // const content = "Thank you for signing up. We are excited to have you on board!";
       // sendEmail(recipientEmail, subject, content);
    //};


    //Validation

    const validate = () =>
		{
		
			var regform = document.querySelector('.adduserform');

			let adduser_message_username = document.querySelector('.adduser-message-username');
			let adduser_message_email = document.querySelector('.adduser-message-email');
			let adduser_message_password = document.querySelector('.adduser-message-password');
			let adduser_message_confirm_password = document.querySelector('.adduser-message-confirm-password');

			if(user.username.trim().length < 3)
			{
			
				adduser_message_username.innerHTML = 'Please enter a valid username!';
				return false;
			
			}
			else if(user.email.indexOf('@') < 3 ||
            user.email.lastIndexOf ('.') < 7 )
			{
			
                adduser_message_username.style.display = 'none';
				adduser_message_email.innerHTML = 'invalid E-mail!';
				return false;
			
			}
			else if(user.password.trim().length < 8 ||
            user.password.trim().length > 50)
			{
                adduser_message_email.style.display = 'none';
				adduser_message_password.innerHTML = 'invalid Password!';
				return false;
				
			}//else if(user.password != user.confirm){
              //  adduser_message_password.style.display = 'none';
				//adduser_message_confirm_password.innerHTML = 'Please Confirm Password!';
				//return false;
           // }
            else
            {
                adduser_message_confirm_password.style.display = 'none';
                addUserDetails();
               // sendWelcomeEmail();
                
            }


            return false;
		}

    //Validation

    return(
        <>

        <HeaderTop />
        <HeaderCenter />
        <HeaderBottom />
        
        <div className='adduser-form adduserform'>
            <h1>Register</h1>
            <form>
                <label htmlFor='username' className='login-fields-discription'>username*</label>
                <span className='adduser-message-username'></span>
                <input onChange={(e) => onValueChange(e)} name='username' className='adduser-fields-username'/>
                <br/>
                <label htmlFor='email' className='login-fields-discription'>email*</label>
                <span className='adduser-message-email'></span>
                <input onChange={(e) => onValueChange(e)} name='email' className='adduser-fields-email'/>
                <br/>
                <label htmlFor='password' className='login-fields-discription'>password*</label>
                <span className='adduser-message-password'></span>
                <input onChange={(e) => onValueChange(e)} name='password' className='adduser-fields-password'/>
                <br/>
                <label htmlFor='confirm-password' className='login-fields-discription'>confirm password*</label>
                <span className='adduser-message-confirm-password'></span>
                <input name='confirm' className='adduser-fields-confirm-password'/>
                <br/>
                <label htmlFor='role' className='login-fields-discription'>Choose role*</label>
                <select name='role' onChange={(e) => onValueChange(e)} className='adduser-fields-role'>
                    <option value='buyer'>Buyer</option>
                    <option value='seller'>Seller</option>
                </select>
                <br/>
                <input type='button' onClick={validate} value='Register' className='adduser-button'/>
            </form>
        </div>

        <Footer />
        </>
    )

}

export default AddUser;