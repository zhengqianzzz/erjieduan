var username = document.querySelector("#username");
    var password = document.querySelector("#password");
    var login = document.querySelector("#login");
    login.onclick = function(){
        if(username.value == localStorage.getItem("username") && password.value == localStorage.getItem("password")){
            window.location.href = './index.html';
        }else{
            alert("账号密码输入有误!")
        }   
    }