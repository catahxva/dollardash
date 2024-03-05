import classes from "./AppBalanceData.module.css";

import { useSelector } from "react-redux";

function AppBalanceData({ currentBalance }) {
  const originalBalance = useSelector((state) => state.general.originalBalance);

  return (
    <div>
      <span className={classes.balance__span}>
        Original Balance: {originalBalance.toLocaleString()} $
      </span>
      <span className={classes.balance__span}>
        Current Balance: {currentBalance.toLocaleString()} $
      </span>
    </div>
  );
}

export default AppBalanceData;
