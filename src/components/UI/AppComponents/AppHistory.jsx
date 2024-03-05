import classes from "./AppHistory.module.css";

import { useSelector } from "react-redux";

import AppCellContainer from "./AppCellContainer";

function AppHistory() {
  const expenses = useSelector((state) => state.currentMovements.expenses);
  const incomes = useSelector((state) => state.currentMovements.incomes);

  const allMovements = [
    ...structuredClone(expenses),
    ...structuredClone(incomes),
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const movementsByMonth = 0;

  return <AppCellContainer></AppCellContainer>;
}

export default AppHistory;
