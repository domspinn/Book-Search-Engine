// Auth utility for handling token storage and user authentication
const Auth = {
    // Store token in localStorage upon login
    login: function (token) {
      localStorage.setItem('id_token', token);
    },
  
    // Remove token from localStorage upon logout
    logout: function () {
      localStorage.removeItem('id_token');
      window.location.assign('/');
    },
  
    // Retrieve token from localStorage
    getToken: function () {
      return localStorage.getItem('id_token');
    },
  
    // Check if the user is logged in
    loggedIn: function () {
      const token = this.getToken();
      return token && !this.isTokenExpired(token) ? true : false;
    },
  
    // Check if the token is expired
    isTokenExpired: function (token) {
      try {
        const decoded = this.decodeToken(token);
        // Token is expired if current time is greater than token's expiration time
        if (decoded.exp < Date.now() / 1000) {
          return true;
        }
        return false;
      } catch (err) {
        return false;
      }
    },
  
    // Decode the token to get user data
    decodeToken: function (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(jsonPayload);
    },
  };
  
  export default Auth;
  