import React from "react";
import classes from "./FormNav.module.css";
import { Outlet, Link, useLocation } from "react-router-dom";

const FormNav = () => {
  const location = useLocation();

  return (
    <>
      <aside className={classes.nav}>
        <Link to="/" className={classes.nav__tab} data-id="1">
          <div
            className={`${classes.badge} ${
              location.pathname === "/" && classes.active
            }`}
          >
            1
          </div>
          <div className={classes.content}>
            <p>step 1</p>
            <p className={classes.title}>your info</p>
          </div>
        </Link>
        <Link to="/selectPlan" className={classes.nav__tab}>
          <div
            className={`${classes.badge} ${
              location.pathname === "/selectPlan" && classes.active
            }`}
          >
            2
          </div>
          <div className={classes.content}>
            <p>step 2</p>
            <p className={classes.title}>select plan</p>
          </div>
        </Link>
        <Link to="/addOns" className={classes.nav__tab}>
          <div
            className={`${classes.badge} ${
              location.pathname === "/addOns" && classes.active
            }`}
          >
            3
          </div>
          <div className={classes.content}>
            <p>step 3</p>
            <p className={classes.title}>add-ons</p>
          </div>
        </Link>
        <Link to="/summary" className={classes.nav__tab}>
          <div
            className={`${classes.badge} ${
              location.pathname === "/summary" && classes.active
            }`}
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
