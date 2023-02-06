import React, { useState } from "react";
import classes from "./SelectPlan.module.css";
import { data } from "./data";
import PlanCard from "../PlanCard/PlanCard";
import { Switch } from "@mui/material";

const SelectPlan = () => {
  const [monthlyBilling, setMonthlyBilling] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("Arcade");

  const switchHandler = () => {
    setMonthlyBilling(!monthlyBilling);
  };

  const onClickHandler = (plan) => {
    setSelectedPlan(plan);
  };

  const createCard = (info) => {
    return (
      <PlanCard
        key={info.id}
        selected={selectedPlan}
        icon={info.icon}
        plan={info.plan}
        monthly={monthlyBilling}
        mPrice={info.mPrice}
        yPrice={info.yPrice}
        onClick={onClickHandler}
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
        <span
          className={`${monthlyBilling && classes.active} ${classes.label}`}
        >
          Monthly
        </span>
        <Switch onClick={switchHandler} />
        <span
          className={`${!monthlyBilling && classes.active} ${classes.label}`}
        >
          Yearly
        </span>
      </div>
    </section>
  );
};

export default SelectPlan;
