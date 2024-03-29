const token = localStorage.getItem("blogs_token");

if(!token){
    const blog_menu = document.getElementById("blog-menu");
    blog_menu.innerHTML = `<i class="fa-solid fa-house" onclick="goToHome()"></i>`;
}

const goToHome = () => {
    window.location.href = "../index.html";
}

function createUrl(uri){
    return 'http://localhost:9999/cms'+uri;
}

function log(message){
    console.log(message);
}

const openBlog = () => {
    debugger;
    const blog_id = localStorage.getItem("blog_id");
    const url = createUrl(`/blogs/${blog_id}`);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        debugger;
      if (this.readyState == 4 && this.status == 200) {
        debugger;
        var response = JSON.parse(this.responseText);
        log(response);
        displayBlog(response[0]);
      }
    };
    xhr.open('GET', url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
};

const displayBlog = (data) => {
    var blog_title = document.getElementById("blog-title");
    var blog_author = document.getElementById("blog-author");
    var blog_date = document.getElementById("blog-date");
    var blog_content = document.getElementById("blog-content");

    const inputDate = new Date(data.updated_timestamp);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const outputDateString = inputDate.toLocaleDateString('en-US', options);

    blog_title.innerHTML = `${data.title}`;
    blog_author.innerHTML = `<h3>- ${data.author}</h3>`;
    blog_date.innerHTML = `${outputDateString}`;
    blog_content.innerHTML = `<p>${data.content}</p>`;
};

const logout = () => {
    localStorage.clear("blogs_token");
    localStorage.clear("blog_id");
    window.location.href = '../index.html';
};