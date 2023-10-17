import Grid from "@mui/system/Unstable_Grid/Grid";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import CharacterItem from "./CharacterItem/CharacterItem";
import classes from "./CharacterList.module.css";
import { getFilteredCharacters } from "../../../services/filter";
import { useState, useEffect } from "react";
import { AuthContext } from "../../../store/Auth-context";
import { useContext } from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { borderRadius, padding } from "@mui/system";

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
    if (e.target.value === 'All') {
      setStatuss('')
    }
    else {
      setStatuss(e.target.value)
    }
  }
  const handleGenderChange = (e) => {
    if (e.target.value === 'All') {
      setGender('')
    }
    else {
      setGender(e.target.value)
    }
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

      <Box sx={{
        bgcolor: '#ea80fc',
        padding: 3,
        color: "black",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        width: '70%',
      }}>
        <Grid justifyContent={"center"} alignItems={'center'} container spacing={8}>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <TextField
                onChange={handleNameChange} type="text" id="outlined-basic"
                sx={{ color: "black" }} label="Character Name"
                variant="outlined" />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4} >
            <FormControl fullWidth>
              <InputLabel sx={{ color: 'black' }} id="demo-simple-select-label">Gender</InputLabel>
              <Select sx={{ color: 'black' }} value={gender} onChange={handleGenderChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                label="Age"

              >

                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Genderless">Genderless</MenuItem>
                <MenuItem value="unknown">unknown</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              {/* formcontrol */}
              <InputLabel sx={{ color: 'black' }} id="demo-simple-select-label">Status</InputLabel>
              <Select sx={{ color: 'black' }} value={statuss} onChange={handleStatussChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                label="Age"

              >    <MenuItem value="All">All</MenuItem>
                <MenuItem value="Alive">Alive</MenuItem>
                <MenuItem value="Dead">Dead</MenuItem>

                <MenuItem value="unknown">unknown</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>





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
