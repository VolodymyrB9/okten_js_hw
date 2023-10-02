let userId = new URL(location.href).searchParams.get('userId');

let urlOfUser = 'https://jsonplaceholder.typicode.com/users';
let urlOfPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
fetch(urlOfUser + '/' + userId)
    .then(response => response.json())
    .then(user => {
        let container = document.createElement('div');
        container.classList.add('main_container');
        let listOfUser = document.createElement('ul');

        userBuilder(user, listOfUser);

        let btnForPosts = document.createElement('button');
        btnForPosts.classList.add('show_posts');
        btnForPosts.innerText = 'Post of current user';

        container.append(listOfUser, btnForPosts);
        document.body.append(container);

        fetch(urlOfPosts)
            .then(response => response.json())
            .then(posts => {
                let containerForPosts = document.createElement('div');
                containerForPosts.classList.add('container_post');

                let isPostVisible = false;
                btnForPosts.onclick = () => {
                    if (!isPostVisible) {
                        posts.forEach(post => {
                            let postsList = document.createElement('div');
                            postsList.classList.add('posts-list');
                            let postItem = document.createElement('p');
                            let btnForPostDetails = document.createElement('button')
                            btnForPostDetails.innerText = 'More'
                            btnForPostDetails.onclick = () => {
                                location.href = `post-details.html?postId=${post.id}`
                            }
                            postItem.innerText = post.title;
                            postsList.append(postItem, btnForPostDetails);
                            containerForPosts.appendChild(postsList);

                            isPostVisible = true;
                        });
                    }else {
                        containerForPosts.innerHTML = '';
                        isPostVisible = false;
                    }
                };

                document.body.append(containerForPosts);
            });
    });

function userBuilder(userObj, tag) {
    for (const userKey in userObj) {
        if (typeof userObj[userKey] !== 'object') {
            let valueOfUser = document.createElement('li');
            valueOfUser.innerText = `${userKey}: ${userObj[userKey]}`;
            tag.appendChild(valueOfUser);
        } else {
            let ul = document.createElement('ul');
            ul.innerText = `${userKey}`;
            tag.appendChild(ul);
            userBuilder(userObj[userKey], ul);
        }
    }
}


