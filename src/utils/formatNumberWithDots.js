const formatNumberWithDots = (number) => {
  const formattedNumber = number.toLocaleString(undefined, {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  return formattedNumber;
};

export { formatNumberWithDots };
