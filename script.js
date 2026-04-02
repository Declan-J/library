// --- LIBRARY LOGIC ---

const myLibrary = [];

function Book(id, title, author, pages, read) {
    // the constructor...
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    id = crypto.randomUUID()
    let newBook = new Book(id, title, author, pages, read)
    myLibrary.push(newBook);
}

addBookToLibrary("One Piece: Volume 1", "E.Oda", 126, "read");
addBookToLibrary("One Piece: Volume 2", "E.Oda", 148, "read");
addBookToLibrary("One Piece: Volume 3", "E.Oda", 138, "not read");

// --- DISPLAY LOGIC ---
container = document.querySelector(".container");

// counter used for card unique ID
cardNumber = 1;
myLibrary.forEach((e) => {
// Create DOM elements for each entry in the library.
    const card = document.createElement("div")
    card.setAttribute("id", `card${cardNumber}`);
    card.setAttribute("class", "card");

    const title = document.createElement("h3");
    title.append(e.title);

    const author = document.createElement("p");
    author.append(e.author);

    const pages = document.createElement("p");
    pages.append(e.pages);

    const read = document.createElement("p")
    read.append(e.read)

    const id = document.createElement("small");
    id.append(e.id)

    card.append(title, author, pages, read, id)
    container.appendChild(card);

    cardNumber++;
})

// --- FORM LOGIC ---
const submit = document.getElementById("submit")
const dialog = document.querySelector("dialog")
submit.addEventListener("click", (e) => {
    e.preventDefault();
    // PROCESS FORM
    dialog.close();
})