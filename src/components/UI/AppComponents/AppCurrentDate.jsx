import classes from "./AppCurrentDate.module.css";

function AppCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" });

  return (
    <span className={classes.current__date}>
      Your finances for {month} of {year}
    </span>
  );
}

export default AppCurrentDate;
