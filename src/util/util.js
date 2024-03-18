export const filterMovements = function (movements) {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  return movements.filter((mov) => {
    const deserializedDate = new Date(mov.serializedDate);

    const movYear = deserializedDate.getFullYear();
    const movMonth = deserializedDate.getMonth();

    return movYear === year && movMonth === month;
  });
};

export const determineEnableLabels = function (comparableVal) {
  const screenWidth = window.screen.width;
  const enableLabels = screenWidth <= comparableVal ? false : true;

  return enableLabels;
};
