import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../services/api-users';

import HeaderTop from '../cart-sub-components/HeaderTop';
import HeaderCenter from '../cart-sub-components/HeaderCenter';
import HeaderBottom from '../cart-sub-components/HeaderBottom';
import Footer from '../cart-sub-components/Footer';
import "./styles/LoginUser.css";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      // Assuming successful login, you can store the token in local storage
      const {token, role} = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);

      if(email === 'saqibmarwat44965@gmail.com')
      {
        navigate("/admin-panel");
      }
      else{
        navigate("/");
      }
      
    } catch (error) {
      // Handle login error, display error message or perform necessary actions
      console.log("Login failed:", error);
    }
  };

  return (
    <>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
      <div className='login-form'>
        <h1>Login</h1>
        <form>
          <label htmlFor='email' className='login-fields-discription'>Email*</label>
          <input
            type='email'
            name='email'
            className='login-fields-interactive'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor='password' className='login-fields-discription'>Password*</label>
          <input
            type='password'
            name='password'
            className='login-fields-interactive'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Link to={'/adduser'} className='login-rigister-account-link'>Don't have an account?</Link>
          <input type='checkbox' name='rememberme' className='login-rememberme-checkbox' />
          <label htmlFor='username' className='login-rememberme-discription'>remember me</label>
          <br />
          <input type='button' value='Login' className='login-button' onClick={handleLogin} />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginUser;