// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const arr = [];

for (let i = 1; i <= 100; i++) {
    let obj = {
        id: i,
        name: `Item ${i}`
    }
    arr.push(obj)
}

function singleObjectDiv(singleObj) {
    let div = document.createElement('div');
    let id = document.createElement('h2');
    let name = document.createElement('p');

    id.innerText = 'ID - ' + singleObj.id;
    name.innerText = 'Name - ' + singleObj.name;

    div.append(id, name);

    return div;
}

function slice(array, step, start) {
    let stepDivs = [];

    for (let i = start; i < start + step; i++) {
        let div = singleObjectDiv(arr[i])

        stepDivs.push(div)
    }
    return stepDivs

}

let startIndex = 0;
let step = 10;
let wrapperDiv = document.querySelector('.wrapper');

let btnNext = document.querySelector('.next');
btnNext.addEventListener('click', function () {
    if (startIndex < 90) {
        startIndex += step;
        let x1 = slice(arr, step, startIndex);
        wrapperDiv.replaceChildren(...x1);
    }
});

let btnPrev = document.querySelector('.prev');
btnPrev.addEventListener('click', function () {
    if (startIndex >= 10) {
        startIndex -= step
        let x2 = slice(arr, step, startIndex);
        wrapperDiv.replaceChildren(...x2);
    }
})

let arrOfDivs = slice(arr, step, startIndex);

wrapperDiv.replaceChildren(...arrOfDivs);


