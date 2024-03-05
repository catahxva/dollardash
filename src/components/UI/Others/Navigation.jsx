import classes from "./Navigation.module.css";

import { Link } from "react-router-dom";

function Navigation({ scrollMethods }) {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__interior}>
        <button
          onClick={() => scrollMethods.scrollToHeader()}
          className={classes.nav__logo}
        >
          Dollar/Dash
        </button>
        <div className={classes.nav__container}>
          <button className={classes.nav__btn}>About</button>
          <button className={classes.nav__btn}>Features</button>
          <Link to="/app" className={classes.nav__btn}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
