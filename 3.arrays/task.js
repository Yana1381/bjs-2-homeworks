function compareArrays(arr1, arr2) {
  return result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);


  return result; 
}




function advancedFilter(arr) {

  let resultArr = arr.filter(positive => positive > 0).filter(divideThree => divideThree % 3 === 0).map(multiplyTen => multiplyTen * 10);

  return resultArr; // array
}
