import classes from "./AppGraphs.module.css";

import AppPieChartsContainer from "./AppPieChartsContainer";
import AppBarChart from "./AppBarChart";

function AppGraphs() {
  return (
    <div className={classes.app__container__graphs}>
      <AppPieChartsContainer />
      <AppBarChart />
    </div>
  );
}

export default AppGraphs;
