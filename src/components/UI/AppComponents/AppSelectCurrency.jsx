import classes from "./AppSelectCurrency.module.css";

function AppSelectCurrency() {
  return (
    <form className={classes.select__form}>
      <label className={classes.select__form__span} htmlFor="select">
        Currency:
      </label>
      <select className={classes.select__form__select} name="select">
        <option>USD ($)</option>
        <option>EUR (€)</option>
        <option>YEN (¥)</option>
      </select>
    </form>
  );
}

export default AppSelectCurrency;
