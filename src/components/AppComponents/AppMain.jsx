import classes from "./AppMain.module.css";

import AppBalance from "./AppBalance";
import AppBalanceRatio from "./AppBalanceRatio";
import AppMovements from "./AppMovements";

function AppMain() {
  return (
    <div className={classes.app__grid__main__app}>
      <div className={classes.app__grid__container__side}>
        <AppBalance />
        <AppBalanceRatio />
      </div>
      <div className={classes.app__grid__container__main}>
        <AppMovements movementsType={"expenses"} />
        <AppMovements movementsType={"incomes"} />
      </div>
    </div>
  );
}

export default AppMain;
