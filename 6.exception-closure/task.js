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

class Triangle {    
	constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a + b) < c || (a + c) < b || (c + b) < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }
    
  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
	S = +S.toFixed(4);
    return S;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle;
  } 
  catch (e) {
    return new Triangle,
    getPerimeter(), getArea();
    console.log('Ошибка! Треугольник не существует');
  }
}