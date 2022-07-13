function login() {
     var done = 0;
     var username = document.login.username.value;
     username = username.toLowerCase();
     var password = document.login.pass.value;
     password = password.toLowerCase();
     if (username == "hadiidandriy12" && password == "hadiid") {
       window.location.href = "/Fortasi/Home/index.html";
     } else if (done == 0) {
       alert("Username/Password yang anda masukan salah!");
     }
}