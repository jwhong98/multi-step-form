import React from "react";
import classes from "./PersonalInfo.module.css";

const PersonalInfo = () => {
  return (
    <section className={classes.personalInfo}>
      <div className={classes.personalInfo__header}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number</p>
      </div>
      <form action="/" className={classes.personalInfo__form}>
        <div className={classes.personalInfo__form__formRow}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className={classes.personalInfo__form__formRow}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className={classes.personalInfo__form__formRow}>
          <label htmlFor="number">Phone Number</label>
          <input
            id="number"
            name="number"
            type="text"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;
