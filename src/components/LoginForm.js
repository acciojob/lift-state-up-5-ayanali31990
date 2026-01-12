import React from "react";

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login form</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
