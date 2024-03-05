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
