import firebase from "./firebaseConfig.js";

var firestore = firebase.firestore();

const submitBtn = document.querySelector("#submit");

let employeeName = document.querySelector("#name");
let employeeID = document.querySelector("#id");
let employeeEmail = document.querySelector("#email");
let bookName = document.querySelector("#bookname");

let result = document.getElementById("result");
let result_success = document.getElementById("result-success");

const db = firestore.collection("LibraryDataBorrow");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let employeeNameInput = employeeName.value;
  let employeeIDInput = employeeID.value;
  let employeeEmailInput = employeeEmail.value;
  let bookNameInput = bookName.value;
  let CurrentDate = moment().format("YYYY-MM-DD HH:mm:ss");
  if (
    employeeNameInput == "" ||
    employeeIDInput == "" ||
    employeeEmailInput == ""
  ) {
    result.innerHTML = "Please try submit again";
    result_success.innerHTML = "";
  } else {
    db.doc()
      .set({
        name: employeeNameInput,
        id: employeeIDInput,
        email: employeeEmailInput,
        bookname: bookNameInput,
        timestamp: CurrentDate,
      })
      .then(function () {
        console.log("Data Save");
        result.innerHTML = "";
        result_success.innerHTML = "Submit Success";
        employeeName.value = "";
        employeeID.value = "";
        employeeEmail.value = "";
        return false;
      })
      .catch(function (error) {
        result.innerHTML = "Please try submit again";
        result_success.innerHTML = "";
      });
  }
});
