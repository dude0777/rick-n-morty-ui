
import CharacterItem from "./CharacterItem/CharacterItem";
import classes from "./CharacterList.module.css";
import { getFilteredCharacters } from "../../../services/filter";
import { useState, useEffect } from "react";
import { AuthContext } from "../../../store/Auth-context";
import { useContext } from "react";

function CharacterList() {
  const [receivedCharacters, setReceivedCharacters] = useState([]);
  const [gender, setGender] = useState("")
  const [statuss, setStatuss] = useState("")
  const [name, setName] = useState("")

  const [page, setPage] = useState(1)
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    getFilteredCharacters(gender, statuss, page, name).then((data) => {
      const charactersArray = data.results;
      setReceivedCharacters(charactersArray);
    });
  }, [gender, statuss, page, name]);

  if (receivedCharacters.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(page)

  const handleStatussChange = (e) => {
    setStatuss(e.target.value)
  }
  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handlePageChangeB = () => {
    setPage((prev) => prev - 1);
  }

  const handlePageChangeF = () => {
    setPage((prev) => prev + 1);
    console.log(
      ' pagebutton clicked'
    )
  }
  console.log(receivedCharacters);
  return (
    <div className={classes.container}>
      <div className={classes.container2}>
        <input className={classes.inputt} type="text" onChange={handleNameChange} />
        <select className={classes.inputt} value={statuss} name="" id="" onChange={handleStatussChange}>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">unknown</option>


        </select>
        <select className={classes.inputt} name="" value={gender} id="" onChange={handleGenderChange} >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={classes.container3}>
        {receivedCharacters.map((character) => {
          return (
            <CharacterItem
              key={character.id}
              name={character.name}
              image={character.image}
              gender={character.gender}
              // species={character.species}
              status={character.status}
            />
          );
        })}
      </div>
      <div>
        <button onClick={handlePageChangeB}>prev</button>
        <button onClick={handlePageChangeF}>next</button></div>
    </div>
  );
}

export default CharacterList;
