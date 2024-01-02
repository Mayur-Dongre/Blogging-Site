const showPassword = () => {
    var pass = document.getElementById("reg-password");
    var eye3 = document.getElementById("eye3");
    var eye4 = document.getElementById("eye4");

    if(pass.type === 'password'){
        pass.type = 'text';
        eye3.style.display = 'block';
        eye4.style.display = 'none';
    }
    else{
        pass.type = 'password';
        eye3.style.display = 'none';
        eye4.style.display = 'block';
    }
}