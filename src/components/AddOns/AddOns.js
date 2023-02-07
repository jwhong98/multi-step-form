import React from "react";
import AddOnsCard from "../AddOnsCard/AddOnsCard";
import classes from "./AddOns.module.css";
import { data } from "./data";

const AddOns = () => {
  const createAddOns = (info) => {
    return (
      <AddOnsCard
        key={info.id}
        type={info.type}
        description={info.description}
        price={info.price}
      />
    );
  };
  return (
    <section className={classes.addOns}>
      <div className={classes.addOns__header}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className={classes.addOns__addSelect}>{data.map(createAddOns)}</div>
    </section>
  );
};

export default AddOns;
