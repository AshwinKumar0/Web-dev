let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = true;

function validateForm(){
    if(username.value == ""){
       document.getElementById("userError").innerHTML = "User-Name is empty";
       flag = false;
    }
    else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "User-Name required minimum 3 char";
        flag = false;
    }
    else{
        document.getElementById("userError").innerHTML = "";
        flag = true;
    }


    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is empty";
        flag = false;
     }
     else if(password.value.length < 3){
         document.getElementById("passError").innerHTML = "Password required minimum 3 character";
         flag = false;
     }
     else{
        document.getElementById("passError").innerHTML = "";
        flag = true;
     }
    
    return flag;
}