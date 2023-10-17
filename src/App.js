import "./App.css";
import { AuthContext } from "./store/Auth-context";
import Main from "./views/Main/Main";

import Header from "./views/Header/Header";
import { useState } from "react";
import Login from "./views/Login/Login";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleIsLoggedIn = ({ userName, password }) => {
    if (userName !== "" && password !== "") {
      if (userName.includes("@") && password.length >= 7) {
        setIsLoggedIn(true);
      }
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  console.log(isLoggedIn);
  const userName = "Alen";

  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn, userName, handleIsLoggedIn, handleSignOut }}
      >
        <Header />

        {!isLoggedIn && <Login />}

        <Main />
      </AuthContext.Provider>
    </>
  );
}

export default App;
