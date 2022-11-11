// API URLS
const booksTitleAPI = 'https://www.googleapis.com/books/v1/volumes?q=title:';
const booksByIdAPI = 'https://www.googleapis.com/books/v1/volumes/'

// Google Key
const key = 'AIzaSyB-PoP7pVCAWxrn4HnA-Gwt6H8konn7WqI';

// Variables
let categories = [];
let bookTitle = "fifty Shades of Grey";

// This async function waits until the fetch runs so it can change the value
// of the id and we can use it in an outside fetch but still within the same
// function
const getBook = async () => {
    let id;
    await fetch( booksTitleAPI + bookTitle)

        .then(function (response) {
        return response.json();
        })

        .then(function (response) {
            id = response.items[0].id;
            console.log('Book ID: ', id);
        });

        // BookAPI with ID and key attached for the new fetch
        bookURL = booksByIdAPI + id + "?key=" + key ;

        const actualBook = async () => {
            await fetch(bookURL)
            .then(function (response) {
                return response.json();
                })
            .then(function (response){
                categories = response.volumeInfo.categories
                // List an array of the categories
                console.log(categories);
            })
        }
        
        actualBook();
};


getBook();





