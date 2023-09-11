// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrayOfUsers = [
    new User(1, 'vova', 'ofj', 'lsf@.com', '+3805523411'),
    new User(2, 'jsla', 'dsfaljk', 'dsalfkj@.com', '+382080283'),
    new User(3, 'jsla', 'dsfaljk', 'dsalfkj@.com', '+382080283'),
    new User(4, 'jla', 'dsfaljk', 'dsalfkj@.com', '+382080283'),
    new User(5, 'jslsda', 'dsfaljk', 'dsalfkj@.com', '+382080283'),
    new User(6, 'jadsfsla', 'dsfaljk', 'dsalfkj@.com', '+382080283'),
    new User(7, 'jslsdfa', 'dsfaljk', 'dsalfkj@.com', '+382080283'),
    new User(8, 'jsldsfa', 'dsfaljk', 'dsalfkj@.com', '+382080283'),
    new User(9, 'jsldfsa', 'dsfaljk', 'dsalfkj@.com', '+382080283'),
    new User(10, 'jslsdfa', 'dsfaljk', 'dsalfkj@.com', '+382080283'),
]
console.log(arrayOfUsers);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arrayOfUsers.filter(value => value.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arrayOfUsers.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrayOfClient = [
    new Client(1, 'vasya', 'vljsda', 'lsdakf@.com', '+3800851018', ['milk', 'water']),
    new Client(2, 'vaasdfya', 'vljsda', 'lsdakf@.com', '+3800851018', ['water']),
    new Client(3, 'vashqya', 'vljsda', 'lsdakf@.com', '+3800851018', ['milk', 'water', 'cheese']),
    new Client(4, 'vasyxca', 'vljsda', 'lsdakf@.com', '+3800851018', ['milk', 'water', 'klsdf', 'jlfsl']),
    new Client(5, 'vasya', 'vljsda', 'lsdakf@.com', '+3800851018', ['milk', 'water', 'water']),
    new Client(6, 'vasywrewa', 'vljsda', 'lsdakf@.com', '+3800851018', ['milk']),
    new Client(7, 'vasyjhja', 'vljsda', 'lsdakf@.com', '+3800851018', ['milk', 'water', 'water', 'water', 'water']),
    new Client(8, 'vasyaaaa', 'vljsda', 'lsdakf@.com', '+3800851018', ['milk', 'water', 'water', 'water']),
    new Client(9, 'vasyasfda', 'vljsda', 'lsdakf@.com', '+3800851018', ['milk']),
    new Client(10, 'vasyawta', 'vljsda', 'lsdakf@.com', '+3800851018', ['milk', 'water']),

]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arrayOfClient.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
        for (const key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
const myCar = new Car('Civic', 'Honda', 2023, 200, 1.8);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2024);
myCar.addDriver({ name: 'John', age: 30 });
console.log(myCar);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarH {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// Приклад використання класу
const secondCar = new Car('Volkswagen', 'T-5', 2013, 200, 2.5);
secondCar.drive();
secondCar.info();
secondCar.increaseMaxSpeed(20);
secondCar.changeYear(2014);
secondCar.addDriver({ name: 'Ann', age: 20 });

console.log(secondCar); // Виведе об'єкт класу Car

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

const cinderellas = [
    new Cinderella('Cindy1', 20, 35),
    new Cinderella('Cindy2', 21, 36),
    new Cinderella('Cindy3', 22, 37),
    new Cinderella('Cindy4', 23, 38),
    new Cinderella('Cindy5', 24, 39),
    new Cinderella('Cindy6', 25, 40),
    new Cinderella('Cindy7', 26, 35),
    new Cinderella('Cindy8', 27, 36),
    new Cinderella('Cindy9', 28, 37),
    new Cinderella('Cindy10', 29, 38),
];

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findCinderella(cinderellas) {
        return cinderellas.find(cinderella => cinderella.footSize === this.foundShoeSize);
    }
}

const princeCharming = new Prince('Prince Charming', 30, 39);

const matchingCinderella = princeCharming.findCinderella(cinderellas);

if (matchingCinderella) {
    console.log(`Принц ${princeCharming.name} знайшов свою попелюшку: ${matchingCinderella.name}`);
} else {
    console.log(`Принц ${princeCharming.name} не знайшов попелюшку`);
}
