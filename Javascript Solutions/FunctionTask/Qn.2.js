const calculateAverage = (a, b, c) => (a + b + c) / 3;
const Division = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};
const Result = (name, a, b, c, getDivision) => {
  const average = calculateAverage(a, b, c);
  const division = getDivision(average);

  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};
Result("Saffy", 80, 70, 75, Division);