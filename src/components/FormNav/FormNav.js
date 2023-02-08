import React, { useState } from "react";
import classes from "./FormNav.module.css";
import { Outlet, Link } from "react-router-dom";

const FormNav = () => {
  const [active, setActive] = useState("1");

  const onClickHandler = (e) => {
    console.log(e.target.dataset.id);
    setActive(e.target.dataset.id);
  };
  return (
    <>
      <aside className={classes.nav}>
        <Link
          to="/"
          className={classes.nav__tab}
          data-id="1"
          onClick={onClickHandler}
        >
          <div
            className={`${classes.badge} ${active === "1" && classes.active}`}
          >
            1
          </div>
          <div className={classes.content}>
            <p>step 1</p>
            <p className={classes.title}>your info</p>
          </div>
        </Link>
        <Link
          to="/selectPlan"
          className={classes.nav__tab}
          data-id="2"
          onClick={onClickHandler}
        >
          <div
            className={`${classes.badge} ${active === "2" && classes.active}`}
          >
            2
          </div>
          <div className={classes.content}>
            <p>step 2</p>
            <p className={classes.title}>select plan</p>
          </div>
        </Link>
        <Link
          to="/addOns"
          className={classes.nav__tab}
          data-id="3"
          onClick={onClickHandler}
        >
          <div
            className={`${classes.badge} ${active === "3" && classes.active}`}
          >
            3
          </div>
          <div className={classes.content}>
            <p>step 3</p>
            <p className={classes.title}>add-ons</p>
          </div>
        </Link>
        <Link
          to="/summary"
          className={classes.nav__tab}
          data-id="4"
          onClick={onClickHandler}
        >
          <div
            className={`${classes.badge} ${active === "4" && classes.active}`}
          >
            4
          </div>
          <div className={classes.content}>
            <p>step 4</p>
            <p className={classes.title}>summary</p>
          </div>
        </Link>
      </aside>
      <Outlet />
    </>
  );
};

export default FormNav;
