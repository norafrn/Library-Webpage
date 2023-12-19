
let books = JSON.parse(jsonDataLibrary);

//access the table container in html
let tableLocation = document.getElementById("books-table");

//declare variable to store original table 
let originalTable;

buildTable(books); 

function buildTable(bookList) { 
    //create a table element and a header row element 
    let table = document.createElement("table");
    let headerRow = document.createElement("tr"); // Change th to tr

    //create the header row cells
    let bookID = document.createElement("th");
    bookID.textContent = "Book Id";
    headerRow.appendChild(bookID);

    let BookName = document.createElement("th"); 
    BookName.textContent = "Book Name";
    headerRow.appendChild(BookName);

    let author = document.createElement("th");
    author.textContent = "Author";
    headerRow.appendChild(author);

    let PublishedYear = document.createElement("th"); 
    PublishedYear.textContent = "Published Year";
    headerRow.appendChild(PublishedYear);

    let ISBN = document.createElement("th"); 
    ISBN.textContent = "ISBN";
    headerRow.appendChild(ISBN);

    let Quantity = document.createElement("th"); 
    Quantity.textContent = "Quantity";
    headerRow.appendChild(Quantity);

    let CurrentAvailibility = document.createElement("th"); 
    CurrentAvailibility.textContent = "Current Availability";
    headerRow.appendChild(CurrentAvailibility);

    //append header row to table
    table.appendChild(headerRow);
    
    //create each row by looping through all books
    for (let i = 0; i < bookList.length; i++) { 

        //create a row for each book
        let row = document.createElement("tr");

        //add table cells for each attribute of book objects
        row.innerHTML = '<td>' + bookList[i].BookID + '</td>' +
                        '<td>' + bookList[i].BookName + '</td>' +
                        '<td>' + bookList[i].Author + '</td>' +
                        '<td>' + bookList[i].PublishedYear + '</td>' +
                        '<td>' + bookList[i].ISBN + '</td>' +
                        '<td>' + bookList[i].Quantity + '</td>' +
                        '<td>' + bookList[i].CurrentAvailibility + '</td>';
                
        //append updated row to table
        table.appendChild(row);
    }

    //store the original table 
    originalTable = table.innerHTML;

    // Append updated table to table location in HTML
    tableLocation.innerHTML = '';
    tableLocation.appendChild(table);
}

//event listener for text input 
let btn = document.getElementById("submit-btn");
btn.addEventListener("click", function (ev) {
    filter(ev);
});

function filter(ev) {

    ev.preventDefault();

    //clear existing table
    tableLocation.innerHTML = '';

    //create an array to store filtered results
    let filteredBooks = [];

    //access filter search bar
    let input = document.getElementById("author-input");

    //store its value 
    let inputVal = input.value.toLowerCase();

    //loop through all books to match the authors name
    for (let i = 0; i < books.length; i++) { 

        let thisAuthor = books[i].Author.toLowerCase();
        
        //check if author name matches input
        if (thisAuthor.startsWith(inputVal)) {
            filteredBooks.push(books[i]);
        }

        //check if searched author existed in the list 
        if (filteredBooks.length > 0) {
            buildTable(filteredBooks);
        } 
        //if not : set table to original table {
        else { 
            tableLocation.innerHTML = "<p>Author Not Found!</p>";
            tableLocation.style.fontFamily = "var(--main-font)";
            tableLocation.style.fontWeight = "bold";
        }
    }

    filteredBooks.forEach(filteredBook => {
        let auth = filteredBook.Author;
        console.log(auth);
    });
}

