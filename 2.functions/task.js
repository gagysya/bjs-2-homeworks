// Задача 1
 
  function getArrayParams(arr) {
    let min = Infinity, 
      max = -Infinity, 
      sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } 
   if (arr[i] > max) {
     max = arr[i];   } 
      sum += arr[i];
    }
    let avg = Number((sum / arr.length).toFixed(2));  
    let arrMas = {
      min: min,
      max: max,
      avg: avg    
    };  
    return arrMas;
  };

const mas = [1, 2, 3, -100, 10];
console.log(getArrayParams(mas));
console.log( );


// Задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce(function(a, b) {
    return a + b;
  });
  return sum;
}
console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return max - min;
}
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log( );

// Задача 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let max = func(...arrOfArr[i]);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }
  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));
console.log( );