function getArrayParams(...arr) {
  if (!arr.length) return {};
    
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
    if (!args.length) return 0;
    
    return args.reduce((acc, curr) => acc + curr, 0);
}


function differenceMaxMinWorker(...arr) {
  if (!args.length) return 0;
    
  const max = Math.max(...args);
  const min = Math.min(...args);
  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (!args.length) return 0;
    
    let sumEven = 0;
    let sumOdd = 0;
    
    for (let num of args) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (!args.length) return 0;
    
  let sumEven = 0;
  let countEven = 0;
  
  for (let num of args) {
      if (num % 2 === 0) {
          sumEven += num;
          countEven++;
      }
  }
  
  return countEven ? sumEven / countEven : 0;
}

function makeWork (arrOfArr, func) {
    if (!arrOfArr.length || !func) return null;

    let maxWorkerResult = -Infinity;

    for (const subArr of arrOfArr) {
        const result = func(...subArr);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}
