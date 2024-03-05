import classes from "./AppHistoryButtons.module.css";

function AppHistoryButtons({ keys, activeKey, changeKey }) {
  return (
    <div className={classes.history__buttons}>
      {keys.map((el) => {
        return (
          <button
            key={el}
            className={`app__button ${classes.history__button} ${
              activeKey === el && classes.history__button__active
            }`}
            onClick={() => changeKey(el)}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
}

export default AppHistoryButtons;
