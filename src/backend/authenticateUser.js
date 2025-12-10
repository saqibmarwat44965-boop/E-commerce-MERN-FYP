import jwt from 'jsonwebtoken';
import secretKey from './auth-key.cjs';


const authenticateUser = (request, response, next) => {
    // Get the token from the request headers
    const token = request.headers.authorization;
  
    // Check if the token exists and is valid
    if (token) {
      jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
          // Invalid token, redirect the user to the login page
          response.redirect('/loginuser');
        } else {
          // Valid token, user is authenticated, proceed to the next middleware or route handler
          next();
        } 
      });
    } else {
      // Token doesn't exist, redirect the user to the login page
      response.redirect('/loginuser');
    }
  };
  
  export default authenticateUser;