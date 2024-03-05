import classes from "./AppBarChart.module.css";

import { useSelector } from "react-redux";

import { ResponsiveBar } from "@nivo/bar";

import AppCellContainer from "./AppCellContainer";

const currentDate = new Date();

const filterByTime = function (movementsArr, time, type) {
  if (type === "week") {
    return movementsArr.filter((mov) => {
      const deserealizedDate = new Date(mov.serializedDate);

      return deserealizedDate >= time;
    });
  }

  if (type === "day") {
    return movementsArr.filter((mov) => {
      const deserealizedDate = new Date(mov.serializedDate);

      const deserealizedDateCopy = new Date(deserealizedDate).setHours(
        0,
        0,
        0,
        0
      );
      const currentDateCopy = new Date(currentDate).setHours(0, 0, 0, 0);

      return (
        deserealizedDate.getDay() === time &&
        deserealizedDateCopy !== currentDateCopy
      );
    });
  }
};

function AppBarChart() {
  const originalBalance = useSelector((state) => state.general.originalBalance);

  const expenses = useSelector((state) => state.currentMovements.expenses);
  const incomes = useSelector((state) => state.currentMovements.incomes);

  const oneWeekAgo = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  ).setHours(0, 0, 0, 0);

  const latestExpenses = filterByTime(expenses, oneWeekAgo, "week");
  const latestIncomes = filterByTime(incomes, oneWeekAgo, "week");

  const lastWeekDays = new Array(8).fill(0).map((el, i) => {
    return new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000).getDay();
  });

  lastWeekDays.shift();

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const barChartData = lastWeekDays.map((day, i) => {
    const filteredExpenses = filterByTime(latestExpenses, day, "day");
    const filteredIncomes = filterByTime(latestIncomes, day, "day");

    console.log(filteredIncomes);

    return {
      day: weekDays[day],
      Expenses: filteredExpenses.reduce((acc, exp) => acc + exp.value, 0),
      ExpensesColor: "hsl(34, 100%, 50%)",
      Incomes: filteredIncomes.reduce((acc, inc) => acc + inc.value, 0),
      IncomesColor: "hsl(258, 60%, 51%)",
    };
  });

  console.log(barChartData);

  return (
    <AppCellContainer>
      <h3>Expenses/Incomes for the last 7 days</h3>
      <div className={classes.chart__container}>
        {originalBalance && (
          <ResponsiveBar
            data={barChartData}
            keys={["Expenses", "Incomes"]}
            indexBy="day"
            colors={({ id, data }) => data[`${id}Color`]}
            label={({ value }) => `${value}$`}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            margin={{ top: 50, left: 50, bottom: 120, right: 50 }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 50,
                translateY: 80,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
              },
            ]}
          />
        )}
        {!originalBalance && <span className="message">No data</span>}
      </div>
    </AppCellContainer>
  );
}

export default AppBarChart;
