const token = localStorage.getItem("blogs_token");

if(token){
    const nav_options = document.getElementById("nav-options");
    nav_options.innerHTML = '';
}

const createUrl = (uri) => {
    return 'http://localhost:9999/cms'+uri;
};

const log = (message) => {
    console.log(message);
};

const openBlog = (id) => {
    debugger;
    log(id);
    localStorage.setItem("blog_id", id);
    window.location.href = './html/blogs.html';
};

const getTopBlogs = () => {
    const url = createUrl('/top-blogs');

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        log(response);
        createBlogCards(response);
      }
    };
    xhr.open('GET', url);
    xhr.send();
};

const createBlogCards = (data) => {
    var top_blogs = document.getElementById('top-blogs');
    for(var i=0; i<data.length; i++){
        const inputDate = new Date(data[i].updated_timestamp);
        const options = { month: 'short', day: '2-digit', year: 'numeric' };
        const outputDateString = inputDate.toLocaleDateString('en-US', options);
        var card = `<div class="blog" onclick="openBlog(${data[i].id})">
            <img src="./images/background.png" alt="">
            <h3>${data[i].title}</h3>
            <p class="author">- By ${data[i].author}</p>
            <p class="time">Last Updated ${outputDateString}</p>
            <p>${data[i].content}...</p>
        </div>`;
        top_blogs.innerHTML += card;
    }
};

const writeBlog = () => {
    if(!token){
        window.location.href = "../html/login.html";
    }
    else{
        window.location.href = "../html/writeblog.html"
    }
};

const readBlogs = () => {
    window.location.href = "../html/dashboard.html";
};  

const showToast = (type, message) => {
    debugger;
    var toast = document.getElementById('toast');
    toast.classList.add('show');
    toast.style.display = "block";
    if(type === "success"){
        toast.style.backgroundColor = "#07bc0c";
    }else if(type === "error"){
        toast.style.backgroundColor = "#e74c3c";
    }else if(type === "warning"){
        toast.style.backgroundColor = "#f1c40f";
    }
    toast.innerHTML = `${message}`;

    setTimeout(function() {
        toast.style.display = "none";
        toast.classList.remove('show');
    }, 3000);
};

const emailValidation = () => {
    var email = document.getElementById('email');
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    
    if(email.value.match(emailRegex)){
        return true;
    }else{
        showToast("error", "Invalid email id");
    }
};

const subscribe = () => {
    debugger;
    var email = document.getElementById("email");
    if(email.value === ''){
        showToast("error", "Please fill the email id");
    }else{
        if(emailValidation()){
            email.value = "";
            showToast("success", "Subscribed. Please check email for futher updates.");
        }
        else{
            showToast("error", "Invalid email id");
        }
    }
};