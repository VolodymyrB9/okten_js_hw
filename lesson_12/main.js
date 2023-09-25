// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let url = new URL ('http://jsonplaceholder.typicode.com/users');

fetch(url)
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let wrapper = document.createElement('div');
            let userId = document.createElement('p');
            let userName = document.createElement('a');

            userName.href = 'user-details.html?data=' + JSON.stringify(user)
            userId.innerText = 'ID - ' + user.id;
            userName.innerText = 'Name - ' + user.name;

            wrapper.append(userId, userName);
            document.body.appendChild(wrapper);
        }

    })
