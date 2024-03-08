// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.

let programmer = {
  name: "Бобик",
  surName: "Пес",
  age: 8,
  langProg: "Ассемблер",
  salary:100,
};

for(let item in programmer){
    console.log(item)
}

// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")
console.log(" -----------------------------------------------");


let firstNum = +prompt("Введите первое число")
let secondNum = +prompt("Введите второе число")

let sumNum = firstNum + secondNum;

if(sumNum > 10 && sumNum < 20){
     sumNum *= 5
}else if (sumNum > 20 && sumNum < 50) {
    sumNum /= 3;
}else{
    sumNum += 10;
}
console.log(`Результат prompta: ${sumNum}`);


console.log(" -----------------------------------------------");
// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];

// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

let aboutUs = [
  ["name", "Makers"],
  ["type", "Bootcamp"],
  ["place", "Bishkek"],
  ["languages", "JavaScript, Python"],
  ["simply", "the best!"]
];

aboutUs.forEach(item => console.log(item.join(": ")))
    
// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };
   console.log("-----------------------------------------------");


let users = {
  John: 28,
  Mark: 30,
  David: 25,
  Richard: 42
};
    let ageSum = 0;
for(let usersItem in users){
   ageSum = ageSum += users[usersItem];

}console.log('Сумарный возраст ' + ageSum)
// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]
console.log(" -----------------------------------------------");


function removeElem(arr, element){
    let arrIndex = arr.findIndex(item => item === element);
    if(arrIndex !== -1){
        arr.splice(arrIndex,1)
    }
    return console.log(arr);
}
let arr = [2, 'hello', true,  'world',  5, 'js'];
removeElem(arr,true);



console.log("-----------------------------------------------");
// Задание №6
// Создайте функцию-замыкание, которая возвращает анонимную функцию и высчитывает сумму аргументов возвращаемой функции с аргументом главной функции, то есть нужно посчитать сумму аргументов родительской функции и дочерней функции.

// function foo(a) {
  //Допишите ф-ю
// }
// Пример:
// const res = foo(3)(4);
// console.log(res); //7

function foo(a) {
  return function (b) {
    return a + b;
  };
} 

const res = foo(25)(25);
console.log('сумма аргументов: ' + res);


   console.log("-----------------------------------------------");
// Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50
//! Я не специально.
function functionLimit(num) {
    number = num
    const limit = 1000;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    if(num > 0){
        while(num <= limit){
            num *=2
            if(num < limit){
            arr.push(num);
        }
        }
    }
    for(let item of arr){
        console.log(item)
    }
    arr2 = [...arr]
    arr3 = arr2.sort((a, b) => b - a).splice(0, 1).join("");
    while(parseInt(arr3) > number){
        let arr4 = arr3 /= 2
        console.log(arr4);
    }
}
//?  код который должен был писатся за 5 строчек был написал за вот сколько ,пути назад не было хахаха ,главное что он работаeт.
functionLimit(20);


// Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()
console.log("-----------------------------------------------");


let arrNames = ['Ilya','Olesya','Elmar','Kanykey','Mirbek Atabekov','jonk cuck'];
    let newArrNmaes = []
        newArrNmaes = arrNames.filter((item) => item.length > 5);
        console.log(newArrNmaes)


   console.log("-----------------------------------------------");
// Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()

let task2 = [10, 25, 25, 15, 5, 10];
let task2Sum = 0
task2.forEach(item => task2Sum += item)
alert(task2Sum)


console.log("-----------------------------------------------");
// Задание №10
//  Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

let task5 = [4, 5, 5, 5,5, 3, 5, 2, 3, 1, 3, 4];
let result = task5.reduce((acum, item) => {
  if (acum[item] === undefined) {
    acum[item] = 1;
  } else {
    acum[item]++;
  }
  return acum;
}, {});
result = Object.values(result);
result = result.sort((a,b)=> b - a).splice(0,1)//?тяжело все это в функцию затолкать 
console.log("самое повторяющее число в массиве " + parseInt(result));  


   console.log("-----------------------------------------------");

// Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

function arrCounter(nums) {
    return nums.map(num => {
        let count = 0;
        for (let item of nums) {
            if (num > item) {
              count++;
            }
        }
        return count;
    });
}

console.log(arrCounter([6, 5, 4, 8]));  


console.log("-----------------------------------------------");

// Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

let a = 0;
let b = 1;

[a, b] = [b, a];

console.log(a, b); 

// Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты
// и массивы и выведите в консоли.


console.log("-----------------------------------------------");
const obj = { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true };

const {size: { width, height }, 
    items: [cake, donut],
    extra } = obj;

console.log(width); 
console.log(height);
console.log(cake); 
console.log(donut); 
console.log(extra); 


console.log("-----------------------------------------------");
// Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.
let lift = {
  floor: 1,
  printFloor: function () {
    console.log(this.floor);
  },
  upOneFloor: function () {
    if (this.floor < 16) {
      this.floor++;
    } else {
      console.log("...");
    }
  },
  downOneFloor: function () {
    if (this.floor > 1) {
      this.floor--;
    } else {
      console.log("...");
    }
  },
  toFloor: function (toFloorNum) {
    if (toFloorNum < 1 || toFloorNum > 16) {
      console.log("Введите от 1 до 16");
      return;
    }
    console.log("From", this.floor, "To", toFloorNum + "...");
    while (this.floor !== toFloorNum) {
      if (toFloorNum > this.floor) {
        this.upOneFloor();
      } else {
        this.downOneFloor();
      }
      this.printFloor();
    }
  },
};
lift.toFloor(16); 
