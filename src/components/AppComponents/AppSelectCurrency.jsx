import classes from "./AppSelectCurrency.module.css";

import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { generalActions } from "../../store/generalSlice";
import { currentMovementsActions } from "../../store/currentMovementsSlice";

import { currencies } from "../../util/currencies";

function AppSelectCurrency() {
  const dispatch = useDispatch();

  const currentCurrency = useSelector((state) => state.general.currency);
  const currentSymbol = useSelector((state) => state.general.symbol);
  const originalBalance = useSelector((state) => state.general.originalBalance);

  const expenses = useSelector((state) => state.currentMovements.expenses);
  const incomes = useSelector((state) => state.currentMovements.incomes);

  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const changeHandler = async function (e) {
    const [newCurrency, newSymbol] = e.target.value.split(",");

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.EXCHANGE_KEY}&base_currency=${currentCurrency}&currencies=${newCurrency}`
      );

      const data = await res.json();

      const dataKeys = Object.keys(data.data);

      const conversionRate = data.data[dataKeys[0]];

      dispatch(
        generalActions.changeCurrency({
          currency: newCurrency,
          symbol: newSymbol,
        })
      );

      if (originalBalance)
        dispatch(
          generalActions.convertOriginalBalance({
            conversionRate,
          })
        );

      if (expenses.length > 0) {
        dispatch(
          currentMovementsActions.convertMovements({
            type: "expenses",
            conversionRate,
          })
        );
      }

      if (incomes.length > 0) {
        dispatch(
          currentMovementsActions.convertMovements({
            type: "incomes",
            conversionRate,
          })
        );
      }

      setSuccess(true);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      dispatch(uiActions.deleteNotification());

      dispatch(
        uiActions.triggerNotification({
          status: "loading",
          message: "Loading...",
        })
      );
    }

    if (error) {
      dispatch(uiActions.deleteNotification());

      dispatch(
        uiActions.triggerNotification({
          status: "error",
          message: error.message,
        })
      );
    }

    if (success) {
      dispatch(uiActions.deleteNotification());

      dispatch(
        uiActions.triggerNotification({
          status: "success",
          message: "Conversion was successful",
        })
      );
    }

    const timer = setTimeout(() => {
      dispatch(uiActions.deleteNotification());
      setSuccess();
      setError();
      setLoading();
    }, 3000);

    return () => {
      dispatch(uiActions.deleteNotification());

      clearTimeout(timer);
    };
  }, [loading, error, success]);

  return (
    <form className={classes.select__form}>
      <label className={classes.select__form__span} htmlFor="select">
        Currency:
      </label>
      <select
        onChange={changeHandler}
        defaultValue={`${currentCurrency},${currentSymbol}`}
        className={classes.select__form__select}
        name="select"
      >
        {currencies.map((currency) => {
          return (
            <option
              value={`${currency.code},${currency.symbol}`}
              key={currency.code}
            >
              {currency.code} ({currency.symbol})
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default AppSelectCurrency;
