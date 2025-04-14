// Получение статистики массива
function getArrayParams(...arr) {
    if (!arr.length) return {};
  
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const avg = Number((sum / arr.length).toFixed(2));
  
    return { min: min, max: max, avg: avg };
  }
  
  // Функция суммы элементов
  function summElementsWorker(...arr) {
    if (!arr.length) return 0;
  
    return arr.reduce((acc, curr) => acc + curr, 0); // Используем аргумент 'arr'
  }
  
  // Разница между максимальным и минимальным элементами
  function differenceMaxMinWorker(...arr) {
    if (!arr.length) return 0;
  
    const max = Math.max(...arr);
    const min = Math.min(...arr);
  
    return max - min;
  }
  
  // Разность четных и нечетных чисел
  function differenceEvenOddWorker(...arr) {
    if (!arr.length) return 0;
  
    let sumEven = 0,
        sumOdd = 0;
  
    for (let num of arr) { // Используем аргумент 'arr'
      if (num % 2 === 0) {
        sumEven += num;
      } else {
        sumOdd += num;
      }
    }
  
    return sumEven - sumOdd;
  }
  
  // Среднее значение четных элементов
  function averageEvenElementsWorker(...arr) {
    if (!arr.length) return 0;
  
    let sumEven = 0,
        countEven = 0;
  
    for (let num of arr) { // Используем аргумент 'arr'
      if (num % 2 === 0) {
        sumEven += num;
        countEven++;
      }
    }
  
    return countEven ? sumEven / countEven : 0;
  }
  
  // Основная агрегирующая функция
  function makeWork(arrOfArr, func) {
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