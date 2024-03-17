import classes from "./AppNoMovements.module.css";

function AppNoMovements({ movementsType }) {
  return (
    <div className={classes.movements__message__container}>
      <span className="message">No {movementsType} yet</span>
    </div>
  );
}

export default AppNoMovements;
