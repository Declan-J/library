const myLibrary = [];

function Book(id, title, author, pages) {
  // the constructor...
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(id, title, author, pages) {
  // take params, create a book then store it in the array

  let newBook = new Book(id, title, author, pages)
  myLibrary.push(newBook);
}

addBookToLibrary(crypto.randomUUID(),"One Piece: Volume 1", "E.Oda", 126);
addBookToLibrary(crypto.randomUUID(),"One Piece: Volume 2", "E.Oda", 148);
addBookToLibrary(crypto.randomUUID(),"One Piece: Volume 3", "E.Oda", 138);

console.log(myLibrary)