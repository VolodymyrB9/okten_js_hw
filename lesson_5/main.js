// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calcArea = (a, b) => a * b;
console.log(calcArea(2, 5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let calcAreaCircle = (r) => 3.14 * (r * r);
console.log(calcAreaCircle(14));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calcCylinder = (r, h) => 2 * 3.14 * r * h;
console.log(calcCylinder(2, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
const Arr = [1, 2, 3, 4, 5];
let printArr = (Arr) => {
    for (let element of Arr) {
        console.log(element);
    }
}
printArr(Arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraph = (string) => document.write(`<p>${string}</p>`);
createParagraph('Hi user');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}`);
    }
    document.write(`</ul>`)
}
createUl('product');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let creatUl2 = (text, count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}`)
    }
    document.write(`</ul>`)
};
creatUl2('milk', 4);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primitiveToArray = (array) => {
    document.write(`<ol>`)
    for (const item of array) {
        document.write(`<li>${item}`)
    }
    document.write(`</ol>`);
}
primitiveToArray([1, 3, 5, true, 'stir'])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const Obj = [
    {id: 1, name: 'vasya', age: 33},
    {id: 2, name: 'ann', age: 31},
    {id: 3, name: 'vova', age: 29}
];
let objToPage = (obj) => {
    for (let item of obj) {
        document.write(`<div>${'id: ' + item.id + ' name: ' + item.name + ' age: ' + item.age}</div>`)
    }
}
objToPage(Obj);
// - створити функцію яка повертає найменьше число з масиву
const ArrayOfNumbers = [3, 5, 6, 1, 8, -2, -121];
let findMinNumber = (array) => {
    let min = array[0];
    for (let item of array) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}
console.log(findMinNumber(ArrayOfNumbers));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const ArrayOfNumbersForSum = [2, 1, 6, 8, 20];
let SumOfNumbers = (array) => {
    let sum = 0;
    for (let item of array) {
        sum += item;
    }
    return sum;
}
console.log(SumOfNumbers(ArrayOfNumbersForSum));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    const numIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = numIndex1;

    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sum, currencies, resultCurrency) => {
    for (let cur of currencies) {
        if (cur.currency === resultCurrency) {
            return `${sum / cur.value} ${resultCurrency}`
        }
    }
    return 'Wrong currency!!!'
}
const currencies = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'W', value: 2},
    {currency: 'DE', value: 6},
    {currency: 'SS', value: 25},
    {currency: 'RE', value: 13},
    {currency: 'PL', value: 8},
]
const result = exchange(10000, currencies, 'EUR')
console.log('result : ', result)