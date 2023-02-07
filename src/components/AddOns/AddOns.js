import React from "react";
import AddOnsCard from "../AddOnsCard/AddOnsCard";
import classes from "./AddOns.module.css";

const AddOns = () => {
  const createAddOns = (info) => {
    return <AddOnsCard />;
  };
  return (
    <section className={classes.addOns}>
      <div className={classes.addOns__header}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className={classes.addOns__addSelect}></div>
    </section>
  );
};

export default AddOns;
