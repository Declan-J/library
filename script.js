// --- LIBRARY LOGIC ---

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

addBookToLibrary(crypto.randomUUID(), "One Piece: Volume 1", "E.Oda", 126);
addBookToLibrary(crypto.randomUUID(), "One Piece: Volume 2", "E.Oda", 148);
addBookToLibrary(crypto.randomUUID(), "One Piece: Volume 3", "E.Oda", 138);

// --- DISPLAY LOGIC ---
container = document.querySelector(".container");

// counter used for card unique ID
cardNumber = 1;
myLibrary.forEach((e) => {
// Create DOM elements for each entry in the library.
    const card = document.createElement("div")
    card.setAttribute("id", `card${cardNumber}`);
    card.setAttribute("class", "card");

    const title = document.createElement("h4");
    title.append(e.title);

    const author = document.createElement("p");
    author.append(e.author);

    const pages = document.createElement("p");
    pages.append(e.pages);

    const id = document.createElement("small");
    id.append(e.id)

    card.append(title, author, pages, id)
    container.appendChild(card);

    cardNumber++;
})