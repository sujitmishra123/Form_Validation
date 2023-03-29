let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;
function validateFrom() {
    if (username.value == "") {
        document.getElementById("userError").innerHTML = "user name is empty";
        flag = 0;
    }
    else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML = "user name require minimum 3 char";
        flag = 0;
    }
    else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }
    if (password.value == "") {
        document.getElementById("passError").innerHTML = "password is empty";
        flag = 0;
    }
    else {
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
    if (number.value.length < 10) {
        document.getElementById("numError").innerHTML = "phone no. is must be 10 digit";
        flag = 0;
    }
    else {
        document.getElementById("numError").innerHTML = "";
        flag = 1;
    }
    if (email.value == "") {
        document.getElementById("mailError").innerHTML = "mail is empty pls fill this field";
        flag = 0;
    }
    else {
        document.getElementById("mailError").innerHTML = "";
        flag = 1;
    }

    if (anumber.value.length < 12) {
        document.getElementById("aadharError").innerHTML = "aadhar no. must be 12 digit";
        flag = 0;
    }
    else {
        document.getElementById("aadharError").innerHTML = "";
        flag = 1;
    }





    if (flag) {
        return true;

    } else {
        return false;
    }

}