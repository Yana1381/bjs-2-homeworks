function parseCount(value) {
  let parsedValue = Number.parseInt(value);
  if (isNaN(parsedValue)) throw new Error("Невалидное значение");
  
  return parsedValue;
}

function validateCount(value) {
  
  try {
    parseCount(value);
    if (parsedValue === true) {
      
    return parsedValue;
    }
  } catch (e) {
    if (isNaN(parsedValue)) {
      throw e;
    } 
  }
}