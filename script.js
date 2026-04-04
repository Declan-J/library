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

addBookToLibrary("One Piece: Volume 1", "E.Oda", 126, "Read");
addBookToLibrary("One Piece: Volume 2", "E.Oda", 148, "Read");
addBookToLibrary("One Piece: Volume 3", "E.Oda", 138, "Not Read");

// --- DISPLAY LOGIC ---
container = document.querySelector(".container");

function displayLibrary() {
    // counter used for card unique ID
    let cardNumber = 0;
    
    //Remove all cards (prevents dupes)
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    myLibrary.forEach((book) => {

        // Create DOM elements for each entry in the library.
        //Card
        const card = document.createElement("div")
        card.setAttribute("id", `card${cardNumber + 1}`);
        card.setAttribute("class", "card");

        //Card children
        const id = document.createElement("small");
        id.append(book.id)

        const title = document.createElement("h3");
        title.append(book.title);

        const author = document.createElement("p");
        author.append(book.author);

        const pages = document.createElement("p");
        pages.append(book.pages);

        const read = document.createElement("p")
        read.append(book.read)

        const buttons_container = document.createElement("div")
        buttons_container.setAttribute("class", "buttons_container")

        const remove_btn = document.createElement("button");
        remove_btn.append("Remove Book");
        remove_btn.setAttribute("data-id", `${book.id}`);

        const toggle_btn = document.createElement("button");
        toggle_btn.append("Toggle Read");
        toggle_btn.setAttribute("data-id", `${book.id}`);

        buttons_container.append(toggle_btn, remove_btn);

        const hr = document.createElement("hr")
        const br = document.createElement("br")

        //Event Listeners
        toggle_btn.addEventListener("click", (event) => {
            toggleRead(event);
        })

        remove_btn.addEventListener("click", (e) => {
            removeBook(e);
        })

        //Add to DOM Container
        card.append(title, author, pages, read, id, br, hr, buttons_container)
        container.appendChild(card);
        cardNumber++;
    })
}
displayLibrary();

// --- FORM SUBMIT ---
submit.addEventListener("click", (e) => {
    e.preventDefault();

    // Get Inputs from the Form
    const dialog = document.querySelector("dialog");
    let d_title = document.getElementById("title").value;
    let d_author = document.getElementById("author").value;
    let d_pages = document.getElementById("pages").value;
    let d_read = document.getElementById("read-select").value;

    // Push inputs into Library
    addBookToLibrary(d_title, d_author, d_pages, d_read);
    displayLibrary();

    dialog.close();
})

// --- REMOVE BOOK ---
function removeBook(event) {
    //get "this" book id
    const book_ID = event.target.getAttribute("data-id");

    //find book id in library
    let found = myLibrary.findIndex((book) => book.id === book_ID)

    //splice library at found index
    myLibrary.splice(found, 1)

    //display library
    displayLibrary();
}

// --- CHANGE READ STATUS
function toggleRead(event) {
    //get "this" book id
    const book_ID = event.target.getAttribute("data-id");

    //find book id in library
    let found = myLibrary.findIndex((book) => book.id === book_ID)

    if (myLibrary[found].read === "Read") {
        myLibrary[found].read = "Not Read";
    }
    else {
        myLibrary[found].read = "Read"
    }

    displayLibrary();
}