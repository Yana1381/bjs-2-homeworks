function solveEquation(a, b, c) {
  let arr;
  let arr = [];
  let d = b**2-4*a*c;

  console.log('Discriminant: ' + d);

  if (d < 0)
  return false;

    if(d == 0) {
        arr["Quadratic roots"] = (-b + Math.sqrt(d)) / (2 * a);
    }

    else if(d > 0) {
        let roots = [];
        arr.push((-b + Math.sqrt(d)) / (2 * a));
        arr.push((-b - Math.sqrt(d)) / (2 * a));
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
