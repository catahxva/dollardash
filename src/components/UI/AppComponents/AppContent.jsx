import classes from "./AppContent.module.css";

import { useState } from "react";

import { Link } from "react-router-dom";

import Overlay from "../Others/Overlay";
import AppModal from "./AppModal";
import AppSelectCurrency from "./AppSelectCurrency";
import AppBalance from "./AppBalance";
import AppBalanceRatio from "./AppBalanceRatio";
import AppMovements from "./AppMovements";
import AppContainerCharts from "./AppContainerCharts";
import AppBarChart from "./AppBarChart";
import AppHistory from "./AppHistory";

function AppContent() {
  const [showModal, setShowModal] = useState();

  return (
    <>
      {showModal && (
        <>
          <Overlay closeModal={setShowModal} />
          <AppModal closeModal={setShowModal} />
        </>
      )}
      <main className={classes.app}>
        <div className={classes.app__container__header}>
          {/* <AppCurrentDate /> */}
          <Link to="/" className={classes.app__logo}>
            Dollar/Dash
          </Link>
          <AppSelectCurrency />
        </div>
        <div className={classes.app__grid__main__app}>
          <div className={classes.app__grid__container__side}>
            <AppBalance openModal={setShowModal} />
            <AppBalanceRatio />
          </div>
          <div className={classes.app__grid__container__main}>
            <AppMovements movementsType={"expenses"} />
            <AppMovements movementsType={"incomes"} />
          </div>
        </div>
        <div className={classes.app__container__graphs}>
          <AppContainerCharts />
          <AppBarChart />
        </div>
        <AppHistory />
      </main>
    </>
  );
}

export default AppContent;
