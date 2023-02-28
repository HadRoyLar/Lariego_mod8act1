
var fullName = prompt("Please Enter your full name");

var userName = prompt("Please Enter your user name");


if (confirm("What is your gender? \n Press OK if you are Male \n Cancel if Female") == true) {
    alert("Your profile gender is set to MALE");
    document.getElementById("gender").innerHTML = "M";
}

else {
    alert("Your profile gender is set to FEMALE");
    document.getElementById("gender").innerHTML = "F";
}


var briefDesc=prompt("Please type a brief description of yourself");



var birthYear = prompt("Please enter your Birth Year:");
const d = new Date();
var yearNow = d.getFullYear();
var yourAge = yearNow-birthYear;


if (confirm("Do you want to you use a custom profile picture?")==true) {
    var profPict = prompt("Please enter the file name of the picture. (Ex. wow.jpg)");
    alert("Profile picture has been updated.");
}

else {
    alert("No image has been set.");
}

document.getElementById("fname").innerHTML = fullName;
document.getElementById("username").innerHTML = userName;
document.getElementById("year").innerHTML = birthYear;
document.getElementById("desc").innerHTML = briefDesc;
document.getElementById("age").innerHTML = yourAge;
document.getElementById("ppic").src = profPict;








