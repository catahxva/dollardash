import classes from "./AppModal.module.css";

import { createPortal } from "react-dom";

import { useDispatch } from "react-redux";

import { uiActions } from "../../../store/uiSlice";
import { generalActions } from "../../../store/generalSlice";
import { currentMovementsActions } from "../../../store/currentMovementsSlice";

function AppModal() {
  const dispatch = useDispatch();

  return createPortal(
    <div className={classes.modal}>
      <p className={classes.modal__text}>
        Are you sure you want to perform this action? This will clear all your
        finances data, including expenses, incomes and everything else.
      </p>
      <div className={classes.modal__container__btns}>
        <button
          onClick={() => {
            dispatch(generalActions.clearBalance());
            dispatch(currentMovementsActions.clearMovements());
            dispatch(uiActions.toggleModal({ status: false }));
          }}
          className={`${classes.modal__btn} ${classes.modal__btn__clear}`}
        >
          Clear
        </button>
        <button
          onClick={() => dispatch(uiActions.toggleModal({ status: false }))}
          className={`${classes.modal__btn} ${classes.modal__btn__close}`}
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default AppModal;
