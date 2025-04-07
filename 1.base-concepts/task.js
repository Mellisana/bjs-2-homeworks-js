"use strict";

// Функция для решения квадратного уравнения ax^2 + bx + c = 0
function solveEquation(a, b, c) {
  const roots = [];

  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    roots.push(root);
  }

  return roots;
}


"use strict";
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем процентную ставку из процентов в десятичную форму
  const interestRate = percent / 100;

  // Рассчитываем месячную процентную ставку
  const monthlyInterestRate = interestRate / 12;

  // Рассчитываем тело кредита (сумма кредита минус первоначальный взнос)
  const principal = amount - contribution;

  // Если весь кредит погашен взносом, возвращаем 0
  if (principal <= 0) {
    return 0;
  }

  // Рассчитываем ежемесячный платеж по аннуитетной схеме
  const monthlyPayment = principal * (
    monthlyInterestRate +
    monthlyInterestRate / ((1 + monthlyInterestRate) ** countMonths - 1)
  );

  // Округляем ежемесячный платеж до четырех знаков после запятой
  const roundedMonthlyPayment = Number((monthlyPayment).toFixed(4));

  // Рассчитываем общую сумму выплат
  const totalPayments = roundedMonthlyPayment * countMonths;

  // Возвращаем итоговое значение, округленное до двух знаков после запятой
  return Number(totalPayments.toFixed(2));
}
