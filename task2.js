/*
#2 Выборка объекта
Сформировать произвольный массив объектов, описывающий, например,
работников компании, в каждом объекте должны содержаться поля
name (содержащее имя сотрудника) и salary (содержащее зарплату сотрудника от 0 до 3000).
Сформировать функцию в которую будет передан в качестве аргумента этот массив
и возвращен из функции массив содержащий имена всех сотрудников,
чья зарплата превышает 1000.
*/
const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 },
];

const getWorthhyWorkers = (workersArr) => {
  const worthyWorkers = [];

  workersArr.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name);
      }
  });

  return worthyWorkers;

// for (let i = 0; i < workersArr.length; i++) {
//   const currentWorker = workersArr[i];

//   if (currentWorker.salary > 1000) {
//     worthyWorkers.push(currentWorker.name);
//   }
// }

};

console.log(getWorthhyWorkers(workers));