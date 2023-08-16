/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;

Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/

let greeting = 'hello';
console.log(greeting);

let p = 'owu';
console.log(p);

let mail = 'com';
console.log(mail);

let end = 'ua';
console.log(end);

let one = 1;
console.log(one);

let ten = 10;
console.log(ten);

let minus = -999;
console.log(minus);

let number = 123;
console.log(number);

const PI = 3.14;
console.log(PI);

let point = 2.7;
console.log(point);

let sixteen = 16;
console.log(sixteen);

let booleanT = true;
console.log(booleanT);

let booleanF = false;
console.log(booleanF);

/*-------------------------------*/
let firstName = 'Bilusiak';
let middleName = 'Volodymyr';
let lastName = 'Volodymyrovich';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);
/*-------------------------------*/
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);
/*-------------------------------*/
let Name = prompt('enter your name');
console.log(Name);
let mName = prompt('enter your middle name');
console.log(mName);
let age = prompt('enter your age');
console.log(age);