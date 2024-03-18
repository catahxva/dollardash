import classes from "./AppNotification.module.css";

import { createPortal } from "react-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

function AppNotification() {
  const dispatch = useDispatch();
  const { status, message } = useSelector((state) => state.ui.notification);

  console.log(status);

  const backgroundClass =
    status === "error"
      ? classes.notification__error
      : status === "success"
      ? classes.notification__success
      : classes.notification__loading;

  console.log(backgroundClass);

  return createPortal(
    <div className={`${classes.notification} ${backgroundClass}`}>
      <span className={classes.notification__message}>{message}</span>
      <button
        onClick={() => dispatch(uiActions.deleteNotification())}
        className={classes.notification__btn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${classes.notification__btn__svg}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>,
    document.getElementById("notification")
  );
}

export default AppNotification;
