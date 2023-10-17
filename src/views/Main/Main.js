import CharacterList from "./CharacterList/CharacterList";
import { AuthContext } from "../../store/Auth-context";
import { useContext } from "react";
import classes from "./Main.module.css";

function Main() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className={classes.container}>{isLoggedIn && <CharacterList />}</div>
  );
}

export default Main;
