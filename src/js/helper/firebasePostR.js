import firebase from "./firebaseConfig.js";

var firestore = firebase.firestore();

const submitBtn = document.querySelector("#submit");

let employeeID = document.querySelector("#id");
let bookName = document.querySelector("#bookname");

let result = document.getElementById("result");
let result_success = document.getElementById("result-success");

const db = firestore.collection("LibraryDataReturn");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let employeeIDInput = employeeID.value;
  let bookNameInput = bookName.value;
  let CurrentDate = moment().format("YYYY-MM-DD HH:mm:ss");
  if (employeeIDInput == "") {
    result.innerHTML = "Please try submit again";
    result_success.innerHTML = "";
  } else {
    db.doc()
      .set({
        id: employeeIDInput,
        bookname: bookNameInput,
        timestamp: CurrentDate,
      })
      .then(function () {
        console.log("Data Save");
        result.innerHTML = "";
        result_success.innerHTML = "Submit Success";
        employeeID.value = "";
        return false;
      })
      .catch(function (error) {
        result.innerHTML = "Please try submit again";
        result_success.innerHTML = "";
      });
  }
});
