//Basic Fetch by title or category

let bookTitle = "The Hunger Games";

function getBook() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=title:' + bookTitle)

        .then((response) => response.json())

        .then((data) => console.log('Books by Title', data));

};

let categories = "fiction";

function getCategory() {
     fetch('https://www.googleapis.com/books/v1/volumes?q=subject:' + categories)

        .then((response) => response.json())

        .then((data) => console.log('Books by Category', data));
               
};


getBook();

getCategory();


