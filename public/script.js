const form = document.forms["submit-to-google-sheet"];
const myUrl = new URL(window.location.href);
const URLname = myUrl.searchParams.get("book_name");
var BtnSubmit = document.getElementById("btnSubmit");

//Getting the full rrl from website
var book_name;
if (URLname != null) {
  book_name = books[URLname].Book_Name;
  console.log(book_name);
  document.getElementById("bookname").value = book_name;
}

// Datalist Option
var options = "";
books.forEach((e) => {
  options +=
    '<option value="' + e.Book_Name + '" >' + e.Book_Name + "</option>";
});

document.getElementById("bookname").innerHTML = options;
