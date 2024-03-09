import classes from "./AppNotification.module.css";

import { createPortal } from "react-dom";

import { useSelector } from "react-redux";

function AppNotification() {
  const notification = useSelector((state) => state.ui.notification);

  const { status } = notification;

  const backgroundClass =
    status === "error"
      ? classes.notification__error
      : status === "success"
      ? classes.notification__success
      : classes.notification__loading;

  return createPortal(
    <div className={`${classes.notification} ${backgroundClass}`}>
      <span className={classes.notification__message}>
        {notification.message}
      </span>
    </div>,
    document.getElementById("notification")
  );
}

export default AppNotification;
