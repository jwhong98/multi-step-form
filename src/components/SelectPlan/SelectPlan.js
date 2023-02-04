import React from "react";
import classes from "./SelectPlan.module.css";

const SelectPlan = () => {
  return (
    <section className={classes.selectPlan}>
      <div className={classes.selectPlan__header}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className={classes.selectPlan__plans}></div>
      <div className={classes.selectPlan__switch}>
        <span>Monthly Yearly</span>
      </div>
    </section>
  );
};

export default SelectPlan;
