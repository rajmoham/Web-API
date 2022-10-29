const postListEl = document.querySelector(".post-list")
const id = localStorage.getItem("id");

function onSearchChange(event)
{
    const id = event.target.value;
    renderPosts(id);
}

async function renderPosts(userId)
{
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = await posts.json();

    postListEl.innerHTML = postsData.map( data => postDataHTML(data)).join("");
}

function postDataHTML(data)
{
    return `
        <div class="post">
            <div class="post__title">
                ${data.title}
            </div>
            <p class="post__body">
                ${data.title}
            </p>
        </div>
    `
}

renderPosts(id);