import classes from "./AppHeader.module.css";

import AppSelectCurrency from "./AppSelectCurrency";

function AppHeader() {
  return (
    <div className={classes.app__container__header}>
      <span className={classes.app__logo}>Dollar/Dash</span>
      <AppSelectCurrency />
    </div>
  );
}

export default AppHeader;
