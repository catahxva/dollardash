import classes from "./AppHistory.module.css";

import { useState } from "react";

import { useSelector } from "react-redux";

import AppCellContainer from "./AppCellContainer";
import AppHistoryButtons from "./AppHistoryButtons";
import AppHistoryData from "./AppHistoryData";

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

const generateGroupedMovements = function (movements) {
  const groupedMovements = {};

  movements.forEach((mov) => {
    const deserializedDate = new Date(mov.serializedDate);

    const year = deserializedDate.getFullYear();
    const month = deserializedDate.getMonth();

    const key = `${months[month]}, ${year}`;

    if (!groupedMovements[key]) {
      groupedMovements[key] = [];
    }

    groupedMovements[key].push(mov);
  });

  return groupedMovements;
};

const sortMovementKeys = function (movements) {
  return movements.sort((a, b) => {
    const [monthA, yearA] = a.split(", ");
    const [monthB, yearB] = b.split(", ");

    const monthAIndex = months.indexOf(monthA);
    const monthBIndex = months.indexOf(monthB);

    const dateA = new Date(yearA, monthAIndex);
    const dateB = new Date(yearB, monthBIndex);

    return dateB - dateA;
  });
};

function AppHistory() {
  const [activeMonth, setActiveMonth] = useState();

  const expenses = useSelector((state) => state.currentMovements.expenses);
  const incomes = useSelector((state) => state.currentMovements.incomes);

  const allMovements = [
    ...structuredClone(expenses),
    ...structuredClone(incomes),
  ];

  const groupedMovements = generateGroupedMovements(allMovements);

  const sortedGroupedMovementsKeys = sortMovementKeys(
    Object.keys(groupedMovements)
  );

  return (
    <AppCellContainer>
      <h3>Your transaction history for each month</h3>
      {allMovements.length > 0 && (
        <div className={classes.history__grid}>
          <AppHistoryButtons
            keys={sortedGroupedMovementsKeys}
            activeKey={activeMonth}
            changeKey={setActiveMonth}
          />
          <div className={classes.history__grid__container__data}>
            {activeMonth && (
              <AppHistoryData data={groupedMovements[activeMonth]} />
            )}
            {!activeMonth && (
              <div className={classes.history__container__message}>
                <div className="message">Select a month</div>
              </div>
            )}
          </div>
        </div>
      )}
      {allMovements.length <= 0 && (
        <div className={classes.history__container__no__transactions}>
          <span className="message">You have no transactions</span>
        </div>
      )}
    </AppCellContainer>
  );
}

export default AppHistory;
