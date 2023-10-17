import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "./App.css";
import { AuthContext } from "./store/Auth-context";
import Main from "./views/Main/Main";

import Header from "./views/Header/Header";
import { useState } from "react";
import Login from "./views/Login/Login";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#ea80fc',
        main: '#ea80fc',
        dark: '#ee99fc',
        contrastText: '#fff',
      }
    },
  });

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
      ><ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header />

          {!isLoggedIn && <Login />}

          <Main />


        </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
