// https://jsonplaceholder.typicode.com/posts

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function displayPosts(posts){
     
}

loadPosts();
