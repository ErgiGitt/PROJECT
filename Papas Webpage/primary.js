const firebaseConfig = {
  apiKey: "AIzaSyBWA2Z_S4GXrEJLAmIoWmrSY-7AKYzGb2E",
  authDomain: "papasBakery-data.firebaseapp.com",
  databaseURL: "https://papasbakery-data-default-rtdb.firebaseio.com",
  projectId: "papasbakery-data",
  storageBucket: "papasbakery-data.appspot.com",
  messagingSenderId: "896034052838",
  appId: "1:896034052838:web:59fef489e0e2123f35b927",
};

firebase.initializeApp(firebaseConfig);

var papasBakeryDB = firebase.database().ref("Papasbakery");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = papasBakeryDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
