import classes from "./AppBalanceRatio.module.css";

import { useSelector } from "react-redux";

import { ResponsivePie } from "@nivo/pie";

import AppCellContainer from "./AppCellContainer";

function AppBalanceRatio() {
  const originalBalance = useSelector((state) => state.general.originalBalance);
  const incomes = useSelector((state) => state.currentMovements.incomes);
  const expenses = useSelector((state) => state.currentMovements.expenses);

  const incomesValue = incomes.reduce((acc, inc) => acc + inc.value, 0);
  const expensesValue = expenses.reduce((acc, exp) => acc + exp.value, 0);

  const currentBalance =
    originalBalance + (expensesValue || 0) + (incomesValue || 0);

  const incomesPercentage = (incomesValue / currentBalance) * 100;
  const expensesPercentage = (expensesValue / currentBalance) * 100;
  const startPercentage = (originalBalance / currentBalance) * 100;

  const data = [
    {
      id: "Start Balance",
      label: "Start Balance",
      value: Math.round(startPercentage),
      color: "hsl(0, 0%, 47%)",
    },
  ];

  if (incomesValue && incomesValue > 0)
    data.push({
      id: "Incomes",
      label: "Incomes",
      value: Math.round(incomesPercentage),
      color: "hsl(258, 60%, 51%)",
    });
  if (expensesValue && expensesValue > 0)
    data.push({
      id: "Expenses",
      label: "Expenses",
      value: Math.round(expensesPercentage),
      color: "hsl(34, 100%, 50%)",
    });

  return (
    <AppCellContainer gradient>
      <h3>Total Balance Ratio</h3>
      {originalBalance && (
        <div className={classes.balance__ratio__container}>
          <ResponsivePie
            data={data}
            colors={({ data }) => data.color}
            margin={{ top: 20, right: 0, bottom: 60, left: 0 }}
            arcLinkLabelsTextColor="#222"
            arcLabel={(item) => `${item.value}%`}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 25,
                translateY: 55,
                itemsSpacing: 8,
                itemWidth: 110,
                itemHeight: 10,
                itemTextColor: "#222",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 16,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
      )}
      {!originalBalance && (
        <div className={classes.balance__ratio__container}>
          <span className="message">No data yet</span>
        </div>
      )}
    </AppCellContainer>
  );
}

export default AppBalanceRatio;
