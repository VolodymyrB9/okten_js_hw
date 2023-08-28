// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calcRectangle(a, b) {
    return a * b
}

console.log(calcRectangle(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calcCircle(r) {
    return 3.14 * (r * r)
}

console.log(calcCircle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcCylinder(r, h) {
    return 2 * 3.14 * r * h
}

console.log(calcCylinder(3, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
function printArr(arr) {
    for (const argument of arguments) {
        console.log(argument);
    }
}

const Arr = [1, 2, 3, 4, 5];
printArr(Arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(arguments) {
    return document.write(`<p>${arguments}</p>`)
}

createParagraph('hello world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(arguments) {
    return document.write(`<ul>
                                <li>${arguments}
                                <li>${arguments}
                                <li>${arguments}
                           </ul>`);
}

createUl('milk');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createLi(arguments, itemCount) {
    document.write('<ul>')
    for (let i = 0; i < itemCount; i++) {
        document.write(`<li>${arguments}</li>`);
    }
    document.write('</ul>')
}

createLi('milk', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListFromArray(...arr) {
    document.write('<ul>')
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>')
}

createListFromArray(1, 3, true, 'asd', 4, 5)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function displayObjectsWithDocumentWrite(objects) {
    for (const obj of objects) {
        document.write("<div>");
        document.write(`<p>ID: ${obj.id}</p>`);
        document.write(`<p>Name: ${obj.name}</p>`);
        document.write(`<p>Age: ${obj.age}</p>`);
        document.write("</div>");
    }
}

const myObjects = [
    {id: 1, name: "John", age: 30},
    {id: 2, name: "Alice", age: 25},
    {id: 3, name: "Bob", age: 40}
]; // Замініть на ваш масив об'єктів
displayObjectsWithDocumentWrite(myObjects);
// - створити функцію яка повертає найменьше число з масиву
let arrayOfNumber = [1, 2, 3, 4, 5, 6]

function printSmallestNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(printSmallestNumber(arrayOfNumber));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let numbers = [1,2,10]
function sum() {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum());
// - створити функцію swap(arr,index1,index2). Функція міняє місцями занячення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') => 250