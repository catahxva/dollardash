import classes from "./AppMovementsListControls.module.css";

function AppMovementsListControls({
  movementsLength,
  endingIndex,
  setEndingIndex,
}) {
  return (
    <div className={classes.movements__list__controls}>
      {movementsLength > 3 && !(endingIndex >= movementsLength) && (
        <button
          className={classes.movements__list__controls__button}
          onClick={() => setEndingIndex((prevIndex) => prevIndex + 3)}
        >
          Show More
        </button>
      )}
      {endingIndex > 3 && (
        <button
          className={classes.movements__list__controls__button}
          onClick={() => setEndingIndex((prevIndex) => prevIndex - 3)}
        >
          Show Less
        </button>
      )}
    </div>
  );
}

export default AppMovementsListControls;
