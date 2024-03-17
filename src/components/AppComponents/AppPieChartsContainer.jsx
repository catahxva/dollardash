import classes from "./AppPieChartsContainer.module.css";

import { useSelector } from "react-redux";

import {
  expenseCategories,
  incomeCategories,
} from "../../util/movementsCategories";

import AppPieChart from "./AppPieChart";

const generateChartData = function (arr1, arr2) {
  const mapResults = arr1.map((el1) => {
    return {
      id: el1.name,
      label: el1.name,
      value: arr2
        .filter((el2) => el2.category === el1.name)
        .reduce((acc, el2) => acc + el2.value, 0),
      color: el1.color,
    };
  });

  const filteredMapResults = mapResults.filter((el) => el.value > 0);

  return filteredMapResults;
};

function AppPieChartsContainer() {
  const incomes = useSelector((state) => state.currentMovements.incomes);
  const expenses = useSelector((state) => state.currentMovements.expenses);

  const expensesChartData = generateChartData(expenseCategories, expenses);
  const incomesChartData = generateChartData(incomeCategories, incomes);

  return (
    <div className={classes.container__charts}>
      <AppPieChart title={"Expenses distribution"} data={expensesChartData} />
      <AppPieChart title={"Incomes distribution"} data={incomesChartData} />
    </div>
  );
}

export default AppPieChartsContainer;
