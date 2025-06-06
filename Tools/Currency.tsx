const Currency = (cur: number, currency: string) => {
  const price = Intl.NumberFormat(currency, {
    style: "currency",
    currency: currency,
  }).format(cur);
  return price;
};

export default Currency;
