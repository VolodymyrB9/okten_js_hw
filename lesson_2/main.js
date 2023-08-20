//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const random = [false, 2, 3, 4, 5, '6', [7], 8, 'nine', 10];
for (const randomElement of random) {
    console.log(randomElement);
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const firstBook = {
    title: 'about life',
    pageCount: 325,
    genre: 'drama'
};
const secondBook = {
    title: 'about sport',
    pageCount: 225,
    genre: 'thriller'
};
const thirdBook = {
    title: 'about lie',
    pageCount: 125,
    genre: 'horror'
};
/*
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
 масивом. Кожен автор має поля name та age.
 */
firstBook.author = [{
    name: 'Harry',
    age: 57
}];
secondBook.author = [{
    name: 'Louis',
    age: 38
}];
thirdBook.author = [{
    name: 'Kate',
    age: 23
}];
console.log(firstBook);
console.log(secondBook);
console.log(thirdBook);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {
    name: 'user1',
    username: 'u1',
    password: 'qwerty1'
},
    {
        name: 'user2',
        username: 'u2',
        password: 'qwerty2'
    },
    {
        name: 'user3',
        username: 'u3',
        password: 'qwerty3'
    },
    {
        name: 'user4',
        username: 'u4',
        password: 'qwerty4'
    },
    {
        name: 'user5',
        username: 'u5',
        password: 'qwerty5'
    },
    {
        name: 'user6',
        username: 'u6',
        password: 'qwerty6'
    },
    {
        name: 'user7',
        username: 'u7',
        password: 'qwerty7'
    },
    {
        name: 'user8',
        username: 'u8',
        password: 'qwerty8'
    },
    {
        name: 'user9',
        username: 'u9',
        password: 'qwerty9'
    },
    {
        name: 'user10',
        username: 'u10',
        password: 'qwerty10'
    },
];
for (const user of users) {
    console.log(`Password ${user.name}: ${user.password}`);
}
/*
Логічні розгалуження:
- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
*/
let x = +prompt('write your number');
if (x !== 0){
    alert('вірно');
}else {
    alert('Невірно');
}
/*
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
*/
let time = +prompt('Яка чверть години?');
if (time >= 0 && time < 20 ){
    alert('Перша чверть години')
}else if(time >= 20 && time < 30){
    alert('Друга чверть години');
}else if(time >= 30 && time < 40){
    alert('Третя чверть години');
}else if(time >= 40 && time < 50){
    alert('Четверта чверть години');
}else if(time >= 50 && time < 59){
    alert('Пʼята чверть години');
}else {
    alert('Запитаю в когось іншого...');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Яка декада місяця?');
if (day >= 0 && day < 10 ){
    alert('Перша половина місяця')
}else if(day >= 10 && day < 20){
    alert('Друга половина місяця');
}else if(day >= 20 && day < 30){
    alert('Третя половина місяця');
}else {
    alert('Запитаю в когось іншого...');
}
/*
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
 на цей день (можна замість плану на день, назву дня англійською).
 */
const dayNumber = +prompt("Який день тижня?");
switch (dayNumber) {
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    case 7:
        alert("Sunday");
        break;
    default:
        alert("Wrong day");
}
/*
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.
*/
const num1 = +prompt("Введіть перше число:");
const num2 = +prompt("Введіть друге число:");

let maxNumber;
if (num1 > num2) {
    maxNumber = num1;
} else if (num2 > num1) {
    maxNumber = num2;
} else if (num1 === num2){
    maxNumber = "Числа рівні";
} else {
    maxNumber = "Не число"
}
alert(`Максимальне число: ${maxNumber}`)
/*
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
*/

let a = +prompt("Введіть значення x:");
a = a || "default";
console.log(a);
/*
- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
 У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*!/
*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const time of coursesAndDurationArray) {
    if (time.monthDuration > 5) {
        console.log(`${time.title} Супер`);
    }
}

