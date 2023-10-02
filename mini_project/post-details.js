let postId = new URL(location.href).searchParams.get('postId');

let urlOfPosts = 'https://jsonplaceholder.typicode.com/posts';
let urlOfComments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

const postContainer = document.createElement('div');
const commentsContainer = document.createElement('div');
postContainer.classList.add('post_container');
commentsContainer.classList.add('comments_container');
fetch(urlOfPosts + '/' + postId)
    .then(response => response.json())
    .then(post => {
        const ul = document.createElement('ul');

        for (const key in post) {
            const li = document.createElement('li');
            li.innerText = `${key}: ${post[key]}`;
            ul.appendChild(li);
        }

        postContainer.appendChild(ul);
    });
fetch(urlOfComments)
    .then(response => response.json())
    .then(comments => {
        comments.forEach((comment) => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <h3>Name: ${comment.email}</h3>
                <p>Comment: ${comment.body}</p>`;

            commentsContainer.appendChild(commentElement);
        });
    });
document.body.appendChild(postContainer);
document.body.appendChild(commentsContainer);
