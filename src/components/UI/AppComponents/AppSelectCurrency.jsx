import classes from "./AppSelectCurrency.module.css";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { EXCHANGE_KEY } from "../../../util/config";

function AppSelectCurrency() {
  // const []

  const currentCurrency = useSelector((state) => state.general.currency);

  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const changeHandler = async function (e) {
    try {
      const res = await fetch(
        `http://api.exchangeratesapi.io/v1/convert?access_key=${EXCHANGE_KEY}&from=${currentCurrency}&to=${e.target.value}&amount=1`
      );

      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(currentCurrency);

  return (
    <form className={classes.select__form}>
      <label className={classes.select__form__span} htmlFor="select">
        Currency:
      </label>
      <select
        onChange={changeHandler}
        defaultValue={currentCurrency}
        className={classes.select__form__select}
        name="select"
      >
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
        <option value="YEN">YEN (¥)</option>
      </select>
    </form>
  );
}

export default AppSelectCurrency;
