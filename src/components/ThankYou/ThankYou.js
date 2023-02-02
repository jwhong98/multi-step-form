import React from "react";
import classes from "./ThankYou.module.css";
import thankYouIcon from "../../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <section className={classes.thankYou}>
      <img src={thankYouIcon} alt="Thank You Icon" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default ThankYou;
