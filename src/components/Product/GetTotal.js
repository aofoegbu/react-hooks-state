const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export const getTotal = (cart) => {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions);
};
