/*
const firebaseConfig = {
    apiKey: "AIzaSyDLTeqe2wsIyTd2rzy2AE4L7f6KaOIxAE4",
    authDomain: "series-maniac.firebaseapp.com",
    databacseURL: "https://series-maniac-default-rtdb.firebaseio.com",
    projectId: "series-maniac",
    storageBucket: "series-maniac.appspot.com",
    messagingSenderId: "672695104473",
    appId: "1:672695104473:web:723bd2242a5da08dc4dfc8",
    measurementId: "G-F0L7SX0HTS"
  };

  firebase.initializeApp(firebaseConfig);
var Registerform = firebase.database().ref('Registerform');
document.getElementById('Registerform').addEventListener("submit", submitForm)

function submitForm(e){
  e.preventDefault();
var firstname = getElementVal('firstname');
var lastname = getElementVal('lastname');
  var email = getElementVal('email');
  var password = getElementVal('password');
  var username = getElementVal('username');
  saveMessages(firstname, lastname, email, password, username

  document.querySelector ("alert")= "block";
  setTimeout(() => {
document.querySelector(".alert") = "none";
  },3000);

document.getElementById("Registerform").reset();             

  
}

const saveMessages = (firstname, lastname, email, password, username) => {


  var newRegisterform = Registerform.push();

  newRegisterform.set({
    firstname: firstname,
    lastname: lastename,
    email: enail,
    password: password,
    username: username,
  })
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
  
};
*/
//fixed version of above commented off code
//PLEASE READ MY COMMENTS
const firebaseConfig = {
  apiKey: "AIzaSyDLTeqe2wsIyTd2rzy2AE4L7f6KaOIxAE4", //where did this come from? bc that's not the key i used for the APIs
  authDomain: "series-maniac.firebaseapp.com", //did you change it to this?
  databaseURL: "https://series-maniac-default-rtdb.firebaseio.com", //i really hope so
  projectId: "series-maniac", // make sure please and thanks
  storageBucket: "series-maniac.appspot.com", //EH HEHHH!!
  messagingSenderId: "672695104473", //HMMMM
  appId: "1:672695104473:web:723bd2242a5da08dc4dfc8",// LOL
  measurementId: "G-F0L7SX0HTS" // well bet
};

firebase.initializeApp(firebaseConfig);

var Registerform = firebase.database().ref('Registerform');

document.getElementById('Registerform').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstname = getElementVal('firstname');
  var lastname = getElementVal('lastname');
  var email = getElementVal('email');
  var password = getElementVal('password');
  var username = getElementVal('username');

  saveMessages(firstname, lastname, email, password, username);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("Registerform").reset();
}

const saveMessages = (firstname, lastname, email, password, username) => {
  var newRegisterform = Registerform.push();

  newRegisterform.set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    username: username,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

/*
//another version which includes validation
//use either this version or the other see which works better or if it works at all and LMK please please :)
//if you change anything from apiKey to measurementId in the version above fix it here too 
const firebaseConfig = {
  apiKey: "AIzaSyDLTeqe2wsIyTd2rzy2AE4L7f6KaOIxAE4",
  authDomain: "series-maniac.firebaseapp.com",
  databaseURL: "https://series-maniac-default-rtdb.firebaseio.com",
  projectId: "series-maniac",
  storageBucket: "series-maniac.appspot.com",
  messagingSenderId: "672695104473",
  appId: "1:672695104473:web:723bd2242a5da08dc4dfc8",
  measurementId: "G-F0L7SX0HTS"
};

firebase.initializeApp(firebaseConfig);

const registerFormRef = firebase.database().ref('Registerform');

document.getElementById('Registerform').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const firstname = getElementVal('firstname');
  const lastname = getElementVal('lastname');
  const email = getElementVal('email');
  const password = getElementVal('password');
  const username = getElementVal('username');

  if (validateForm(firstname, lastname, email, password, username)) {
    saveMessages(firstname, lastname, email, password, username);
    document.querySelector(".alert").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
    document.getElementById("Registerform").reset();
  }
}

const saveMessages = (firstname, lastname, email, password, username) => {
  const newRegisterForm = registerFormRef.push();

  newRegisterForm.set({
    firstname,
    lastname,
    email,
    password,
    username,
  })
    .then(() => console.log("Form submission successful"))
    .catch((error) => console.error("Error while saving form submission", error));
};

const getElementVal = (id) => {
  const element = document.getElementById(id);
  return element ? element.value : '';
};

const validateForm = (firstname, lastname, email, password, username) => {
  if (!firstname || !lastname || !email || !password || !username) {
    alert("Please fill out all fields.");
    return false;
  }
  return true;
};
*/