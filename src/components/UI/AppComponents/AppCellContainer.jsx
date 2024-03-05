import classes from "./AppCellContainer.module.css";

function AppCellContainer({ children, gradient }) {
  return (
    <div
      className={`${classes.app__cell__container} ${
        gradient && classes.app__cell__container__gradient
      }`}
    >
      {children}
    </div>
  );
}

export default AppCellContainer;
