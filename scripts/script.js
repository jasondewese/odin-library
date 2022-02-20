const readStatusBtns = document.querySelectorAll('.read-status');
const removeBookBtns = document.querySelectorAll('.remove');
const addBookBtn = document.querySelector('.add-button');
const submitBookBtn = document.querySelector('#submit-new-book');
const libraryContainer = document.querySelector('.library-container');

//store all books in an array
let myLibrary = [];


//Add status check event listener to each card that exists on page by default
for(let i = 0; i < readStatusBtns.length; i++) {
    readStatusBtns[i].addEventListener('click', changeReadStatus);
}

//Add event listener to remove button for all original cards
for(let i = 0; i < removeBookBtns.length; i++) {
    removeBookBtns[i].addEventListener('click', function() { this.parentElement.remove(); });
}

addBookBtn.addEventListener('click', openBookMenu);
submitBookBtn.addEventListener('click', addBookToLibrary);

//Begin function definitions

function changeReadStatus() {
    if (this.className == 'read-status not-read') {
        this.className = 'read-status read';
        this.textContent = 'Read';
    }
    else {
        this.className = 'read-status not-read';
        this.textContent = 'Not Read';
    }
}

function openBookMenu() {
    document.querySelector('#gray-out').style.display = 'block';
}

function addBookToLibrary() {
    let bookName = document.querySelector('#name').value;
    let bookAuthor = document.querySelector('#author').value;
    let bookPages = document.querySelector('#pages').value;
    let bookIsRead = document.querySelector('#is-read').checked;

    if (bookName) {
        let newBook = new Book(bookName, bookAuthor, bookPages, bookIsRead);
        myLibrary.push(newBook);

        libraryContainer.appendChild(createBookCard(newBook) );
    }

    console.log(myLibrary);
    displayLibrary();

    clearNewBookFields();
    document.querySelector('#gray-out').style.display = 'none';
}

function clearNewBookFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#is-read').checked = false;
}


/*
create new html card elements to be added to DOM for each new book
return html div element that matches card styles with new book info
Book {object} - contains name, author, pages, and read properties
return {DOM div element node}
*/
function createBookCard(Book) {
    let newCard = document.createElement('div');
    newCard.className = 'book-card';

    let newName = document.createElement('div');
    newName.className = "title";
    newName.textContent = Book.name;
    newCard.appendChild(newName);

    let newAuthor = document.createElement('div');
    newAuthor.className = 'author';
    newAuthor.textContent = Book.author;
    newCard.appendChild(newAuthor);

    let newPages = document.createElement('div');
    newPages.className = 'author';
    newPages.textContent = Book.pages + ' pages';
    newCard.appendChild(newPages);

    let newStatusBtn = document.createElement('button');    
    if (Book.read == true) {
        newStatusBtn.textContent = 'Read';
        newStatusBtn.className = 'read-status read';
    }
    else {
        newStatusBtn.textContent = 'Not Read';
        newStatusBtn.className = 'read-status not-read';
    }    
    newStatusBtn.addEventListener('click', changeReadStatus);
    newCard.appendChild(newStatusBtn);

    let newRemoveBtn = document.createElement('button');
    newRemoveBtn.className = 'remove';
    newRemoveBtn.textContent = 'Remove';
    newRemoveBtn.addEventListener('click', function() { this.parentElement.remove(); });
    newCard.appendChild(newRemoveBtn);

    return newCard;
}

function displayLibrary() {
    //show all books in updated library
    //currently this is taken care of by addBookToLibrary
    //might need in future if give user ability to clear and/or import lists of books
}

/*
    Book constructor method
    name {string} - title of book
    author {string} - name of author
    pages {number} - amount of pages in book
    read {boolean} - true if book already read, false if not read yet
*/
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}