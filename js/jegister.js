var register = document.querySelector("#register");
var username = document.querySelector("#username");  //手机号码  
var password = document.querySelector("#password"); //密码
register.onclick = function (){
    if(username.value.trim() && password.value.trim()){ // 去除两端空格
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
        if(localStorage.getItem("username") && localStorage.getItem("password")){
            location.href = "./login.html";
        }
    }else{
        alert("输入内容有误!")
    }
    
}
