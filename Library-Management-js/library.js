let form = document.querySelector("#form-detail");
function clear() {
  for (let element of form) {
    element.value = "";
  }
}
function serachClr() {
  let search = document.querySelector("#search");
  search.value = "";
}
let books = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let book = {
    id: Math.floor(Math.random() * 1000),
    title: $(".book-title").val().toLowerCase(),
    author: $(".book-author").val().toLowerCase(),
    genre: $(".book-genre").val().toLowerCase(),
    year: $(".book-year").val().toLowerCase(),
    quantity: $(".book-quantity").val().toLowerCase(),
  };
  let tbody = $("table tbody");
  tbody.append(`
    <tr class="${book.id}">
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td> 
      <td>${book.year}</td>
      <td>${book.quantity}</td>
    </tr>
  `);
  books.push(book);
  localStorage.setItem("storedBook", JSON.stringify(books));
  alert("Successfully submitted");
  clear();
});
$("#searchBtn").click(function (e) {
  e.preventDefault();
  let key = $("#search").val().toLowerCase();
  let filter = books.filter((book) => book.title === key);
  let result = filter.map((value) => {
    return `
           <tr class="${value.id}">
          <td>${value.title}</td>
          <td>${value.author}</td>
          <td>${value.genre}</td>
          <td>${value.year}</td>
          <td>${value.quantity}</td>
        </tr>
      `;
  });
  console.log(result);
  if (result.length != 0) {
    let tbody = $("table tbody");
    let string = result.join("");
    tbody.html(string);
  } else {
    alert("BOOK NOT FOUND");
  }
  serachClr();
});
