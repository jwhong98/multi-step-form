import React from "react";
import classes from "./Summary.module.css";

const Summary = (props) => {
  return (
    <section className={classes.summary}>
      <div className={classes.summary__header}>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className={classes.summary__container}>
        <div className={classes.summary__container__row}>
          <div className={classes.summary__container__row__plan}>
            <h3 className={classes.planType}>Arcade (Monthly)</h3>
            <a href="/">Change</a>
          </div>
          <span className={classes.summary__container__row__plan__price}>
            ${props.planPrice}9/mo
          </span>
        </div>
        <hr />
        <div className={classes.addOns}>
          <p>Online service</p>
          <p className={classes.price}>+$1/mo</p>
        </div>
        <div className={classes.addOns}>
          <p>Larger storage</p>
          <p className={classes.price}>+$2/mo</p>
        </div>
        {/* <div className={classes.summary__container__row}>
          <div className={classes.addOns}>
            <p>Online service</p>
            <p className={classes.price}>+$10</p>
          </div>
          <div className={classes.addOns}>
            <p>Larger storage</p>
            <p className={classes.price}>+$20</p>
          </div>
        </div> */}
      </div>
      <div className={classes.summary__total}>
        <p>Total (per month)</p>
        <span className={classes.summary__total__price}>
          ${props.totalPrice}12/mo
        </span>
      </div>
    </section>
  );
};

export default Summary;
