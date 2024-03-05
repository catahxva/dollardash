import classes from "./AppBalanceForm.module.css";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { generalActions } from "../../../store/generalSlice";

function AppBalanceForm() {
  const dispatch = useDispatch();

  const [balanceInput, setBalanceInput] = useState(0);

  const submitHandler = function (e) {
    e.preventDefault();

    const convertedBalance = Number(balanceInput);

    if (
      !balanceInput ||
      balanceInput <= 0 ||
      typeof convertedBalance !== "number"
    )
      return;

    dispatch(generalActions.setOriginalBalance({ balance: convertedBalance }));
    setBalanceInput(0);
  };

  return (
    <form className={classes.balance__form} onSubmit={submitHandler}>
      <label className={classes.balance__form__label} htmlFor="balance">
        Set your balance:
      </label>
      <input
        className={classes.balance__form__input}
        type="number"
        name="balance"
        value={balanceInput}
        onChange={(e) => setBalanceInput(e.target.value)}
      />
      <button
        className={`app__button ${classes.balance__form__btn}`}
        disabled={
          !balanceInput ||
          balanceInput <= 0 ||
          typeof Number(balanceInput) !== "number"
        }
      >
        Set
      </button>
    </form>
  );
}

export default AppBalanceForm;
