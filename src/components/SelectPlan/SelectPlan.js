import React from "react";
import classes from "./SelectPlan.module.css";
import { data } from "./data";
import PlanCard from "../PlanCard/PlanCard";

const SelectPlan = () => {
  const createCard = (info) => {
    return (
      <PlanCard
        key={info.id}
        icon={info.icon}
        plan={info.plan}
        mPrice={info.mPrice}
        yPrice={info.yPrice}
      />
    );
  };
  return (
    <section className={classes.selectPlan}>
      <div className={classes.selectPlan__header}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className={classes.selectPlan__plans}>{data.map(createCard)}</div>
      <div className={classes.selectPlan__switch}>
        <span>Monthly Yearly</span>
      </div>
    </section>
  );
};

export default SelectPlan;
