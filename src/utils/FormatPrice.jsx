const FormatPrice = (price) => {
  const priceFormated = Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });

  const finalPrice = priceFormated.format(price);
  return finalPrice;
};

export default FormatPrice;
