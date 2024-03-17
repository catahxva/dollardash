import classes from "./AppMovementsList.module.css";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { filterMovements } from "../../util/util";

import AppMovement from "./AppMovement";
import AppMovementsListControls from "./AppMovementsListControls";

function AppMovementsList({ movementsType }) {
  const movementsState = useSelector((state) => {
    if (movementsType === "expenses") return state.currentMovements.expenses;

    if (movementsType === "incomes") return state.currentMovements.incomes;
  });

  const movements = filterMovements(movementsState);

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const monthFormatted = currentDate.toLocaleString("default", {
    month: "long",
  });

  const startingIndex = 0;
  const [endingIndex, setEndingIndex] = useState(3);

  useEffect(() => {
    if (movements.length <= 3) setEndingIndex(3);
  }, [movements, endingIndex]);

  return (
    <div className={classes.movements__list__container}>
      <span className={classes.movements__message}>
        {movementsType[0].toUpperCase() + movementsType.slice(1)} of{" "}
        {monthFormatted}, {year}
      </span>
      <div className={classes.movements__list}>
        {movements.slice(startingIndex, endingIndex).map((movement) => {
          return <AppMovement key={movement.id} movement={movement} />;
        })}
      </div>
      {movements.length > 3 && (
        <AppMovementsListControls
          movementsLength={movements.length}
          endingIndex={endingIndex}
          setEndingIndex={setEndingIndex}
        />
      )}
    </div>
  );
}

export default AppMovementsList;
