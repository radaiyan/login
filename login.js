function hello(){
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if(user == null && pass == null){
    alert("!!! Please, write something !!!");
  }

  if(user == user && pass == pass){
    console.log("Hello " + user);
    console.log("username = " + user);
    console.log("password = " + pass);

    document.getElementById("name_1").innerHTML = "Your username is : " + user;
    document.getElementById("name_2").innerHTML = "Your password is : " + pass;

  }else{
    console.log("Wrong information");
  }
}