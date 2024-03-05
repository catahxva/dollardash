import classes from "./HomeHeader.module.css";

import { forwardRef } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const HomeHeader = forwardRef(function ({}, ref) {
  return (
    <header ref={ref} className={classes.header}>
      <div className={classes.header__container__img}></div>
      <div className={classes.header__container__text}>
        <h1 className={classes.header__title}>
          Enter the World of{" "}
          <span className={classes.header__title__span}>Dollar/Dash</span>:
          Simplify Your Finances with Ease and Speed.
        </h1>
        <p className="big__margin__bottom">
          Dive into the world of Dollar/Dash, your all-in-one solution for
          seamless financial management. With intuitive features ranging from
          setting personalized budgets to gaining insightful visualizations,
          Dollar/Dash empowers you to effortlessly navigate the complexities of
          your financial landscape, making every step towards financial clarity
          swift and stress-free.
        </p>
        <Link to="/app" className={classes.header__btn}>
          Get Started
        </Link>
      </div>
    </header>
  );
});

export default HomeHeader;
