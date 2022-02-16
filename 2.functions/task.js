// Задание 1
function getArrayParams(arr) {
  let min = Infinity; 
  let max = -Infinity; 
  let sum = 0; 
  
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
     min = arr[i];
    }
    if (arr[i] > max) {
     max = arr[i];
    }
  }

  let avg = sum / arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}


// Задание 2

arrOfArr = [[1, 2, 3, 4], [10, 20, -10, -20]];

function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let sum = 0;
  for(let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (max < sum) {
    max = sum;
    }
  }

  return max;
}

// Задание 3

function worker2(arr) {
  let min = Infinity; 
  let max = -Infinity; 
  let delta = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
     min = arr[i];
    }
	if (arr[i] > max) {
     max = arr[i];
    }
}

  //delta = max - min;
  //delta = Math.abs(delta);

  return Math.abs(max - min);
}
