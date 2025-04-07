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


function calculateTotalMortgage(annualInterestRate, initialContribution, loanAmount, months) {
  // Переводим годовую процентную ставку в месячную
  const monthlyInterestRate = annualInterestRate / 1200;

  // Рассчитываем основной долг (сумма кредита минус первоначальный взнос)
  const principal = loanAmount - initialContribution;

  // Если весь кредит погашен взносом, возвращаем 0
  if (principal <= 0) {
    return 0;
  }

  // Рассчитываем ежемесячный платёж по аннуитетной схеме
  const monthlyPayment = principal * (
    monthlyInterestRate +
    monthlyInterestRate / ((1 + monthlyInterestRate) ** months - 1)
  );

  // Округляем ежемесячный платёж до двух знаков после запятой
  const roundedMonthlyPayment = Number((monthlyPayment).toFixed(2));

  // Рассчитываем общую сумму выплат
  const totalPayments = roundedMonthlyPayment * months;

  return totalPayments;
}