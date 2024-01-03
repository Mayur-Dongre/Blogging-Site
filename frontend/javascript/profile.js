const previewImage = () => {
    const fileInput = document.getElementById('file-input');
    const profileImage = document.getElementById('profile-image');
    const uploadBtn = document.getElementById('upload-btn');
  
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
        profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
        fileInput.style.width = "70%";
        uploadBtn.style.display = "block";
        uploadBtn.style.width = "30%";
    }
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

const uploadPhoto = () => {
    showToast("success", "Profile image saved");
    setTimeout(function() {
        window.location.reload();
    }, 3000);
};

const showOldPassword = () => {
    var pass = document.getElementById("old-pass-box");
    var eye1 = document.getElementById("eye1");
    var eye2 = document.getElementById("eye2");

    if(pass.type === 'password'){
        pass.type = 'text';
        eye1.style.display = 'none';
        eye2.style.display = 'block';
    }
    else{
        pass.type = 'password';
        eye1.style.display = 'block';
        eye2.style.display = 'none';
    }
};

const showNewPassword = () => {
    var pass = document.getElementById("new-pass-box");
    var eye3 = document.getElementById("eye3");
    var eye4 = document.getElementById("eye4");

    if(pass.type === 'password'){
        pass.type = 'text';
        eye3.style.display = 'none';
        eye4.style.display = 'block';
    }
    else{
        pass.type = 'password';
        eye3.style.display = 'block';
        eye4.style.display = 'none';
    }
};

const getEmail = () => {

};

const emailValidation = () => {
    var email = document.getElementById('email-box');
    console.log(email.value);
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    
    if(email.value.match(emailRegex)){
        return true;
    }else{
        showToast("error", "Invalid email id");
        return false;
    }
};

const updateEmail = () => {
    if(emailValidation()){
        showToast("success", "Email id updated");
    }
};

const getName = () => {

};

const nameValidation = () => {
    var name = document.getElementById("name-box");
    console.log(name.value);
    if(name.value.length < 8){
        showToast("error", "Name should be atleast 8 characters long");
        return false;
    }
    return true;
};

const updateName = () => {
    if(nameValidation()){
        showToast("success", "Name updated");
    }
};

const passwordValidation = () => {
    return true;
};

const updatePassword = () => {
    var oldPass = document.getElementById("old-pass-box").value;
    var newPass = document.getElementById("new-pass-box").value;
    if(oldPass === "" || newPass === ""){
        showToast("error", "Please fill both passwords");
        return;
    }
    console.log("in logic");
    //logic to get curretn password from database
    var currentPass = "RamCharan@123"

    if(oldPass !== currentPass){
        showToast("error", "Old password is wrong");
    }
    else if(oldPass === newPass){
        showToast("error", "Old password and new Password should not be same");
    }
    else{
        if(passwordValidation()){
            showToast("success", "Password updated");
        }
    }
};