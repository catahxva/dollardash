import classes from "./AppHistoryDataGrid.module.css";

import AppMovement from "./AppMovement";

function AppHistoryDataGrid({ title, data }) {
  return (
    <div className={classes.history__grid}>
      <h4 className={classes.grid__title}>{title}</h4>
      <div className={classes.grid}>
        {data.map((mov) => {
          return <AppMovement key={mov.id} movement={mov} />;
        })}
      </div>
    </div>
  );
}

export default AppHistoryDataGrid;
