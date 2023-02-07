import React, { useState } from "react";
import classes from "./AddOnsCard.module.css";

const AddOnsCard = (props) => {
  const [selected, setSelected] = useState(false);

  const onClickHandler = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`${classes.addOnCard} ${selected && classes.selected}`}
      onClick={onClickHandler}
    >
      <input
        type="checkbox"
        name=""
        checked={selected}
        id=""
        onClick={onClickHandler}
      />
      <div className={classes.addOnCard__info}>
        <p className={classes.addOnCard__info__type}>{props.type}</p>
        <p className={classes.addOnCard__info__description}>
          {props.description}
        </p>
      </div>
      <p className={classes.addOnCard__price}>+${props.price}/mo</p>
    </div>
  );
};

export default AddOnsCard;
