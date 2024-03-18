import classes from "./AppBalanceData.module.css";

import { useSelector } from "react-redux";

function AppBalanceData({ currentBalance }) {
  const originalBalance = useSelector((state) => state.general.originalBalance);
  const symbol = useSelector((state) => state.general.symbol);

  return (
    <div className={classes.balance__data}>
      <span className={classes.balance__span}>
        Original Balance: {originalBalance.toLocaleString()} {symbol}
      </span>
      <span className={classes.balance__span}>
        Current Balance: {currentBalance.toLocaleString()} {symbol}
      </span>
    </div>
  );
}

export default AppBalanceData;
