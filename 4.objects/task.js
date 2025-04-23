// Функция-конструктор Student
function Student(name, gender, age) {
  this.name = name;                   // Имя студента
  this.gender = gender;               // Пол студента
  this.age = age;                     // Возраст студента
  this.marks = [];                    // Массив для хранения оценок
}

// Метод для установки предмета
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;         // Записываем предмет в свойство subject
};

// Метод для добавления оценок
Student.prototype.addMarks = function(...marksToAdd) {
  if (!this.marks) return;           // Если студент отчислен, ничего не делаем
  this.marks.push(...marksToAdd);    // Добавляем оценки в массив
};

// Метод для подсчета среднего балла
Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) return 0; // Если нет оценок, возвращаем 0
  return this.marks.reduce((acc, curr) => acc + curr, 0) / this.marks.length; // Сумма делится на количество оценок
};

// Метод для отчисления студента
Student.prototype.exclude = function(reason) {
  delete this.subject;                 // Удаляем предмет
  delete this.marks;                   // Удаляем оценки
  this.excluded = reason;             // Запоминаем причину отчисления
};

// Пример использования:
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учеба');
console.log(student2);
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учеба"}