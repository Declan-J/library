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
cardNumber = 0;

function displayLibrary() {
    //Remove all cards (prevents dupes)
        while (container.firstChild) {
            container.removeChild(container.lastChild)
        }
    myLibrary.forEach((e) => {

        // Create DOM elements for each entry in the library.
        const card = document.createElement("div")
        card.setAttribute("id", `card${cardNumber + 1}`);
        card.setAttribute("class", "card");
        // card.setAttribute("data-id", `${e.id}`)

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

        const button = document.createElement("button");
        button.append("Remove Book")
        button.setAttribute("data-id", `${e.id}`)

        const hr = document.createElement("hr")
        const br = document.createElement("br")

        card.append(title, author, pages, read, id, br, hr, button)
        container.appendChild(card);
        cardNumber++;
    })
}
displayLibrary();

// --- FORM LOGIC ---
submit.addEventListener("click", (e) => {
    e.preventDefault();

    // Get Inputs from Form
    const dialog = document.querySelector("dialog");
    let d_title = document.getElementById("title").value;
    let d_author = document.getElementById("author").value;
    let d_pages = document.getElementById("pages").value;
    let d_read = document.getElementById("read").value;

    // Push inputs into Library
    addBookToLibrary(d_title, d_author, d_pages, d_read);
    displayLibrary();

    dialog.close();
})