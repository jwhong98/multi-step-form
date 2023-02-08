import React from "react";
import classes from "./FormNav.module.css";

const FormNav = (props) => {
  return (
    <aside className={classes.nav}>
      <div className={classes.nav__tab}>
        <div className={`${classes.badge} ${classes.active}`}>1</div>
        <div className={classes.content}>
          <p>step 1</p>
          <p className={classes.title}>your info</p>
        </div>
      </div>
      <div className={classes.nav__tab}>
        <div className={classes.badge}>2</div>
        <div className={classes.content}>
          <p>step 2</p>
          <p className={classes.title}>select plan</p>
        </div>
      </div>
      <div className={classes.nav__tab}>
        <div className={classes.badge}>3</div>
        <div className={classes.content}>
          <p>step 3</p>
          <p className={classes.title}>add-ons</p>
        </div>
      </div>
      <div className={classes.nav__tab}>
        <div className={classes.badge}>4</div>
        <div className={classes.content}>
          <p>step 4</p>
          <p className={classes.title}>summary</p>
        </div>
      </div>
    </aside>
  );
};

export default FormNav;
