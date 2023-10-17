import logo from "../../assets/logo.jpg";
import Button from '@mui/material/Button';
import user from "../../assets/user.png";
import classes from "./Header.module.css";
import { AuthContext } from "../../store/Auth-context";
import { useContext } from "react";
function Header() {
  const { isLoggedIn, handleSignOut, userName } = useContext(AuthContext);
  return (
    <header className={classes.headercont}>
      <div className={classes.logocont}>
        <img src={logo} className={classes.logo} alt="" />

        {/* <p className={classes.title}>Expense Tracker</p> */}
      </div>
      <div className={classes.usercont}>
        {isLoggedIn ? (
          <p className={classes.usertxt}>Hello, {userName}</p>
        ) : (
          <p className={classes.usertxt}>Login</p>
        )}
        {isLoggedIn && <img className={classes.userimg} src={user} alt="" />}

        {isLoggedIn && (
          // <button
          //   onClick={() => {
          //     handleSignOut(false);
          //   }}
          //   className={classes.signout}
          // >
          //   sign out
          // </button>
          <Button onClick={() => {
            handleSignOut(false);
          }}
            className={classes.signout} variant="contained">sign out</Button>
        )}
      </div>
    </header>
  );
}

export default Header;
