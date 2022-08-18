export const selectAllItems = (reduxState) => {
  return [...reduxState.inventory.items].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
};

export const selectMinimumQuantity = (reduxState) => {
  return reduxState.inventory.minimumQuantity;
};
