import classes from "./AppHeader.module.css";

import { Link } from "react-router-dom";

import AppSelectCurrency from "./AppSelectCurrency";

function AppHeader() {
  return (
    <div className={classes.app__container__header}>
      <Link to="/" className={classes.app__logo}>
        Dollar/Dash
      </Link>
      <AppSelectCurrency />
    </div>
  );
}

export default AppHeader;
