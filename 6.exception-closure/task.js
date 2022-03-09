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
    return this.a + this.b + this.c;
  }
    
  getArea() {
    let p = this.getPerimeter() / 2;
    let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return S = +S.toFixed(3);
	//в задании 3 знака после точки
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } 
  catch (e) {
	let object = {
		getPerimeter(){
			return 'Ошибка! Треугольник не существует'
			},
		getArea(){
			return 'Ошибка! Треугольник не существует'
			}
		}
	return object;
  }
}