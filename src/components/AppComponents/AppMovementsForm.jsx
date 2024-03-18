import classes from "./AppMovementsForm.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentMovementsActions } from "../../store/currentMovementsSlice";

import {
  expenseCategories,
  incomeCategories,
} from "../../util/movementsCategories";

function AppMovementsForm({ movementsType }) {
  const formMovementType = movementsType === "expenses" ? "Expense" : "Income";

  const optionsArray =
    movementsType === "expenses" ? expenseCategories : incomeCategories;

  const dispatch = useDispatch();

  const [titleInput, setTitleInput] = useState("");
  const [valueInput, setValueInput] = useState(0);
  const [category, setCategory] = useState("");

  const convertedValue = Number(valueInput);

  const submitHandler = function (e) {
    e.preventDefault();

    if (!titleInput || !convertedValue || convertedValue < 0 || !category)
      return;

    dispatch(
      currentMovementsActions.addMovement({
        category,
        title: titleInput,
        value: Number(valueInput),
        type: movementsType,
      })
    );

    setTitleInput("");
    setValueInput(0);
    setCategory("");
  };

  return (
    <form className={classes.movements__form} onSubmit={submitHandler}>
      <div className={classes.movements__form__container}>
        <div className={classes.movements__form__group}>
          <label className={classes.movements__form__label} htmlFor="title">
            {formMovementType} title:
          </label>
          <input
            className={classes.movements__form__input}
            type="text"
            name="title"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <div className={classes.movements__form__group}>
          <label className={classes.movements__form__label} htmlFor="value">
            {formMovementType} value:
          </label>
          <input
            className={classes.movements__form__input}
            type="number"
            name="value"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
        </div>
      </div>
      <div className={classes.movements__form__group__select}>
        <label className={classes.movements__form__label}>Category:</label>
        <select
          className={classes.movements__form__select}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
        >
          <option>Select</option>
          {optionsArray.map((option, i) => {
            return (
              <option key={i} value={option.name}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
      <button
        className="app__button"
        disabled={
          !titleInput || !convertedValue || convertedValue < 0 || !category
        }
      >
        Add {formMovementType}
      </button>
    </form>
  );
}

export default AppMovementsForm;
