function form() {
    const title = "Report a Paranormal Event";

    const content = `
      <h2>New post</h2>
      <form method="POST">
        <p>
          <label for="username">Username</label>
          <input id="username" name="username">
        </p>
        <p>
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </p>
        <button>Send</button>
      </form>
    `;
    return layout(title, content);
}

function defaultPosts() {
    const title = "No Recent Paranormal Events";

    const content = `
    <h1> NO POSTS</h1>
    <a href="/submit-post"><button>Add Post</button></a>
    `;

    return layout(title, content);
}

function renderingPosts(posts) {
    const title = "Recent Paranormal Activity";

    const content = `
    <h2>All posts</h2>
    <ul>
      ${posts.map((post, index) => postItem(post, index)).join("")}
    </ul>
    <a href="/submit-post"><button id="addPostButton">Add Post</button></a>
    `;
    return layout(title, content);
}

function postItem(post, index) {
    const date = new Date(post.created);
    const prettyDate = date.toLocaleString("en-GB");
    return `
      <li>
        <p>${post.message}</p>
        <p>—${post.username} | ${prettyDate}</p>
        <a href="/delete-post/${index}" class="delete-link">
          <button class="deletePostButton">Delete</button>
        </a>
      </li>
    `;
}

function layout(title, content) {
    return /*html*/ `
      <!doctype html>
      <html>
        <head>
          <title>${title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="css/style.css">
        </head>
        <body>
          ${content}
        </body>

      </html>
    `;
}

module.exports = { form, renderingPosts, defaultPosts };
