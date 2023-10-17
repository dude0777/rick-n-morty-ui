import { getCharacter } from "../../services/character";

import { useState, useEffect } from "react";
import classes from "./CharacterForm.module.css";
function CharacterForm() {
  const [character, setCharacter] = useState("");

  const [recievedcharacters, setRecievedCharacters] = useState([]);

  function handleCharacterChange(e) {
    setCharacter(e.target.value);
  }

  useEffect(() => {
    getCharacter(character).then((data) => {
      setRecievedCharacters(data);
    });
  }, [character]);

  return (
    <div className={classes.container}>
      <form className={classes.form} action="">
        <div className={classes.formcont}>
          <div className={classes.inputcont}>
            <input
              onChange={handleCharacterChange}
              type="text"
              className={classes.forminput}
              placeholder="Enter Character"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CharacterForm;
