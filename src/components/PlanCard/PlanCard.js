import React from "react";
import classes from "./PlanCard.module.css";

const PlanCard = (props) => {
  return (
    <div className={classes.planCard}>
      <img src={props.icon} alt="plan icon" />
      <div className={classes.planCard__details}>
        <h2>{props.plan}</h2>
        {props.monthly ? (
          <p className={classes.price}>${props.mPrice}/mo</p>
        ) : (
          <p className={classes.price}>${props.yPrice}/yr</p>
        )}
        {!props.monthly && <p className={classes.free}>2 months free</p>}
      </div>
    </div>
  );
};

export default PlanCard;
