import classes from "./Login.module.css";
import TextField from '@mui/material/TextField'
import { useContext } from "react";
import { useRef } from "react";
import { AuthContext } from "../../store/Auth-context";
import { useState, useEffect } from "react";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, handleIsLoggedIn } = useContext(AuthContext);
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const emailRef = useRef()
  useEffect(() => {
    emailRef.current.focus()
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hit");
    handleIsLoggedIn({
      userName: userName,
      password: password,
    });
  };
  console.log(isLoggedIn);
  console.log(userName);
  console.log(password);
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form} action="">
        <div className={classes.formcont}>
          <div className={classes.inputcont}>
            <div className={classes.userbox}>
              {/* <input ref={emailRef}
                onChange={handleUserNameChange}
                className={classes.forminput}
              /> */}
              <TextField ref={emailRef}
                onChange={handleUserNameChange}
                id="standard-basic"
                label="Email"
                variant="standard" />

            </div>
            <div className={classes.userbox}>
              {/* <input
                type="password"
                onChange={handlePasswordChange}
                className={classes.forminput}
              /> */}
              <TextField sx={{ color: "white" }}
                type="password"
                onChange={handlePasswordChange}
                id="standard-basic"
                label="Password"
                variant="standard"
              />

            </div>
          </div>
          <div>


            <button className={classes.button1} type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
