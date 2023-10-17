import classes from "./CharacterItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";

function CharacterItem({ name, image, gender, status }) {
  return (
    <div className={classes.game}>
      <div className={classes.front}>
        <img className={classes.thumbnail} src={image} alt="character" />

        <h3 className={classes.name}>{name}</h3>
        <div className={classes.stats}>
          <div className={classes.streamers1}>
            <FontAwesomeIcon className={classes.icon} icon={faHeartPulse} />
            <FontAwesomeIcon className={classes.icon} icon={faVenusMars} />
          </div>
        </div>
      </div>

      <div className={classes.back}>
        <div className={classes.characterinfocontainer}>
          <div className={classes.details}>
            <p className={classes.name}>
              <FontAwesomeIcon
                className={classes.mainicon}
                icon={faHeartPulse}
              />
            </p>
            <p className={classes.value}>{status}</p>
          </div>
          <div className={classes.details}>
            <p className={classes.name}>
              <FontAwesomeIcon
                className={classes.mainicon}
                icon={faVenusMars}
              />
            </p>
            <p className={classes.value}>{gender}</p>
          </div>
        </div>
        <button className={classes.btn}> show details</button>
      </div>
      <div className={classes.background}></div>
    </div>
  );
}

export default CharacterItem;
