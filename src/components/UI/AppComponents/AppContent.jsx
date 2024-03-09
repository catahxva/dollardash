import classes from "./AppContent.module.css";

import { useSelector } from "react-redux";

import AppNotification from "./AppNotification";

import Overlay from "../Others/Overlay";
import AppModal from "./AppModal";

import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppGraphs from "./AppGraphs";

import AppHistory from "./AppHistory";

function AppContent() {
  const activeModal = useSelector((state) => state.ui.activeModal);
  const notification = useSelector((state) => state.ui.notification);

  return (
    <>
      {notification && <AppNotification />}
      {activeModal && (
        <>
          <Overlay />
          <AppModal />
        </>
      )}
      <main className={classes.app}>
        <AppHeader />
        <AppMain />
        <AppGraphs />
        <AppHistory />
      </main>
    </>
  );
}

export default AppContent;
