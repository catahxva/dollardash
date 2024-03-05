import classes from "./Overlay.module.css";

function Overlay({ closeModal }) {
  return (
    <div onClick={() => closeModal(false)} className={classes.overlay}></div>
  );
}

export default Overlay;
