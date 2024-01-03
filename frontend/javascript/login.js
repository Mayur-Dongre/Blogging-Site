const showPassword = () => {
    var pass = document.getElementById("password");
    var eye1 = document.getElementById("eye1");
    var eye2 = document.getElementById("eye2");

    if(pass.type === 'password'){
        pass.type = 'text';
        eye1.style.display = 'block';
        eye2.style.display = 'none';
    }
    else{
        pass.type = 'password';
        eye1.style.display = 'none';
        eye2.style.display = 'block';
    }
}

const createUrl = (uri) => {
    return 'http://localhost:9999/cms'+uri;
}

const log = (message) => {
    console.log(message);
}

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
    }, 2000);
};

const reqFieldsValidation = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email === '' || password === ''){
        showToast("error", "Please fill all the required fileds");
    }else{
        return true;
    }
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

const login = () => {
    debugger;
    if(reqFieldsValidation() && emailValidation()){
        var username = document.getElementById("username");
        var pass = document.getElementById("password");
        const email = username.value;
        const password = pass.value;
        const body = JSON.stringify({email, password});
        const url = createUrl('/login');

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            debugger;
        if (this.readyState == 4 && this.status == 200) {
            debugger;
            var response = JSON.parse(this.responseText);
            log(response);
            localStorage.setItem("blogs_token", response.token);
            showToast("success", "Logged in");
            window.location.href = 'dashboard.html';
        }
        else if(this.readyState === 4 && this.status === 400){
            debugger;
            showToast("error", "Wrong email id or password");
        }
        };
        xhr.open('POST', url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(body);
    }
};
