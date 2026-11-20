const calculateBill = (units) => {
  const serviceFee = 50;
  let charge = 0;
  if (units <= 20) {
    charge = units * 5;
    return charge + serviceFee;
  } else if (units <= 50) {
    charge = 20 * 5 + (units - 20) * 7;
    return charge + serviceFee;
  } else {
    charge = 20 * 5 + 30 * 7 + (units - 50) * 10;
    return charge + serviceFee;
  }
};
const displayBill = (name, units, billCalculator) => {
  const bill = billCalculator(units);
  console.log(`Customer: ${name}`);
  console.log(`Units Consumed: ${units}`);
  console.log(`Total Electricity Bill: Rs. ${bill}`);
};

displayBill("Appi", 65, calculateBill);