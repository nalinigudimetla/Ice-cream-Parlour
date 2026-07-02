function login(){

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;

if(user!="" && pass!=""){

document.getElementById("login").style.display="none";

document.getElementById("home").style.display="block";

}

else{

alert("Please Enter Details");

}

}