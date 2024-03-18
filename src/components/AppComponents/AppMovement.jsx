import classes from "./AppMovement.module.css";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { currentMovementsActions } from "../../store/currentMovementsSlice";

function AppMovement({ movement }) {
  const dispatch = useDispatch();
  const symbol = useSelector((state) => state.general.symbol);

  const [edit, setEdit] = useState();

  const [titleInput, setTitleInput] = useState(movement.title);
  const [valueInput, setValueInput] = useState(movement.value);

  return (
    <div
      className={`${classes.movement} ${
        movement.type === "expenses"
          ? classes.movement__expense
          : classes.movement__income
      }`}
    >
      <div className={classes.movement__row}>
        <span className={classes.movement__span__data}>
          {movement.category}
        </span>
        <span className={classes.movement__span__data}>{movement.date}</span>
      </div>
      <div className={classes.movement__row}>
        <div className={classes.movement__container__spans}>
          {!edit && (
            <>
              <span className={classes.movement__span__main}>
                {movement.title}
              </span>
              <span className={classes.movement__span__main}>
                {movement.type === "expense" ? "-" : undefined}
                {movement.value.toLocaleString()}
                {symbol}
              </span>
            </>
          )}
          {edit && (
            <form className={classes.movement__form}>
              <input
                className={classes.movement__input}
                type="text"
                name="title"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
              <input
                className={classes.movement__input}
                type="number"
                name="value"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
            </form>
          )}
        </div>
        <div className={classes.movement__container__btns}>
          <button
            onClick={() => {
              dispatch(
                currentMovementsActions.deleteMovement({
                  id: movement.id,
                  type: movement.type,
                })
              );
            }}
            className={`${classes.movement__btn} ${classes.movement__btn__delete}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${classes.movement__svg}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          {!edit && (
            <button
              onClick={() => setEdit(true)}
              className={`${classes.movement__btn} ${classes.movement__btn__edit}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${classes.movement__svg}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          )}
          {edit && (
            <button
              onClick={() => {
                setEdit(false);

                const convertedValue = Number(valueInput);

                if (!titleInput || !valueInput || convertedValue <= 0) return;

                console.log("did not return");

                dispatch(
                  currentMovementsActions.editMovement({
                    type: movement.type,
                    id: movement.id,
                    title: titleInput,
                    value: convertedValue,
                  })
                );
              }}
              className={`${classes.movement__btn} ${classes.movement__btn__edit}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${classes.movement__svg}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppMovement;
