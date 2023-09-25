// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let userForm = document.forms.user;
userForm.onsubmit = function (ev) {
    ev.preventDefault()
    createBlock()
};
let createBlock = function () {
    const block = document.createElement('div');
    const nameUser = document.createElement('h2');
    const surnameUser = document.createElement('p');
    const ageUser = document.createElement('p');

    nameUser.innerText = userForm.name.value;
    surnameUser.innerText = userForm.surname.value;
    ageUser.innerText = userForm.age.value;

    block.append(nameUser, surnameUser, ageUser);
    document.body.appendChild(block)
};
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let count = parseInt(localStorage.getItem('count')) || 0;
count++;
localStorage.setItem('count', count);
const counterElement = document.getElementById('counter');
counterElement.innerText = `Значення лічильника: ${count}`;
// ==========================
// Є сторінка users.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки users.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
const currentDate = new Date();
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push({date: currentDate});
localStorage.setItem('sessions', JSON.stringify(sessions));
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const container = document.createElement('div');
const hideBtn = document.createElement('button')
container.setAttribute('id', 'text');

container.innerText = 'Some text';
hideBtn.innerText = 'Act';

document.body.append(container, hideBtn)
hideBtn.addEventListener('click', () => {
    container.remove()
})

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const formForAge = document.forms.ageUser;
formForAge.onsubmit = function (ev) {
    ev.preventDefault();
    if (+this.statusAge.value >= 18) {
        return alert('Yes');
    }else {
    alert('No')
    }
}
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається