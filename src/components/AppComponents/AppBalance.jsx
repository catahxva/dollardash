import classes from "./AppBalance.module.css";

import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/uiSlice";

import AppCellContainer from "./AppCellContainer";
import AppBalanceForm from "./AppBalanceForm";
import AppBalanceData from "./AppBalanceData";

function AppBalance() {
  const dispatch = useDispatch();

  const originalBalance = useSelector((state) => state.general.originalBalance);
  const symbol = useSelector((state) => state.general.symbol);

  const expenses = useSelector((state) => state.currentMovements.expenses);
  const incomes = useSelector((state) => state.currentMovements.incomes);

  let currentBalance;

  if (!originalBalance) currentBalance = 0;

  if (originalBalance && expenses.length <= 0 && incomes.length <= 0) {
    currentBalance = originalBalance;
  }

  if (originalBalance && expenses.length > 0 && incomes.length <= 0) {
    const totalExpenses = expenses.reduce(
      (acc, expense) => acc + expense.value,
      0
    );

    currentBalance = originalBalance - totalExpenses;
  }

  if (originalBalance && expenses.length <= 0 && incomes.length > 0) {
    const totalIncomes = incomes.reduce((acc, income) => acc + income.value, 0);

    currentBalance = originalBalance + totalIncomes;
  }

  if (originalBalance && expenses.length > 0 && incomes.length > 0) {
    const totalExpenses = expenses.reduce(
      (acc, expense) => acc + expense.value,
      0
    );
    const totalIncomes = incomes.reduce((acc, income) => acc + income.value, 0);

    currentBalance = originalBalance - totalExpenses + totalIncomes;
  }

  return (
    <AppCellContainer gradient>
      <div className={classes.balance}>
        <div
          className={`${classes.balance__value__container} ${
            currentBalance < 0
              ? classes.balance__value__container__negative
              : undefined
          }`}
        >
          <span className={classes.balance__span}>Balance</span>
          <span className={classes.balance__value}>
            {currentBalance.toLocaleString()}
            {symbol}
          </span>
        </div>
        <div>
          {!originalBalance && <AppBalanceForm />}
          {originalBalance && (
            <div className={classes.balance__current__data}>
              <AppBalanceData currentBalance={currentBalance} />
              <div>
                <button
                  onClick={() =>
                    dispatch(uiActions.toggleModal({ status: true }))
                  }
                  className={`app__button app__button__negative app__button__shadow`}
                >
                  Clear Balance
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppCellContainer>
  );
}

export default AppBalance;
