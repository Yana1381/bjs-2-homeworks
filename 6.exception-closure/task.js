//Задание 1

function parseCount(value) {
  let parsedValue = Number.parseInt(value);
  if (isNaN(parsedValue)) throw new Error("Невалидное значение");
  
  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } 
  catch (e) {
    return e;
  }
}

//Задание 2

