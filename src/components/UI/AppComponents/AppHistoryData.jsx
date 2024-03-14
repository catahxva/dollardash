import classes from "./AppHistoryData.module.css";

import AppHistoryDataGrid from "./AppHistoryDataGrid";

function AppHistoryData({ data }) {
  const expenses = data?.filter((data) => data.type === "expenses");
  const incomes = data?.filter((data) => data.type === "incomes");

  return (
    <div className={classes.history__data}>
      {expenses && expenses.length > 0 && (
        <AppHistoryDataGrid title={"Expenses"} data={expenses} />
      )}
      {expenses && incomes.length > 0 && (
        <AppHistoryDataGrid title={"Incomes"} data={incomes} />
      )}
    </div>
  );
}

export default AppHistoryData;
