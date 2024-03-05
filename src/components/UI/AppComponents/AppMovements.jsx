import classes from "./AppMovements.module.css";

import { useSelector } from "react-redux";

import { filterMovements } from "../../../util/util";

import AppCellContainer from "./AppCellContainer";
import AppMovementsForm from "./AppMovementsForm";
import AppMovementsList from "./AppMovementsList";
import AppNoMovements from "./AppNoMovements";

function AppMovements({ movementsType }) {
  const movementsState = useSelector((state) => {
    if (movementsType === "expenses") return state.currentMovements.expenses;

    if (movementsType === "incomes") return state.currentMovements.incomes;
  });

  const movements = filterMovements(movementsState);

  const originalBalance = useSelector((state) => state.general.originalBalance);

  const value =
    movements.length > 0
      ? movements.reduce((acc, mov) => mov.value + acc, 0)
      : 0;

  return (
    <AppCellContainer>
      <div className={classes.movements}>
        <div className={classes.movements__container__title__value}>
          <h3
            className={`${classes.movements__title} ${
              movementsType === "expenses"
                ? classes.movements__title__expenses
                : classes.movements__title__incomes
            }`}
          >
            {movementsType[0].toUpperCase() + movementsType.slice(1)}
          </h3>
          <span className={classes.movements__value}>
            {movementsType === "expenses" && "-"}
            {value.toLocaleString()}$
          </span>
        </div>
        {originalBalance && <AppMovementsForm movementsType={movementsType} />}
        {movements.length > 0 && (
          <AppMovementsList movementsType={movementsType} />
        )}
        {movements.length <= 0 && (
          <AppNoMovements movementsType={movementsType} />
        )}
      </div>
    </AppCellContainer>
  );
}

export default AppMovements;
