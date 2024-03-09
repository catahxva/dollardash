import classes from "./Overlay.module.css";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/uiSlice";

function Overlay() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(uiActions.toggleModal({ status: false }))}
      className={classes.overlay}
    ></div>
  );
}

export default Overlay;
