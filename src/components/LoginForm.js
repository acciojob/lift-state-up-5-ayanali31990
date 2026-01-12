import React from "react";

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Lifting state up
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" required />
      <br />
      <br />
      <input type="password" placeholder="Password" required />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
