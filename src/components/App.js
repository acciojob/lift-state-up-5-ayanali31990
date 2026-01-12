import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>

      {isLoggedIn ? (
        <h2>You are logged in</h2>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
