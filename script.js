let myLibrary = [new Book("A Game of Thrones","George R.R Martin",694,true) , new Book("A Clash of Kings","George R.R Martin",761,false)];

// const book1 = new Book("A Game of Thrones","George R.R Martin",694,true);
// const book2 = new Book("A Clash of Kings","George R.R Martin",761,false);


// myLibrary = [book1,book2];

function Book(title,author,NumOfPages,HasRead){
    this.title = title;
    this.author = author;
    this.NumOfPages = NumOfPages;
    this.HasRead = HasRead;
}

function addBookToLibrary() {

    // Getting access to html elements
    



    let bookName = document.getElementById("bookTitle");
    let bookAuthor = document.getElementById("bookAuthor");
    let numOfPages = document.getElementById('numberOfPages');
    let hasRead = document.getElementById('hasRead');

    // Set Validators

    if (bookName.value === '' | bookAuthor.value === '' | numOfPages.value === '' | numOfPages.value <= 0){
        alert('Please fill up the form. No Negative Numbers for Number of Pages');
        
    }
    else {

        // Create new Book Object
        const newBook = new Book(bookName.value,bookAuthor.value,numOfPages.value,hasRead.checked);
        myLibrary.push(newBook);

        // Clear the form values.
        bookName.value = "";
        bookAuthor.value = "";
        numOfPages.value = "";
        hasRead.checked = false;


        // Clear book display div then loop through library array again.
        //const displayBookDiv = document.getElementsByClassName("bookDisplay");
        //displayBookDiv[0].innerHTML = "";
        clearBookDisplay();
        loopThroughLibrary(myLibrary);

    }

    


}

function clearBookDisplay(){
    document.getElementsByClassName("bookDisplay")[0].innerHTML = "";
}

function loopThroughLibrary(myLibrary){
    const displayBookDiv = document.getElementsByClassName("bookDisplay")
    
    for (var i = 0; i < myLibrary.length; i++){
        var newDiv = document.createElement('div');
        
        newDiv.innerHTML =
        `
            <h1>${myLibrary[i].title}</h1>
            <p data-book="${myLibrary[i].title}">Author Name: ${myLibrary[i].author}</p>
            <p data-book="${myLibrary[i].title}">Number of Pages: ${myLibrary[i].NumOfPages}</p>
            <p data-book="${myLibrary[i].title}">Has Book been read yet? ${myLibrary[i].HasRead}</p>
            <button onclick="deleteBook(this)" data-book="${myLibrary[i].title}">Delete</button>
            <button onclick="bookHasBeenRead(this)" data-book="${myLibrary[i].title}">Read</button>
        `
        displayBookDiv[0].appendChild(newDiv);
    }
}


function deleteBook(button) {
    //console.log(button.getAttribute('data-book'))
    let index = myLibrary.findIndex(book => book.title === button.getAttribute('data-book'));

    if (index !== -1){
        myLibrary.splice(index,1);
    }
    clearBookDisplay();
    loopThroughLibrary(myLibrary);

}

function bookHasBeenRead(button) {

    // Get Unique identifier for index ( Book title )
    // Use index to get access to array book object and change the value.
    let index = myLibrary.findIndex(book => book.title === button.getAttribute('data-book'));
    myLibrary[index].HasRead = true;
    clearBookDisplay();
    loopThroughLibrary(myLibrary);
}






console.log(myLibrary);

// To initialize the books onto the webpage when it loads.
loopThroughLibrary(myLibrary);
