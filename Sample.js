var user = false;
var mail = false;
var pas = false;
var RePas = false;

const userName = document.getElementById('username');
const email = document.getElementById('emailid');
//const password = document.getElementById('password');
const confPassword = document.getElementById('confirmpassword');
const submitBtn = document.getElementById('submitBtnId');

submitBtn.addEventListener("click", FormValidation);
const users = document.getElementById('errorName');
const emailerror = document.getElementById('emailerror');
const passworderror = document.getElementById('passworderror');
const confirmerror = document.getElementById('confirmpassworderror');
let regexPattern = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;


function FormValidation() {
  debugger;
  if ((userName.value.length >= 3) && (userName.value.length <= 25)) {
    users.innerText = "";
    userName.style.borderColor = "lightgreen";
    user = true;

  }
  else {
    users.innerText = "Username must be between 3 and 25 characters";
    userName.style.borderColor = "red";
  }
  if (email.value.includes("@gmail.com") || email.value.includes("@outlook.com") || email.value.includes("@carwale.com") || email.value.includes("@cartrade.com") || email.value.includes("@hotmail.com")) {
    emailerror.innerText = "";
    email.style.borderColor = "lightgreen"
    mail = true;
  }
  else {
    emailerror.innerText = "Must be a valid email address.";
    email.style.borderColor = "red";
  }

  if (password.value.match(regexPattern)) {
    document.getElementById("passworderror").innerText = ""
    password.style.borderColor = "lightgreen"
    pas = true;
  }
  else {
    document.getElementById("passworderror").innerText = "Password must be at least 8 characters that include atleast 1 lowercase character,1 uppercase characters,1 number,and 1 special character in(!@#$^&*)";
    password.style.borderColor = "red"


  }
  if (password.value == confPassword.value && confPassword.value != "") {
    confirmerror.innerText = "";
    confPassword.style.borderColor = "lightgreen";
    RePas = true;
  }
  else {
    confirmerror.innerText = "please enter correct password";
    confPassword.style.borderColor = "red";
  }
  if (userName.name != "" && email.value != "" && password.value != "" && confPassword.value != "") {
    if (user == true && mail == true && pas == true && RePas == true) {
      alert("You are Signed up Successfully")
    }
    else {
      alert("Enter your detaisl as per given instructions !!!")
    }
  }

}
function usernameChecking() {
  if ((userName.value.length >= 3) && (userName.value.length <= 25)) {
    users.innerText = "";
    userName.style.borderColor = "lightgreen";
  }
  else {
    users.innerText = "Username must be between 3 and 25 characters";
    userName.style.borderColor = "red";
  }

  // function emailChecking(){
  if (email.value.includes("@gmail.com") || email.value.includes("@outlook.com") || email.value.includes("@carwale.com") || email.value.includes("@cartrade.com") || email.value.includes("@hotmail.com")) {
    emailerror.innerText = "";
    email.style.borderColor = "lightgreen";
  }
  else {
    emailerror.innerText = "Must be a valid email address.";
    email.style.borderColor = "red";
  }

  if (password.value.match(regexPattern)) {
    document.getElementById("passworderror").innerText = ""
    password.style.borderColor = "lightgreen"
  }
  else {
    document.getElementById("passworderror").innerText = "Password must be at least 8 characters that include atleast 1 lowercase character,1 uppercase characters,1 number,and 1 special character in(!@#$^&*)";
    password.style.borderColor = "red"
  }

  if (password.value === confPassword.value) {
    confirmerror.innerText = "";
    confPassword.style.borderColor = "lightgreen"
  }
  else {
    confirmerror.innerText = "please enter correct password";
    confPassword.style.borderColor = "red"
  }
}

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

var a;
function pass() {
  if (a == 1) {
    document.getElementById('password').type = 'password';
    document.getElementById('pass-icon').src = 'eye-invisiable.png';
    a = 0;
  }
  else {
    document.getElementById('password').type = 'text';
    document.getElementById('pass-icon').src = 'eyevisiable.png';
    a = 1;
  }
}



function toggleVisibility() {
  var getPasword = document.getElementById("password");
  var invisiable = document.getElementById("eye-invisible-icon");
  var visiable = document.getElementById("eye-visible-icon");
  if (getPasword.type === "password") {
    getPasword.type = "text";
    invisiable.classList = "hide";
    visiable.classList.remove = "hide";

  } else {
    getPasword.type = "password";

  }
}





